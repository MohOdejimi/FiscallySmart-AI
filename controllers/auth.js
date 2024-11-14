const { isEmail, isLength, normalizeEmail, isEmpty } = require("validator");
const User = require("../models/Users");
const passport = require('passport')


exports.getLogin = (req,res) => {
  console.log(req.user)
    if (req.user) {
        return res.redirect('/dashboard')
    }
    res.render("login.ejs", {
      title: "Create Account",
      errors: req.flash('errors')
    });
}

exports.getLogout = async (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        console.log('Error during logout:', err);
        return next(err);
      }
      req.session.destroy((err) => {
        if (err) {
          console.log('Error: Failed to destroy the session during logout.', err);
          return res.redirect('/');
        }
        req.user = null;
        res.redirect('/');
      });
    });
  } catch (err) {
    console.log('Error during logout:', err);
    res.redirect('/');
  }
};


exports.postLogin = async (req, res, next) => {
  try {
    const validationErrors = []
    if(!isEmail(req.body.email)){
      validationErrors.push({msg: 'Please enter a valid email.'})
    }
    if(isEmpty(req.body.password)){
      validationErrors.push({msg: 'Password cannot be blank.'})
    }
    if(validationErrors.length){
      req.flash('errors', validationErrors)
     // console.log(req.flash('errors'))
      return res.redirect('/login')
    }
    req.body.email = normalizeEmail(req.body.email, { gmail_remove_dots: false })

    passport.authenticate('local', async (err, user, info) => {
      if (err) { return next(err); }
      if (!user) {
        req.flash('errors', info);
        return res.redirect('/login');
      }
      req.logIn(user, async (err) => {
        if (err) { return next(err); }
        res.redirect('/dashboard');
      });
    })(req, res, next);
  } catch(err) {
    console.error(err);
    return next(err);
  }
}

exports.getSignup = (req, res) => {
  if (req.user) {
     return res.redirect("/dashboard");
   }
   res.render("signup.ejs", {
     title: "Create Account",
     errors: req.flash('errors')
   });
}
exports.postSignup = async (req, res, next) => {
  try {
    const validationErrors = [];
    if (!isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (!isLength(req.body.password, { min: 8 }))
      validationErrors.push({
        msg: "Password must be at least 8 characters long",
      });
    if (req.body.password !== req.body.confirmPassword)
      validationErrors.push({ msg: "Passwords do not match" });

    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      return res.redirect("../signup");
    }
``
    req.body.email = normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }],
    });

    if (existingUser) {
      req.flash("errors", {
        msg: "Account with that email address already exists.",
      });
      console.log(existingUser)
      return res.redirect("../signup");
    }

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/dashboard");
    });
  } catch (err) {
    return next(err);
  }
};
