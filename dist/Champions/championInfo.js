


// setTimeout(() => {
//     document.body.style.background = 'red'
//     console.log('CHECKER')
// }, 1000)

console.log('THIS PAGE WORKS')

document.querySelectorAll('.skin-btn').forEach(image => image.addEventListener('click', event => {
    console.log('CLICKED', event.target)   
    event.target.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
    
    document.querySelector('.champion-splash').src = event.target.parentElement.querySelector('img').src 

}))

document.querySelector('.skin-contain').style.height = document.querySelector('.champion-splash').offsetHeight + 'px'