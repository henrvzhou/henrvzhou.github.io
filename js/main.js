//javascript

const myNav = document.getElementById('myNavbar');
let body = document.body;
let html = document.documentElement;

window.onscroll = () => {
  if (body.scrollTop >= 100 || html.scrollTop >= 100) {
    myNav.classList.add('navScroll');
  } else {
    myNav.classList.remove('navScroll');
  }
}

