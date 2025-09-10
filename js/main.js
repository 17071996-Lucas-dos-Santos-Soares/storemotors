let navBar = document.querySelector('#header')
document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY
    if(scrollTop > 0) {
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }
})

const element = document.querySelector("#text")
const text = "Viva a liberdade"
const interval = 300

function showTxt(element, text, interval) {
    const char = text.split("").reverse()
    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer)
        }

    const netxtL = char.pop()
    element.innerHTML += netxtL      
    }, interval)
    console.table(char)
}
showTxt(element, text, interval)
// animações
window.revelar = ScrollReveal({reset:true})
revelar.reveal('.txt1', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.img1', {
    duration: 2000,
    distance: '90px',
    delay: 700,
    origin: 'right'
})

revelar.reveal('.img2', {
    duration: 2000,
    distance: '90px',
    delay: 800,
    origin: 'left'
})

revelar.reveal('.txt2', {
    duration: 2000,
    distance: '90px',
    delay: 900,
    origin: 'right'
})

revelar.reveal('.txt3', {
    duration: 2000,
    distance: '90px',
    delay: 1000,
    origin: 'left'
})

revelar.reveal('.img3', {
    duration: 2000,
    distance: '90px',
    delay: 1100,
    origin: 'right'
})