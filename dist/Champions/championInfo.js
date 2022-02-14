


// setTimeout(() => {
//     document.body.style.background = 'red'
//     console.log('CHECKER')
// }, 1000)

console.log('THIS PAGE WORKS')

document.querySelectorAll('.splash-icon').forEach(image => image.addEventListener('click', event => {
    console.log('CLICKED', event.target)
    event.target.scrollIntoView({behavior: 'smooth', block: 'center'})
    
    const scrollToElement = document.querySelector('.side-bar');

    // scrollToElement.scrollBy(0, event.target.offsetTop)

    document.querySelector('.champion-splash').src = event.target.src 
}))

