// Movimento do slide e para passar
const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-btn')
const btnNext = document.getElementById('next-btn')

let currentslide = 0;

function hiderSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentslide].classList.add('on')
}

function nextSlider() {
    hiderSlider()
    if(currentslide == slider.length -1) {
        currentslide = 0
    }
    else {
        currentslide++
    }
    showSlider()
}

function prevSlider() {
    hiderSlider()
    if(currentslide == 0) {
        currentslide = slider.length -1
    }
    else {
        currentslide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 3000)

//Menu mobile
function aparecermenu() {
    let menumobile = document.querySelector('.menumobile')
    if (menumobile.classList.contains('open')) {
        menumobile.classList.remove('open')
    }
    else {
        menumobile.classList.add('open')
    }
}

//Botão subir

window.onscroll = function() {mostrarBotao()};
function mostrarBotao() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

function subirTela() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(subirTela);
        window.scrollTo(0, currentScroll - (currentScroll / 8)); 
    }
}
