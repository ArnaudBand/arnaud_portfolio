/* eslint-disable no-plusplus */
const btnMenu = document.querySelector('.btnMenu');
const rightSide = document.querySelector('.right-side');
const topLink = document.querySelectorAll('.top-link');
const closeMenu = document.querySelector('.closeMenu');

btnMenu.addEventListener('click', () => {
  rightSide.style.display = 'flex';
  for (let i = 0; i < topLink.length; i++) {
    topLink[i].style.display = 'block';
  }
});

closeMenu.addEventListener('click', () => {
  rightSide.style.display = 'none';
  for (let i = 0; i < topLink.length; i++) {
    topLink[i].style.display = 'none';
  }
});

for (let i = 0; i < topLink.length; i++) {
  topLink[i].addEventListener('click', () => {
    rightSide.style.display = 'none';
  });
}
