import { gatherData } from './index'

const champBtn = document.querySelector('.champ-btn')
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const cards = document.querySelector('.champion-cards');

const classHeader = document.querySelector('.header');
const championHeader = document.querySelector('.champion-header');
const championAbility = document.querySelector('.champion-abilities');
const championSkin = document.querySelector('.champion-skins')
const skinBtns = document.querySelectorAll('.skin-btn')

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

skinBtns.forEach(btn => btn.addEventListener('click', event => {
    event.target.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
    document.querySelector('.champion-splash').src = event.target.parentElement.querySelector('img').src 
}))

champBtn.addEventListener('click', sendToChampionList)

export { sendToChampionPage as default }