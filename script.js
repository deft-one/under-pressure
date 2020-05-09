let navUl = document.getElementById('navUl');
let burger = document.getElementById('burger');
let subMenuItem1 = document.getElementById('subMenuItem1');
let subMenuItem2 = document.getElementById('subMenuItem2');
let subMenuItem3 = document.getElementById('subMenuItem3');
let hero = document.getElementById('hero');
let toTop = document.getElementById('toTop');


document.addEventListener('click', function(e) {
    if (e.target === burger || e.target.classList.contains('sub-menu')) {
        e.preventDefault();
        if (burger.classList.contains('open')) {
            burger.classList.remove('open');
            subMenuItem1.classList.remove('sub-menu-out-1');
            subMenuItem2.classList.remove('sub-menu-out-2');
            subMenuItem3.classList.remove('sub-menu-out-3');
            subMenuItem1.classList.add('sub-menu-in-1');
            subMenuItem2.classList.add('sub-menu-in-2');
            subMenuItem3.classList.add('sub-menu-in-3');
        } else {
            burger.classList.add('open');
            subMenuItem1.classList.remove('sub-menu-in-1');
            subMenuItem2.classList.remove('sub-menu-in-2');
            subMenuItem3.classList.remove('sub-menu-in-3');
            subMenuItem1.classList.add('sub-menu-out-1');
            subMenuItem2.classList.add('sub-menu-out-2');
            subMenuItem3.classList.add('sub-menu-out-3');
        }
    } else {
        if (burger.classList.contains('open')) {
            burger.classList.remove('open');
            subMenuItem1.classList.remove('sub-menu-out-1');
            subMenuItem2.classList.remove('sub-menu-out-2');
            subMenuItem3.classList.remove('sub-menu-out-3');
            subMenuItem1.classList.add('sub-menu-in-1');
            subMenuItem2.classList.add('sub-menu-in-2');
            subMenuItem3.classList.add('sub-menu-in-3');
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