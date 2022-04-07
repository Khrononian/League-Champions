import  sendToChampionPage  from './displayData'
import { skinBtnScroll } from './displayData';

const loadGridDivs = () => {
    const selectParent = document.querySelector('.contain');
    const getChampionNames = fetch('https://league-of-legends-stats.p.rapidapi.com/champions', {
        'method': 'GET',
        'headers': {
            "x-rapidapi-host": "league-of-legends-stats.p.rapidapi.com",
		    "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
        }
    })
    const responses = [
        fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10`, {
            'method': 'GET',
            'headers': {
                "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
                "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
            }
        }),
        fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=10`, {
            'method': 'GET',
            'headers': {
                "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
                "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
            }
        }),
        fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=2&size=10`, {
            'method': 'GET',
            'headers': {
                "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
                "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
            }
        }),
    ]
    const requests = responses.map(response => response.then(getData => getData.json()))
    const getChampionImages = Promise.all(requests);
    
    document.querySelector('.skin-contain').style.height = document.querySelector('.champion-splash').offsetHeight + 'px'
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.champion-header').style.display = 'none'
    document.querySelector('.champion-abilities').style.display = 'none'
    document.querySelector('.champion-skins').style.display = 'none'

    getChampionNames.then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.champ_names.length; i++) {
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

            a.id = ''
            p.classList.add('p')
            cardDiv.classList.add('card');
            cardImg.classList.add('card-img');
            divOverlay.classList.add('img-overlay');
            img.classList.add('imgs');

            a.addEventListener('click', sendToChampionPage)
        }

        const getPTags = document.querySelectorAll('.p');
        const aTags = document.querySelectorAll('a')

        for (let i = 0; i < data.champ_names.length; i++) {
             if (data.champ_names[i] != 'Kled & Skaarl' && data.champ_names[i] != 'Mega Gnar') {
                getPTags[i].innerText = data.champ_names[i] 
                aTags[i].id = getPTags[i].innerText
            }
            else getPTags[i].parentElement.parentElement.parentElement.parentElement.remove()
        }

        getChampionImages
        .then(data => {
            const getPTags = document.querySelectorAll('.p');
            let index = 0;

            const runFirstPromise = (getIndex) => {
                for (let j = 0; j < getPTags.length; j++) {
                    for (let i = 0; i < data[getIndex].champions.length; i++) {
                        if (data[getIndex].champions[i].node.champion.profile_image === null && getPTags[j].innerText == data[getIndex].champions[i].node.champion_name.toUpperCase()) {
                            getPTags[j].parentElement.parentElement.querySelector('.imgs').src = data[getIndex].champions[i].node.champion_splash
                        } else if (getPTags[j].innerText == data[getIndex].champions[i].node.champion_name.toUpperCase()) {
                            getPTags[j].parentElement.parentElement.querySelector('.imgs').src = data[getIndex].champions[i].node.champion.profile_image.url
                        }
                    }
                }
            }
            while (index <= 2) {
                runFirstPromise(index)
                index++
            }
        }).catch(error => console.log(error))
    }).catch(error => console.log(error))
}

const gatherData = index => {
    fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${index.path[0].id.replace(/[ .']/g, '-').replace(/-{2,}/, '-')}/`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "league-of-legends-champions.p.rapidapi.com",
            "x-rapidapi-key": "d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d"
        }
    }).then(response => response.json())
    .then(data => {
        const champData = data.champion[0]
        const links = document.querySelectorAll('.link');
        const linkArray = []
        const skinIcons = document.querySelectorAll('.splash-icon');
        const backgrounds = document.querySelector('.champion-abilities');
        
        champData['links'].sort((a, b) => a.title.length - b.title.length)
        linkArray.push(champData['links'])
        
        for (let i = 0; i < links.length; i++) {
            links[i].href = linkArray[0][i].href
        }
        for (let i = 0; i <= champData['skins'].length; i++) {
            if (document.querySelector('.skin-btns').children.length < champData['skins'].length) {
                const div = document.createElement('div');
                const img = document.createElement('img');
                const h5 = document.createElement('h5');
                
                div.classList.add('skin-btn');
                img.classList.add('splash-icon');
                
                document.querySelector('.skin-btns').append(div);
                div.append(img);
                div.append(h5);
                div.addEventListener('click', skinBtnScroll)
            }
        }

        document.querySelector('.blur-splash').src = champData['champion_splash']
        document.querySelector('.champ-splash').src = champData['champion_splash']
        document.querySelector('.champion-container').firstElementChild.innerText = champData['champion_title'].toUpperCase()
        document.querySelector('.champion-container').lastElementChild.innerText = champData['champion_name'].toUpperCase()
        document.querySelector('.champion-role').lastElementChild.innerText = champData['recommended_roles'][0]
        document.querySelector('.champion-lore').firstElementChild.innerText = champData['lore']
        
        document.getElementById('champion_passive').src = champData['champion_passive'].champion_passive_icon
        document.querySelector('.ability-info').querySelector('h4').innerText = champData['champion_passive'].champion_passive_name
        document.querySelector('.description').innerText = champData['champion_passive'].champion_passive_description
        document.querySelector('video').firstElementChild.src = champData['champion_passive'].champion_passive_video_mp4
        document.querySelector('video').lastElementChild.src = champData['champion_passive'].champion_passive_video_webm
        document.getElementById('champion_q').src = champData['champion_q'].champion_q_icon
        document.getElementById('champion_w').src = champData['champion_w'].champion_w_icon
        document.getElementById('champion_e').src = champData['champion_e'].champion_e_icon
        document.getElementById('champion_r').src = champData['champion_r'].champion_r_icon
        document.querySelector('video').load()
        document.querySelector('video').play()
        
        switch (champData['recommended_roles'][0]) {
            case 'Mage':
                document.querySelector('.role-icon').src = `FontIcons/mage.svg`
                backgrounds.style.backgroundImage = `url('../dist/FontIcons/magebackground.svg')`
            break;
            case 'Assassin':
                document.querySelector('.role-icon').src = `FontIcons/assassin.svg`
                backgrounds.style.backgroundImage = `url('../dist/FontIcons/assassinbackground.svg')`
            break;
            case 'Fighter':
                document.querySelector('.role-icon').src = `FontIcons/fighter.svg`
                backgrounds.style.backgroundImage = `url('../dist/FontIcons/fighterbackground.svg')`
            break;
            case 'Tank':
                document.querySelector('.role-icon').src = `FontIcons/tank.svg`
                backgrounds.style.backgroundImage = `url('../dist/FontIcons/tankbackground.svg')`
            break;
            case 'Marksman':
                document.querySelector('.role-icon').src = `FontIcons/marksman.svg`
                backgrounds.style.backgroundImage = `url('../dist/FontIcons/marksmanbackground.svg')`
            break;
            case 'Support':
                document.querySelector('.role-icon').src = `FontIcons/support.svg`
                backgrounds.style.backgroundImage = `url('../dist/FontIcons/supportbackground.svg')`
            break;
        }

        document.querySelector('.champion-splash').src = champData['champion_splash']
        
        const btns = document.querySelector('.skin-btns')

        for (let i = 0; i < skinIcons.length; i++) {
            if (i < champData['skins'].length) {
                if (champData['skins'][i]) skinIcons[i].src = champData['skins'][i].imageUrl
                if (champData['skins'][i].name && champData['skins'][i].name == 'default') skinIcons[0].parentElement.lastElementChild.innerText = champData['champion_name'].toUpperCase()
                else if (champData['skins'][i].name) skinIcons[i].parentElement.lastElementChild.innerText = champData['skins'][i].name
            } else if (!skinIcons[i].parentElement.querySelector('h5').innerText.includes(`${champData['champion_name'].toUpperCase()}`)) {
                skinIcons[i].parentElement.style.display = 'none'
            }

            if (champData['skins'].length > skinIcons.length && btns.lastElementChild.style.display == 'none' && btns.lastElementChild.previousElementSibling.style.display == 'none') {
                btns.lastElementChild.style.display = ''
                btns.lastElementChild.previousElementSibling.style.display = ''
            }
            if (champData['skins'].length > skinIcons.length && skinIcons[i].parentElement.style.display == 'none') {
                skinIcons[i].parentElement.style.display = ''
            }
        }
    }).catch(error => console.log(error))
    return index.path[0].id
}

window.addEventListener('load', loadGridDivs)

export { gatherData }