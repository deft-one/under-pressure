// VALIDATES INPUTS ON BUTTON CLICK
function validateClick(e) {
    if (document.getElementById('checkBox').checked !== true) {
        document.getElementById('formClause').style.color = 'rgba(255, 0, 0, 0.8)';
    }
    if (document.getElementById('fullName').value === '') {
        document.getElementById('fullName').style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
        document.getElementById('fullName').placeholder = 'Full Name Required';
    }
    if (document.getElementById('phoneNumber').value === '') {
        document.getElementById('phoneNumber').style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
        document.getElementById('phoneNumber').placeholder = 'Phone Number Required';
    }
    if (document.getElementById('eMail').value === '') {
        document.getElementById('eMail').style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
        document.getElementById('eMail').placeholder = 'eMail Required';
    }
}

// VALIDATES FORM INPUTS ON KEYUP
function validateKeyup() {
    let regexAZ = RegExp('^[a-zA-Z -]*$');
    let regexPhn = RegExp('^[0-9\(\)-.]*$');
    if (!regexAZ.test(document.getElementById('fullName').value)) {
        document.getElementById('fullName').value = document.getElementById('fullName').value.slice(0, -1);
    } else {
        document.getElementById('fullName').style.backgroundColor = 'background-color: rgba(255, 255, 255, 0.15)';
    }
    if (!regexPhn.test(document.getElementById('phoneNumber').value)) {
        document.getElementById('phoneNumber').value = document.getElementById('phoneNumber').value.slice(0, -1);
    } else {
        document.getElementById('phoneNumber').style.backgroundColor = 'background-color: rgba(255, 255, 255, 0.15)';
    }
}

// OPENS THE MOBILE MENU
function menuOut() {
    document.getElementById('burger').classList.add('open');
    document.getElementById('subMenuItem1').classList.remove('sub-menu-in-1');
    document.getElementById('subMenuItem2').classList.remove('sub-menu-in-2');
    document.getElementById('subMenuItem3').classList.remove('sub-menu-in-3');
    document.getElementById('subMenuItem1').classList.add('sub-menu-out-1');
    document.getElementById('subMenuItem2').classList.add('sub-menu-out-2');
    document.getElementById('subMenuItem3').classList.add('sub-menu-out-3');
}

// CLOSES THE MOBILE MENU
function menuIn() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('subMenuItem1').classList.remove('sub-menu-out-1');
    document.getElementById('subMenuItem2').classList.remove('sub-menu-out-2');
    document.getElementById('subMenuItem3').classList.remove('sub-menu-out-3');
    document.getElementById('subMenuItem1').classList.add('sub-menu-in-1');
    document.getElementById('subMenuItem2').classList.add('sub-menu-in-2');
    document.getElementById('subMenuItem3').classList.add('sub-menu-in-3');
}

// LISTENS FOR CLICKS ON THUMBNAILS, THEN OPENS / CLOSES THE MODAL AND ASSIGNS / CLEARS THE IMAGE SRC
// document.addEventListener('click', function(e) {
//     if (e.target.classList.contains('thumbnail')) {
//         if (!document.getElementById('galleryModal').classList.contains('modalOpen')) {
//             document.getElementById('modalImg').src = e.target.src;
//             document.getElementById('galleryModal').classList.add('modalOpen');
//             document.getElementById('galleryModal').classList.remove('modalClose');
//             document.getElementById('close').style.display = 'block';
//         } 
//     }
//     if (e.target === document.getElementById('galleryModal') || e.target === document.getElementById('close')) {
//         document.getElementById('galleryModal').classList.remove('modalOpen');
//         document.getElementById('galleryModal').classList.add('modalClose');
//         document.getElementById('close').style.display = 'none';
//         setTimeout(function() {
//             document.getElementById('modalImg').src = '';
//         },500);
//     }
// });

// LISTENS FOR CLICKS ON THE SUBMIT BUTTON AND RUNS THE FORM VALIDATION FUNCTION
document.addEventListener('click', function(e) {
    if (e.target === document.getElementById('submitBtn')) {
        validateClick(e);
    }
});

// LISTENS FOR KEYUP ON INPUTS, RUNS VALIDATION
document.addEventListener('keyup', function() {
    validateKeyup();
});

// LISTENS FOR CLICKS ON QUOTE BUTTONS, THEN OPENS / CLOSES THE MODAL
document.addEventListener('click', function(e) {
    if (e.target === document.getElementById('quoteBtn1') || e.target === document.getElementById('quoteBtn2')) {
        document.getElementById('fullName').focus();
        document.getElementById('contactModal').classList.remove('modalClose');
        document.getElementById('contactModal').classList.add('modalOpen');
        document.getElementById('closeForm').style.display = 'block';
    } else if (e.target === document.getElementById('contactModal') || e.target === document.getElementById('closeForm')) {
        document.getElementById('contactModal').classList.remove('modalOpen');
        document.getElementById('contactModal').classList.add('modalClose');
        document.getElementById('closeForm').style.display = 'none';
    }
});

// LISTENS FOR CLICKS ON THE MOBILE MENU, THEN RUNS THE MENU IN / OUT FUNCTIONS
document.addEventListener('click', function(e) {
    if (e.target === document.getElementById('burger') || e.target.classList.contains('sub-menu')) {
        e.preventDefault();
        if (document.getElementById('burger').classList.contains('open')) {
            menuIn();
        } else {
            menuOut();
        }
    } else {
        if (document.getElementById('burger').classList.contains('open')) {
            menuIn();
        }
    }
});

// LISTENS FOR MOUSEOVER / MOUSEOUT ON HERO IMAGE, THEN ADDS A CLASS TO ANIMATE TRANSPARENCY
document.getElementById('hero').addEventListener('mouseover', function(e) {
    if (document.getElementById('hero').classList.contains('hero-out')) {
        document.getElementById('hero').classList.remove('hero-out');
        document.getElementById('hero').classList.add('hero-in');
    } else {
        document.getElementById('hero').classList.add('hero-in');
    }
});

document.getElementById('hero').addEventListener('mouseleave', function(e) {
    if (document.getElementById('hero').classList.contains('hero-in')) {
        document.getElementById('hero').classList.remove('hero-in');
        document.getElementById('hero').classList.add('hero-out');
    } else {
        document.getElementById('hero').classList.add('hero-out');
    }
});

// LISTENS FOR CLICKS ON THE TOTOP BUTTON, THEN SCROLLS TO TOP OF SCREEN
document.getElementById('toTop').addEventListener('click', function(e) {
    window.scrollTo(0, 0);
});

// CHECKS THE WINDOW SCROLL POSITION, THEN ADDS / REMOVES THE TOTOP BUTTON > OR < 600PX
window.onscroll = function() {
    if (window.scrollY >= 600) {
        document.getElementById('toTop').classList.remove('toTop-out');
        document.getElementById('toTop').classList.add('toTop-in');
    } else if (window.scrollY < 600) {
        if (document.getElementById('toTop').classList.contains('toTop-in')) {
            document.getElementById('toTop').classList.remove('toTop-in');
            document.getElementById('toTop').classList.add('toTop-out');
        }
    }
};

window.onload = function() {
    var date = new Date();
    var thisYear = date.getFullYear();
    document.getElementById('copyright').innerText = 'Copyright ' + thisYear + ' Under Pressure Exterior Cleaning.';
}