const profileBar = document.querySelector('#profileBar');
const profileImg = document.querySelector('#profileImg');
const mobileMenu = document.getElementById('mobile-menu')
const menu = document.getElementById('menu')

const display = () => {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
}
menu.addEventListener('click', display)

const show = () => {
  if (profileBar.style.display === 'none') {
    profileBar.style.display = 'block';
  } else {
    profileBar.style.display = 'none';
  }
};
profileImg.addEventListener('click', show);

function changeColorOnClick() {
    const profileElements = document.querySelectorAll('#profileDB, #profileNEWS, #profileRS','#profileIR');
  
    profileElements.forEach(element => {
      element.addEventListener('click', () => {
        if(element.style.color === 'white') {
            element.style.color = '#008080';
        } else {
            element.style.color = 'white'
        }
        
      });
    });
  }
changeColorOnClick();


