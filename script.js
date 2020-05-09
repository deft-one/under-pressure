let navUl = document.getElementById('navUl');
let burger = document.getElementById('burger');
let subMenuItem1 = document.getElementById('subMenuItem1');
let subMenuItem2 = document.getElementById('subMenuItem2');
let subMenuItem3 = document.getElementById('subMenuItem3');
let hero = document.getElementById('hero');
let toTop = document.getElementById('toTop');
let contactForm = document.getElementById('contactForm');
let checkBox = document.getElementById('checkBox');
let formClause = document.getElementById('formClause');
let fullName = document.getElementById('fullName');
let phoneNumber = document.getElementById('phoneNumber');
let eMail = document.getElementById('eMail');
let textArea = document.getElementById('textArea');
let submitBtn = document.getElementById('submitBtn');
let quoteBtn1 = document.getElementById('quoteBtn1');
let quoteBtn2 = document.getElementById('quoteBtn2');
let galleryModal = document.getElementById('galleryModal');
let modalImg = document.getElementById('modalImg');
/* let images = document.getElementsByClassName('gallery-thumb');
let gallery = Array.from(images); */

function validateForm(e) {
    if (checkBox.checked !== true) {
        formClause.style.color = 'rgb(255, 147, 147)';
    } else {
        formClause.style.color = 'white';
    }
    if (fullName.value === '') {
        fullName.style.backgroundColor = 'rgb(255, 147, 147';
        fullName.placeholder = 'Full Name Required';
    } else {
        fullName.style.backgroundColor = 'white';
        fullName.placeholder = '*Full Name';
    }
    if (phoneNumber.value === '') {
        phoneNumber.style.backgroundColor = 'rgb(255, 147, 147';
        phoneNumber.placeholder = 'Phone Number Required';
    } else {
        phoneNumber.style.backgroundColor = 'white';
        phoneNumber.placeholder = '*Phone Number';
    }
    if (eMail.value === '') {
        eMail.style.backgroundColor = 'rgb(255, 147, 147';
        eMail.placeholder = 'eMail Required';
    } else {
        eMail.style.backgroundColor = 'white';
        eMail.placeholder = '*eMail';
    }
}

function menuOut() {
    burger.classList.add('open');
    subMenuItem1.classList.remove('sub-menu-in-1');
    subMenuItem2.classList.remove('sub-menu-in-2');
    subMenuItem3.classList.remove('sub-menu-in-3');
    subMenuItem1.classList.add('sub-menu-out-1');
    subMenuItem2.classList.add('sub-menu-out-2');
    subMenuItem3.classList.add('sub-menu-out-3');
}

function menuIn() {
    burger.classList.remove('open');
    subMenuItem1.classList.remove('sub-menu-out-1');
    subMenuItem2.classList.remove('sub-menu-out-2');
    subMenuItem3.classList.remove('sub-menu-out-3');
    subMenuItem1.classList.add('sub-menu-in-1');
    subMenuItem2.classList.add('sub-menu-in-2');
    subMenuItem3.classList.add('sub-menu-in-3');
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery-thumb')) {
        if (!galleryModal.classList.contains('modalOpen')) {
            modalImg.src = e.target.src;
            galleryModal.classList.add('modalOpen');
            galleryModal.classList.remove('modalClose');
        } 
    }
    if (e.target === galleryModal) {
        modalImg.src = '';
        galleryModal.classList.remove('modalOpen');
        galleryModal.classList.add('modalClose');
    }
});

submitBtn.addEventListener('click', function(e) {
    validateForm(e);
});

document.addEventListener('click', function(e) {
    if (e.target === quoteBtn1 || e.target === quoteBtn2) {
        e.preventDefault();
        document.getElementById('contactModal').classList.add('modalOpen');
    }
});

document.addEventListener('click', function(e) {
    if (e.target === burger || e.target.classList.contains('sub-menu')) {
        e.preventDefault();
        if (burger.classList.contains('open')) {
            menuIn();
        } else {
            menuOut();
        }
    } else {
        if (burger.classList.contains('open')) {
            menuIn();
        }
    }
});

hero.addEventListener('mouseover', function() {
    if (hero.classList.contains('hero-out')) {
        hero.classList.remove('hero-out');
        hero.classList.add('hero-in');
    } else {
        hero.classList.add('hero-in');
    }
});

hero.addEventListener('mouseleave', function() {
    if (hero.classList.contains('hero-in')) {
        hero.classList.remove('hero-in');
        hero.classList.add('hero-out');
    } else {
        hero.classList.add('hero-out');
    }
});

toTop.addEventListener('click', function(e) {
    window.scrollTo(0, 0);
});

window.onscroll = function() {
    if (window.scrollY >= 600) {
        toTop.classList.remove('toTop-out');
        toTop.classList.add('toTop-in');
    } else if (window.scrollY < 600) {
        if (toTop.classList.contains('toTop-in')) {
            toTop.classList.remove('toTop-in');
            toTop.classList.add('toTop-out');
        }
    }
};