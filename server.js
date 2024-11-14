require('dotenv').config({path: './config/.env'})

const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session);
const logger = require('morgan')
const methodOverride = require('method-override')


// Passport config
require('./config/passport')(passport)

// Session configuration 
const store = new MongoStore({
    uri: process.env.DB_STRING, 
    collection: 'sessions' 
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store
}));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// db
const connectDB = require('./config/db')
connectDB()

//Quiz config
require('./config/stockQuiz')
require('./config/bondQuiz')
require('./config/etfQuiz')
require('./config/introToInvestingQuiz')
require('./config/riskQuiz')

// Middleware
app.set('view-engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger('dev'))
app.use(flash())
app.use(methodOverride('_method'));

// Routes 
const mainRoutes = require('./routes/main')
const dashBoardRoutes = require('./routes/dashboard')
const newsRoutes = require('./routes/news')
const learnRoutes = require('./routes/learn')
const quizRoutes = require('./routes/quiz/quiz')
const goalsRoutes = require('./routes/goals')
const tradeRoutes = require('./routes/trading')
const aiRoutes = require('./routes/ai')

// routes implementation
app.use('/', mainRoutes)
app.use('/dashboard', dashBoardRoutes)
app.use('/news', newsRoutes)
app.use('/learn', learnRoutes)
app.use('/quiz', quizRoutes)
app.use('/goals', goalsRoutes)
app.use('/trading', tradeRoutes)
app.use('/ai', aiRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})