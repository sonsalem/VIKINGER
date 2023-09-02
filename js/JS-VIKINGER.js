// Meta Description
let metaDec = document.createElement('meta');
metaDec.setAttribute('name', 'description');
metaDec.setAttribute('content', 'Viginger For Steamers');

let head = document.querySelector('head');

head.prepend(metaDec)

// Start Drak Theme
let darkElement = document.createElement('div');
darkElement.className = 'position-fixed rounded-circle bg-white box-shadow pointer t-duratio d-flex align-items-center justify-content-center';
darkElement.id = 'drak-theme';

let darkI = document.createElement('i');
darkI.className = 'fa-solid fa-moon';
darkI.id = 'dark-ico';

darkElement.appendChild(darkI);

document.body.appendChild(darkElement);

let dark = document.getElementById('drak-theme');
let all = document.querySelectorAll('*');
let darkIco = document.getElementById('dark-ico');

let darkFun = function () {
    all.forEach(function (el) {
        if (el.classList.contains('bg-white') === true) {
            el.classList.toggle('bg-white-dark')
        }
        if (el.classList.contains('c-gray') === false) {
            el.classList.toggle('c-fff')
        }
    })
    document.body.classList.toggle('body-dark')
    document.querySelector('.sidebar-message .chat-write').classList.toggle('body-dark')
    document.querySelectorAll('.chat-write .me .message').forEach(el => el.classList.toggle('bg-white-dark'));
    document.querySelectorAll('.comments-post .box:nth-child(even)').forEach(el => el.classList.toggle('body-dark'));
    document.querySelectorAll('.setting .set > .box .links').forEach(el => el.classList.toggle('body-dark'));
    document.querySelectorAll('.form-input label').forEach(el => el.classList.toggle('body-dark'));
    document.querySelectorAll('textarea').forEach(el => el.classList.toggle('bg-white-dark'));
    document.querySelectorAll('div[role="progressbar"]').forEach(el => el.classList.toggle('dark'));
}


dark.onclick = function () {
    localStorage.getItem('theme') === 'dark'
    ? localStorage.setItem('theme', 'light')
    : localStorage.setItem('theme', 'dark');
    if(darkIco.classList.contains('fa-moon')) {
        darkIco.classList.replace('fa-moon' , 'fa-sun')
    } else {
        darkIco.classList.replace('fa-sun' , 'fa-moon')
    }
    darkFun();
}

if (localStorage.getItem('theme') === 'dark') {
    darkIco.classList.replace('fa-sun' , 'fa-moon');
    darkFun();
}

// End Drak Theme

$('.toggle-links.open').click(function(){
    $('.nav.bar').addClass('active')
    $('.body').addClass('active')
});
$('.toggle-links.close').click(function(){
    $('.nav.bar').removeClass('active')
    $('#aside').removeClass('active')
    $('.body').removeClass('active')
});
$('.mega-open:not(.active)').click(function(){
    $(this).toggleClass('active')
    $('.upper-nav').toggleClass('active')
})
$('.mega-open.one').click(function(){
    $(document.querySelectorAll(`.mega-menu:not(.mega-menu.one)`)).removeClass('active')
    $(document.querySelectorAll(`.mega-open:not(.mega-open.one)`)).removeClass('active')
    $(`.mega-menu.one`).toggleClass('active')
});
$('.mega-open.tow').click(function(){
    $(document.querySelectorAll(`.mega-menu:not(.mega-menu.tow)`)).removeClass('active')
    $(document.querySelectorAll(`.mega-open:not(.mega-open.tow)`)).removeClass('active')
    $(`.mega-menu.tow`).toggleClass('active')
});
$('.mega-open.three').click(function(){
    $(document.querySelectorAll(`.mega-menu:not(.mega-menu.three)`)).removeClass('active')
    $(document.querySelectorAll(`.mega-open:not(.mega-open.three)`)).removeClass('active')
    $(`.mega-menu.three`).toggleClass('active')
});
$('.mega-open.four').click(function(){
    $(document.querySelectorAll(`.mega-menu:not(.mega-menu.four)`)).removeClass('active')
    $(`.mega-menu.four`).toggleClass('active')
});

$('.side-info').click(function(){
    $(`.sidebar-information`).toggleClass('active')
    $(`.content`).toggleClass('active')
});
$('.close-sidebar-info').click(function(){
    $(`.sidebar-information`).removeClass('active')
    $(`.content`).toggleClass('active')
});

$('.close-chat').click(function(){
    $(`.chat-current`).removeClass('active')
});
$('.chat').click(function(){
    $(`.sidebar-message`).addClass('active')
    $(`.chat-current`).addClass('active')
    $(`.content`).addClass('active-right')
});
$('.toggle-side-message').click(function(){
    $(`.sidebar-message`).toggleClass('active')
    $(`.content`).toggleClass('active-right')
    $(`.chat-current`).removeClass('active')
});

$('.form-input').click(function(){
    $(this).addClass('active')
});
$('.check').click(function(){
    $(document.querySelectorAll('.check')).removeClass('active')
    $(this).toggleClass('active')
});

$('.title').click(function(){
    $(this).toggleClass('collasp')
});

$('.toggle-check').click(function(){
    $(this).toggleClass('active')
});

document.querySelectorAll('.open-close').forEach(function (el) {
    el.onclick = function () {
        this.classList.toggle('collasp')
        this.nextElementSibling.classList.toggle('show')
    }
})
// ALt Images && href Links
let imgs = document.images;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('alt', `It's An Imae`)
}

let links = document.links;

document.querySelectorAll('.button').forEach(function (el) {
    el.href == "" && el.setAttribute('href', "google.com")
})

//carousel

$(document).ready(function(){
    $(".owl-shuffleBar").owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:2,
            },
            767:{
                items:3,
            },
            992:{
                items:6
            },
            1200:{
                items:9
            }
        }
    }
    );
});

let allButtons = document.querySelectorAll('.owl-carousel .item');
let allContents = document.querySelectorAll('.proflile-contents .contents');


allButtons.forEach(function(ele) {
    ele.onclick = function() {
        allButtons.forEach(function(ele) {
        ele.classList.remove('active')
        })
        this.classList.add('active')
        allContents.forEach(function(el) {
            if (el.id === ele.id) {
                el.classList.remove('d-none');
            } else {
                el.classList.add('d-none');
            }
        })
    }
})

let bageNum = document.getElementById('bage-num');
bageNum.innerText = document.querySelectorAll('.ico-number').length;

let openImg = document.querySelectorAll('.open-img');


openImg.forEach(function (el) {
    el.onclick = function () {
        this.classList.toggle('active')
        document.body.classList.toggle('cuurent-before')
    }
})

let allBoxes = document.querySelectorAll('.box-photo');
let allImages = document.querySelectorAll('.box-photo-mega');

allBoxes.forEach(function(ele) {
    ele.onclick = function() {
        document.body.classList.add('cuurent-before')
        allImages.forEach(function (el) {
            if (el.id === ele.id) {
                el.classList.add('show')
            } else {
                el.classList.remove('show')
            }
        })
    }
})

let openImgMega = document.querySelectorAll('.box-photo-mega .open-img');

openImgMega.forEach(function (el) {
    el.onclick = function () {
        this.classList.toggle('active')
        document.body.classList.add('cuurent-before')
        allImages.forEach(function (ele) {
            ele.classList.toggle('bg-black')
        })
    }
})

let closeMega = document.querySelectorAll('.box-photo-mega .close-mega');

closeMega.forEach(function (el) {
    el.onclick = function () {
        allImages.forEach(function (ele) {
            ele.classList.remove('show')
        })
        document.body.classList.remove('cuurent-before')
    }
})