const btnPopup = document.querySelectorAll('.btn-popup');
const popupDisplay = document.querySelector('.popup');
const backFilter = document.querySelector('.back-filter');
const newElement = document.createElement('div');
const flexWidth = document.querySelector('.flex-width');
const titleBold = document.querySelectorAll('.title-bolder');
const points = document.querySelectorAll('.point');

console.log(popupDisplay);
const flexPopup = document.createElement('div');
const btnClose = document.createElement('button');
popupDisplay.appendChild(newElement);

let popupObj = [
  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: './Image/Snapshoot.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link_live: 'https://b77748.github.io/arnaud_portfolio/',
    link_source: 'https://github.com/B77748/arnaud_portfolio',
  },

  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: './Image/third.png',
    technologies: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
    link_live: 'https://b77748.github.io/arnaud_portfolio/',
    link_source: 'https://github.com/B77748/arnaud_portfolio',
  },

  {
    name: 'Facebook 360',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: './Image/portfolio.jpg',
    technologies: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
    link_live: 'https://b77748.github.io/arnaud_portfolio/',
    link_source: 'https://github.com/B77748/arnaud_portfolio',
  },

  {
    name: 'Uber Navigation',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: './Image/second.png',
    technologies: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
    link_live:
      'https://b77748.github.io/arnaud_portfolio/' + './Image/Icon.png',
    link_source: 'https://github.com/B77748/arnaud_portfolio',
  },
];

let objImage = ['./Image/Icon.png', './Image/Vector.png'];
// eslint-disable-next-line no-unused-expressions, no-plusplus
function clickEvent() {
  for (let i = 0; i < btnPopup.length; i++) {
    btnPopup[i].addEventListener('click', function () {
      popupDisplay.style.display = 'block';
      newElement.style.display = 'block';
      displayElement(i);
    });
  }
}

clickEvent();

function displayElement(num) {
  const titleDisplay = document.createElement('h2');

  btnClose.textContent = 'X';
  btnClose.style.fontSize = '20px';
  btnClose.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  btnClose.style.border = 'none';
  flexPopup.setAttribute('class', 'flex-popup');

  const imgPopup = document.createElement('img');
  // imgPopup.style.height = '200px';
  imgPopup.style.width = '100%';
  const textDescription = document.createElement('p');
  textDescription.style.width = '100%';
  textDescription.style.fontSize = 13 + 'px';
  textDescription.style.lineHeight = 20 + 'px';
  const divBtn = document.createElement('div');
  divBtn.style.margin = '20px 0 0 0';
  let btnCard;
  let arr = popupObj[num].technologies;
  const borderDiv = document.createElement('div');
  borderDiv.style.height = '2px';
  borderDiv.style.width = '200px';
  borderDiv.style.textAlign = 'center';
  borderDiv.style.backgroundColor = 'rgba(235, 236, 240, 1)';
  borderDiv.style.margin = '20px';
  const linkBtn = document.createElement('a');
  const linkImage = document.createElement('img');
  linkImage.setAttribute('src', objImage[0]);
  linkImage.style.height = '14px';
  linkImage.style.width = '14px';
  linkImage.style.marginTop = '8px';
  linkImage.style.marginLeft = '15px';
  linkBtn.setAttribute('href', popupObj[num].link_live);
  linkBtn.textContent = 'See Live';
  linkBtn.style.textDecoration = 'none';
  linkBtn.style.color = 'rgba(57, 109, 242, 1)';
  linkBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  linkBtn.style.border = 'thin solid rgba(57, 109, 242, 1)';
  linkBtn.style.padding = '10px 15px 10px 15px';
  linkBtn.style.margin = '30px';

  const sourceBtn = document.createElement('a');
  const sourceImage = document.createElement('img');
  sourceImage.setAttribute('src', objImage[1]);
  sourceImage.style.height = '14px';
  sourceImage.style.width = '14px';
  sourceImage.style.marginTop = '8px';
  sourceImage.style.marginLeft = '15px';
  sourceBtn.setAttribute('href', popupObj[num].link_live);
  sourceBtn.textContent = 'See Source';
  sourceBtn.style.textDecoration = 'none';
  sourceBtn.style.color = 'rgba(57, 109, 242, 1)';
  sourceBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  sourceBtn.style.border = 'thin solid rgba(57, 109, 242, 1)';
  sourceBtn.style.padding = '10px 15px 10px 15px';

  titleDisplay.textContent = `${popupObj[num].name}`;
  imgPopup.setAttribute('src', popupObj[num].featured_image);
  textDescription.textContent = `${popupObj[num].description}`;
  titleDisplay.setAttribute('class', 'titleDisplay');
  textDescription.style.textAlign = 'left';
  for (i = 0; i < arr.length; i++) {
    btnCard = document.createElement('button');
    btnCard.textContent = arr[i];
    btnCard.style.marginRight = 5 + 'px';
    btnCard.style.padding = 4 + 'px';
    btnCard.style.border = 'none';
    btnCard.style.borderRadius = 3 + 'px';
    btnCard.style.color = 'rgba(96, 112, 255, 1)';
    btnCard.style.backgroundColor = 'rgba(235, 235, 255, 1)';

    divBtn.append(btnCard);
  }
  linkBtn.append(linkImage);
  sourceBtn.append(sourceImage);
  flexPopup.append(titleDisplay, btnClose);
  newElement.append(
    flexPopup,
    imgPopup,
    textDescription,
    divBtn,
    borderDiv,
    linkBtn,
    sourceBtn
  );
}

btnClose.addEventListener('click', reload);

function reload() {
  reload = location.reload();
}
