
const btnPopup = document.querySelectorAll('.btn-popup');
const popupDisplay = document.querySelector('.popup');
const newElement = document.createElement('div')
popupDisplay.append(newElement);

let popupObj = [

    {
        name: 'Tonic',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './Image/Snapshoot.png',
        technologies : ["HTML", "CSS", "JavaScript"],
        link_live : 'https://b77748.github.io/arnaud_portfolio/',
        link_source : 'https://github.com/B77748/arnaud_portfolio'
    },

    {
        name: 'Multi-Post Stories',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './Image/third.png',
        technologies : ["HTML","Ruby on Rail", "CSS", "JavaScript"],
        link_live : 'https://b77748.github.io/arnaud_portfolio/',
        link_source : 'https://github.com/B77748/arnaud_portfolio'
    },

    {
        name: 'Facebook 360',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './Image/portfolio.jpg',
        technologies : ["HTML","Ruby on Rail", "CSS", "JavaScript"],
        link_live : 'https://b77748.github.io/arnaud_portfolio/',
        link_source : 'https://github.com/B77748/arnaud_portfolio'
    },

    {
        name: 'Uber Navigation',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './Image/second.png',
        technologies : ["HTML","Ruby on Rail", "CSS", "JavaScript"],
        link_live : 'https://b77748.github.io/arnaud_portfolio/',
        link_source : 'https://github.com/B77748/arnaud_portfolio'
    }
]
// eslint-disable-next-line no-unused-expressions, no-plusplus
function clickEvent() {
    for(let i = 0; i < btnPopup.length; i++) {
        btnPopup[i].addEventListener('click', function() {
            popupDisplay.style.display = "block";
            displayElement(i)
        })

    }
    
}

clickEvent()


function displayElement(num) {
    const titleDisplay = document.createElement('h2');
    const imgPopup = document.createElement('img');
    imgPopup.style.height = 200 + 'px'
    imgPopup.style.width = 80 + '%'
    const textDescription = document.createElement('p')
    textDescription.style.width = 90 + '%'
    textDescription.style.fontSize = 18 + "px"
    textDescription.style.margin = 'auto'
    const divBtn = document.createElement('div')
    let btnCard = document.createElement('button')
    
        
            titleDisplay.textContent = `${popupObj[num].name}`;
            imgPopup.setAttribute('src', popupObj[num].featured_image)
            textDescription.textContent = `${popupObj[num].description}`
            titleDisplay.setAttribute('class', 'titleDisplay')
            divBtn.append(btnCard)
            newElement.append(titleDisplay, imgPopup, textDescription, divBtn)
    
    
}