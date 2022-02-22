import { gatherData } from './index'

const champBtn = document.querySelector('.champ-btn')
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const cards = document.querySelector('.champion-cards');

const classHeader = document.querySelector('.header');
const championHeader = document.querySelector('.champion-header');
const championAbility = document.querySelector('.champion-abilities');
const championSkin = document.querySelector('.champion-skins')
const skinBtns = document.querySelectorAll('.skin-btn');
const abilityBtns = document.querySelectorAll('.ability-icon')

const sendToChampionPage = event => {
    console.log('RICE', event.target, event.target.id, gatherData(event))

    header.style.display = 'none';
    nav.style.display = 'none';
    cards.style.display = 'none';

    classHeader.style.display = '';
    championHeader.style.display = ''
    championAbility.style.display = ''
    championSkin.style.display = ''
}

const sendToChampionList = event => {
    header.style.display = '';
    nav.style.display = '';
    cards.style.display = '';

    classHeader.style.display = 'none';
    championHeader.style.display = 'none'
    championAbility.style.display = 'none'
    championSkin.style.display = 'none'
}

const changeAbilitySection = (index, event) => {
    fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${index}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
            "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
        }
    }).then(response => response.json())
    .then(data => {
        console.log(data)
        const champData = data.champion[0]
        const abilityKey = document.querySelector('.ability-info').firstElementChild;
        const abilityName = document.querySelector('.ability-info').querySelector('h4')
        const abilityDesc = document.querySelector('.ability-info').lastElementChild
        const abilityVideo = document.querySelector('video')


        abilityKey.innerText = event.target.parentElement.id
        console.log('Data', champData, champData.hasOwnProperty(event.target.id))
        if (champData.hasOwnProperty(event.target.id)) {
            abilityName.innerText = champData[event.target.id][`${event.target.id}_name`];
            abilityDesc.innerText = champData[event.target.id][`${event.target.id}_description`];
            abilityVideo.firstElementChild.src = champData[event.target.id][`${event.target.id}_video_mp4`]
            abilityVideo.lastElementChild.src = champData[event.target.id][`${event.target.id}_video_webm`]
            abilityVideo.load()

        }

    })

    
}

skinBtns.forEach(btn => btn.addEventListener('click', event => {
    event.target.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
    document.querySelector('.champion-splash').src = event.target.parentElement.querySelector('img').src 
}))

abilityBtns.forEach(btn => btn.addEventListener('click', event => {
    const championName = document.querySelector('.champion-container').lastElementChild

    for (let i = 0; i < abilityBtns.length; i++) {
        if (abilityBtns[i].parentElement.classList.contains('ability-up-animation')) {
            abilityBtns[i].parentElement.classList.toggle('ability-up-animation')
            abilityBtns[i].parentElement.classList.toggle('ability-btn')
        } 
    }
    
    event.target.parentElement.classList.toggle('ability-btn')
    event.target.parentElement.classList.toggle('ability-up-animation')
    event.target.parentElement.dataset.click = true

    console.log('Placement', changeAbilitySection(championName.innerText, event))
}))

champBtn.addEventListener('click', sendToChampionList)

export { sendToChampionPage as default }