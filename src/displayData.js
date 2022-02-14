

let championId = 'KICK IT BACK'

const sendToChampionPage = event => {

    
    console.log('RICE', event)
    championId = event.path[3].id
    console.log(championId)
    
}

// setTimeout(() => {
//     document.body.style.background = 'red'
//     console.log(championId)
// }, 1000)

// setInterval(() => console.log(championId), 1000)


module.exports = championId
