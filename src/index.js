import { championId } from './displayData';
import { sendToChampionPage } from './displayData'


// setInterval(() => console.log(championId), 1000)

const loadGridDivs = () => {
    const selectParent = document.querySelector('.contain');
    const getChampionNames = fetch('https://league-of-legends-stats.p.rapidapi.com/champions', {
        'method': 'GET',
        'headers': {
            "x-rapidapi-host": "league-of-legends-stats.p.rapidapi.com",
		    "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
        }
    })
    // const responses = [
    //     fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10`, {
    //         'method': 'GET',
    //         'headers': {
    //             "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
    //             "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
    //         }
    //     }),
    //     fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=10`, {
    //         'method': 'GET',
    //         'headers': {
    //             "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
    //             "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
    //         }
    //     }),
    //     fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=2&size=10`, {
    //         'method': 'GET',
    //         'headers': {
    //             "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
    //             "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
    //         }
    //     }),
    // ]
    // const requests = responses.map(response => response.then(getData => getData.json()))
    // const getChampionImages = Promise.all(requests)
    
    for (let i = 0; i < 159; i++) {
        const cardDiv = document.createElement('div');
        const cardImg = document.createElement('div');
        const divOverlay = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const a = document.createElement('a');

        selectParent.appendChild(a)
        a.appendChild(cardDiv);
        cardDiv.appendChild(cardImg);
        cardImg.appendChild(img);
        cardImg.appendChild(divOverlay);
        divOverlay.appendChild(p);

        a.href = './Champions/Champion.html'
        a.id = 'CHICKEN'
        cardDiv.classList.add('card');
        cardImg.classList.add('card-img');
        divOverlay.classList.add('img-overlay');
        img.classList.add('imgs');

        a.addEventListener('click', sendToChampionPage)
    }
    
    // getChampionNames.then(response => response.json())
    // .then(data => {
    //     const getPTags = document.querySelectorAll('p');
    //     const aTags = document.querySelectorAll('a')

    //     for (let i = 0; i < data.champ_names.length; i++) {
    //          if (data.champ_names[i] != 'Kled & Skaarl' && data.champ_names[i] != 'Mega Gnar') {
    //             getPTags[i].innerText = data.champ_names[i] 
    //             aTags[i].id = getPTags[i].innerText

    //         }
    //         else getPTags[i].parentElement.parentElement.parentElement.remove()
    //     }
    // })

    // getChampionImages
    // .then(data => {
    //     console.log(data, data[0])
    //     const getPTags = document.querySelectorAll('p');
    //     let index = 0;

    //     const runFirstPromise = (getIndex) => {
    //         for (let j = 0; j < getPTags.length; j++) {
    //             for (let i = 0; i < data[getIndex].champions.length; i++) {
    //                 // getImgTags[i].src = data.champions[champion].node.champion.profile_image.url
    //                 if (data[getIndex].champions[i].node.champion.profile_image === null) {
    //                     continue
    //                 } else if (getPTags[j].innerText == data[getIndex].champions[i].node.champion_name) {
    //                     console.log('Check all', getPTags[j], data[getIndex].champions[i].node.champion_name)
    //                     getPTags[j].parentElement.parentElement.querySelector('img').src = data[getIndex].champions[i].node.champion.profile_image.url
    //                 }
    //             }
    //         }
    //     }
    //     while (index <= 2) {
    //         runFirstPromise(index)
    //         index++
    //     }
    // }).catch(error => console.log(error))

}
const gatherData = (index) => {
    // const getChampionData = fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/%7Blang%7D/${index.path[3].id}`, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
    //         "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
    //     }
    // }).then(response => response.json())

    return index.path[3].id
}

// function sendToChampionPage (event) {
//     championId = event.path[3].id
    
// }


window.addEventListener('load', loadGridDivs)


