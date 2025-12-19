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
const text = "Design que se impõe!"
const interval = 200;

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
window.revelar = ScrollReveal({reset:false})
revelar.reveal('.txt1', {
    duration: 1500,
    distance: '40px',
    delay: 500,
    origin: 'left'
})
const revelarHero = ScrollReveal({
    reset: false
});

revelarHero.reveal('.hero-anim', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
});

revelar.reveal('.img1', {
    duration: 1500,
    distance: '40px',
    delay: 700,
    origin: 'right'
})

revelar.reveal('.img2', {
    duration: 1500,
    distance: '40px',
    delay: 800,
    origin: 'left'
})

revelar.reveal('.txt2', {
    duration: 1500,
    distance: '40px',
    delay: 900,
    origin: 'right'
})

revelar.reveal('.txt3', {
    duration: 1500,
    distance: '40px',
    delay: 1000,
    origin: 'left'
})

revelar.reveal('.img3', {
    duration: 1500,
    distance: '40px',
    delay: 1100,
    origin: 'right'
})
const lightbox = GLightbox({
        selector: '.glightbox'
    });