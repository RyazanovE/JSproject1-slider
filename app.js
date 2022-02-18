const slides = document.querySelectorAll('.slider')
const dots = document.querySelectorAll('.dot')


for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
        dotON()
    })
}

for (const dot of dots) {
    dot.addEventListener('click', () => {
        clearActiveClasses()
        dot.classList.add('active')
        imgON()
    })
}


//functions
function leftArrowPress() {
    let a = getIndexofImg()
    clearActiveClasses()
    imgON(a-1, 1)
    dotON(a-1, 1)
}

function rightArrowPress() {
    let a = getIndexofImg()
    clearActiveClasses()
    imgON(a+1, 1)
    dotON(a+1, 1)
}


function clearActiveClasses () {
    slides.forEach(slide => slide.classList.remove('active'))
    dots.forEach((dot) => dot.classList.remove('active'))
}

function dotON(a=0, b=0) {
    if (a < 0) {
        a = 5
    }
    if (a > 5) {
        a = 0
    }
    if (!b) {
    dots[getIndexofImg()].classList.add("active")
    } else {
        dots[a].classList.add("active")
    }
}

function imgON(a=0, b=0) {
    if (a < 0) {
        a = 5
    }
    if (a > 5) {
        a = 0
    }
    if (!b) {
        slides[getIndexofDot()+a].classList.add("active")
    } else {
        slides[a].classList.add("active")
    }
}

function getIndexofDot() {
    for (let i=0; i<dots.length; i++) {
        if (dots[i].className == "dot active") {
            break;
        }
    }
}


function getIndexofImg() {
    for (let i=0; i<slides.length; i++) {
        if (slides[i].className == "slider active") {
            return i;
        }
    }
}

console.log(slides.length)