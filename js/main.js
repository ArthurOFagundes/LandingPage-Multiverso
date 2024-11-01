//--------Show Slide---------//
let indexSlide = 1;
ShowSlide(indexSlide);

function addSlides(n) {
    ShowSlide(indexSlide += n);
}

function currentSlide(n) {
    ShowSlide(indexSlide = n);
}

function ShowSlide(n) {
    let slides = document.getElementsByClassName("costumer-content");
    let dots = document.getElementsByClassName("dot-slide");

    if (n > slides.length) {
        indexSlide = 1;
    }

    if (n < 1) {
        indexSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slides[indexSlide - 1].style.display = "flex";
    dots[indexSlide - 1].className += " active-dot";
}
//-----------------//

//--------Scroll Reveal---------//
let myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
        } else {
            entry.target.classList.remove("show-element");
        }
    })
})

let elements = document.querySelectorAll(".hidden-element");

elements.forEach((element) => {
    myObserver.observe(element);
})
//-----------------//


//--------Dark Mode---------//
let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = 'active';
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    darkmode = null;
}

if (darkmode === 'active') enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
})
//-----------------//