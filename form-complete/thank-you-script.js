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

window.onload = function() {
    var date = new Date();
    var thisYear = date.getFullYear();
    document.getElementById('copyright').innerText = 'Copyright ' + thisYear + ' Under Pressure Exterior Cleaning.';
}