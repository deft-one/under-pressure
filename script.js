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
let closeModal = document.getElementById('close');
let closeForm = document.getElementById('closeForm');
let contactModal = document.getElementById('contactModal');

function validateClick(e) {
    if (checkBox.checked !== true) {
        formClause.style.color = 'rgba(255, 0, 0, 0.8)';
    } else {
        formClause.style.color = 'white';
    }
    if (fullName.value === '') {
        fullName.style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
        fullName.placeholder = 'Full Name Required';
    } else {
        fullName.style.backgroundColor = 'initial';
        fullName.placeholder = '*Full Name';
    }
    if (phoneNumber.value === '') {
        phoneNumber.style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
        phoneNumber.placeholder = 'Phone Number Required';
    } else {
        phoneNumber.style.backgroundColor = 'initial';
        phoneNumber.placeholder = '*Phone Number';
    }
    if (eMail.value === '') {
        eMail.style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
        eMail.placeholder = 'eMail Required';
    } else {
        eMail.style.backgroundColor = 'initial';
        eMail.placeholder = '*eMail';
    }
}

function validateKeyup() {
    let regexAZ = RegExp('^[a-zA-Z -]*$');
    let regexPhn = RegExp('^[0-9\(\)-.]*$');
    if (!regexAZ.test(fullName.value)) {
        fullName.value = fullName.value.slice(0, -1);
    }
    if (!regexPhn.test(phoneNumber.value)) {
        phoneNumber.value = phoneNumber.value.slice(0, -1);
    }
    if (!regexPhn.test(phoneNumber.value)) {
        phoneNumber.value = phoneNumber.value.slice(0, -1);
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

document.addEventListener('keyup', function() {
    validateKeyup();
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('thumbnail')) {
        if (!galleryModal.classList.contains('modalOpen')) {
            modalImg.src = e.target.src;
            galleryModal.classList.add('modalOpen');
            galleryModal.classList.remove('modalClose');
            closeModal.style.display = 'block';
        } 
    }
    if (e.target === galleryModal || e.target === closeModal) {
        galleryModal.classList.remove('modalOpen');
        galleryModal.classList.add('modalClose');
        closeModal.style.display = 'none';
        setTimeout(function() {
            modalImg.src = '';
        },500);
    }
});

submitBtn.addEventListener('click', function(e) {
    validateClick(e);
});

document.addEventListener('click', function(e) {
    if (e.target === quoteBtn1 || e.target === quoteBtn2) {
        contactModal.classList.remove('modalClose');
        contactModal.classList.add('modalOpen');
        closeForm.style.display = 'block';
    } else if (e.target === contactModal || e.target === closeForm) {
        contactModal.classList.remove('modalOpen');
        contactModal.classList.add('modalClose');
        closeForm.style.display = 'none';
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



















// MOVE VARIABLES OUT OF GLOBAL SCOPE
// DISABLE SEND BUTTON UNTIL FIELDS ARE VALIDATED