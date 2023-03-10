const specialist = document.getElementById('specialist');
const colorBackground = '#062421';
const textDark = Array.from(document.querySelectorAll('.text_dark'));
const nav = document.querySelector('nav');
const swipeUp = document.querySelector('.swipe_up');
const toggleTheme = document.querySelector('.toggle_theme');
const icons = document.querySelectorAll('.icon');
let navItem = document.querySelector('.nav_item');
let buttonCV = document.querySelector('.button_cv');
let burgerMenu = document.querySelector('.burger_menu');
let span = document.querySelectorAll('.burger_menu span');
let toggleIcon = document.querySelector('.toggle_theme img');
let toggleNav = false;
let modeIcon = 'light';
let toggle = true;
let count = 0;
setInterval(() => {
  if (count == 0) {
    specialist.innerText = `Fullstack Developer`;
    count++;
  } else if (count == 1) {
    specialist.innerText = `Web Designer`;
    count++;
  } else if (count == 2) {
    specialist.innerText = `E/I Commissioning Engineer`;
    count++;
  } else if (count == 3) {
    specialist.innerText = `Ordinary Person`;
    count++;
  } else if (count == 4) {
    count = 0;
  }
}, 1000);
document.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    swipeUp.style.display = 'flex';
    toggleTheme.style.bottom = '72px';
  } else {
    setTimeout(() => {
      swipeUp.style.display = 'none';
    }, 400);
    toggleTheme.style.bottom = '36px';
  }
});

toggleTheme.addEventListener('click', () => {
  if (toggle) {
    mode('#0624212f', colorBackground, 'white', '0 0 2px rgba(0, 0, 0, 0.7)');
    toggleIcon.setAttribute('src', 'src/img/sun.svg');
    toggleTheme.style.backgroundColor = 'white';
    toggle = false;
    modeIcon = 'dark';
  } else {
    mode('rgba(255, 255, 255, 0.3)', 'white', 'black', 'none');
    toggleIcon.setAttribute('src', 'src/img/moon.svg');
    toggleTheme.style.backgroundColor = '#39403E';
    toggle = true;
    modeIcon = 'light';
  }
});

setInterval(() => {
  icons.forEach((element) => {
    let attr = element.getAttribute('src').split('-');
    element.setAttribute('src', `${attr[0]}-${modeIcon}.svg`);
  });
}, 1000);

function mode(colorNav, colorBackground, color, shadow) {
  document.body.style.backgroundColor = colorBackground;
  nav.style.backgroundColor = colorNav;
  document.querySelector('#find_me h1').style.textShadow = shadow;
  textDark.forEach((element) => {
    element.style.color = color;
  });
  span.forEach((element) => {
    element.style.backgroundColor = color;
  });
}

burgerMenu.addEventListener('click', () => {
  if (toggleNav) {
    navItem.style.display = 'none';
    buttonCV.style.display = 'none';
    span.forEach((element) => {
      element.style.width = '100%';
    });
    toggleNav = false;
  } else {
    navItem.style.display = 'flex';
    buttonCV.style.display = 'flex';
    toggleNav = true;
    span[1].style.width = '70%';
    span[2].style.width = '50%';
  }
});
