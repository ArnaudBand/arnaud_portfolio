const btnPopup = document.querySelectorAll('.btn-popup');
const popupDisplay = document.querySelector('.popup');

const newElement = document.createElement('div');

const flexPopup = document.createElement('div');
const btnClose = document.createElement('button');
popupDisplay.appendChild(newElement);

const popupObj = [
  {
    name: 'Maths Magicians',
    small_title: 'Canopy . Full Stack Dev . 2018',
    description:
      "I created a full website for the Math magicians app, consisting of several pages and using the components you already created.",
    featured_image: 'https://github.com/microverseinc/curriculum-react-redux/raw/main/math-magicians/images/calculator.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    link_live: 'https://github.com/ArnaudBand/math-magicians',
    link_source: 'https://math-1.herokuapp.com/',
  },

  {
    name: 'Book Store',
    small_title: 'Facebook . Full Stack Dev . 2018',
    description:
      "The Bookstore is a website similar to the "Awesome Books" website built in the previous module. You will create an MVP version of it that allows you to:  Display a list of books,  Add a book, Remove a selected book. By building this application, you will learn how to use React and Redux.",
    featured_image: './Image/third.png',
    technologies: ['React', 'Redux', 'CSS', 'JavaScript'],
    link_live: 'https://math-2.herokuapp.com/',
    link_source: 'https://github.com/ArnaudBand/book-store',
  },

  {
    name: 'Todo List',
    small_title: 'Facebook . Full Stack Dev . 2018',
    description:
      "Todo_list is an app build using html, and CSS. I have used also Webpack and ES6 JavaScript.",
    featured_image: './Image/portfolio.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link_live: 'https://arnaudband.github.io/Microverse-_Todo_list/dist/',
    link_source: 'https://github.com/ArnaudBand/Microverse-_Todo_list',
  },

  {
    name: 'Weather app',
    small_title: 'Facebook . Full Stack Dev . 2018',
    description:
      "Weather App build using JavaScript fetch information in Api.",
    featured_image: './Image/second.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link_live: 'https://arnaudband.github.io/myfirstapp/',
    link_source: 'https://github.com/ArnaudBand/myfirstapp',
  },
];

const objImage = ['./Image/Icon.png', './Image/Vector.png'];

function clickEvent() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < btnPopup.length; i++) {
    btnPopup[i].addEventListener('click', () => {
      popupDisplay.style.display = 'block';
      newElement.style.display = 'block';
      // eslint-disable-next-line no-use-before-define
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
  const smallTitle = document.createElement('p');
  smallTitle.textContent = `${popupObj[num].small_title}`;
  smallTitle.setAttribute('class', 'smallTitle');
  const imgPopup = document.createElement('img');
  imgPopup.setAttribute('class', 'imgPopup');
  const flexText = document.createElement('div');
  // eslint-disable-next-line camelcase
  const flexText_2 = document.createElement('div');
  const textDescription = document.createElement('p');
  textDescription.setAttribute('class', 'textDescription');
  const divBtn = document.createElement('div');
  divBtn.style.margin = '20px 0 0 0';
  let btnCard;
  const arr = popupObj[num].technologies;
  const borderDiv = document.createElement('div');
  borderDiv.style.height = '2px';
  borderDiv.style.width = '200px';
  borderDiv.style.textAlign = 'center';
  borderDiv.style.backgroundColor = 'rgba(235, 236, 240, 1)';
  borderDiv.style.margin = '20px 90px 20px 90px';
  const linkBtn = document.createElement('a');
  const linkImage = document.createElement('img');
  linkImage.setAttribute('src', objImage[0]);
  linkImage.style.height = '12px';
  linkImage.style.width = '12px';
  linkImage.style.marginTop = '8px';
  linkImage.style.marginLeft = '15px';
  linkBtn.setAttribute('href', popupObj[num].link_live);
  linkBtn.textContent = 'See Live';
  linkBtn.style.textDecoration = 'none';
  linkBtn.style.color = 'rgba(57, 109, 242, 1)';
  linkBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  linkBtn.style.border = 'thin solid rgba(57, 109, 242, 1)';
  linkBtn.style.padding = '5px 2px';
  linkBtn.style.margin = '8px';

  const sourceBtn = document.createElement('a');
  const sourceImage = document.createElement('img');
  sourceImage.setAttribute('src', objImage[1]);
  sourceImage.style.height = '12px';
  sourceImage.style.width = '12px';
  sourceImage.style.marginTop = '8px';
  sourceImage.style.marginLeft = '15px';
  sourceBtn.setAttribute('href', popupObj[num].link_live);
  sourceBtn.textContent = 'See Source';
  sourceBtn.style.textDecoration = 'none';
  sourceBtn.style.color = 'rgba(57, 109, 242, 1)';
  sourceBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  sourceBtn.style.border = 'thin solid rgba(57, 109, 242, 1)';
  sourceBtn.style.padding = '5px 2px';

  titleDisplay.textContent = `${popupObj[num].name}`;
  imgPopup.setAttribute('src', popupObj[num].featured_image);
  textDescription.textContent = `${popupObj[num].description}`;
  titleDisplay.setAttribute('class', 'titleDisplay');
  textDescription.style.textAlign = 'left';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    btnCard = document.createElement('button');
    btnCard.textContent = arr[i];
    btnCard.style.marginRight = '5px';
    btnCard.style.padding = '4px';
    btnCard.style.border = 'none';
    btnCard.style.borderRadius = '3px';
    btnCard.style.color = 'rgba(96, 112, 255, 1)';
    btnCard.style.backgroundColor = 'rgba(235, 235, 255, 1)';

    divBtn.append(btnCard);
  }
  flexText_2.append(
    divBtn,
    borderDiv,
    linkBtn,
    sourceBtn,
  );
  flexText_2.setAttribute('class', 'flexText_2');

  flexText.append(
    textDescription,
    flexText_2,
  );
  flexText.setAttribute('class', 'flexText');
  newElement.setAttribute('class', 'newElement');
  linkBtn.append(linkImage);
  sourceBtn.append(sourceImage);
  flexPopup.append(titleDisplay, btnClose);
  newElement.append(
    flexPopup,
    smallTitle,
    imgPopup,
    flexText,
  );
}

// eslint-disable-next-line no-use-before-define
btnClose.addEventListener('click', reload);

function reload() {
  // eslint-disable-next-line no-func-assign, no-restricted-globals
  reload = location.reload();
}
