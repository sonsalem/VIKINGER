// Start Drak Theme
document.write(`  <div class="position-fixed rounded-circle bg-white box-shadow pointer t-duratio d-flex align-items-center justify-content-center" id="drak-theme">
<i class="fa-solid fa-moon" id="dark-ico"></i>
</div>`)

let dark = document.getElementById('drak-theme');
let all = document.querySelectorAll('*');
let darkIco = document.getElementById('dark-ico')

dark.onclick = function () {
    if(darkIco.classList.contains('fa-moon')) {
        darkIco.classList.replace('fa-moon' , 'fa-sun')
    } else {
        darkIco.classList.replace('fa-sun' , 'fa-moon')
    }
    all.forEach(function (el) {
        if (el.classList.contains('bg-white') === true) {
            el.classList.toggle('bg-white-dark')
        }
        if (el.classList.contains('c-gray') === false) {
            el.classList.toggle('c-fff')
        }
    })
}
$(dark).click(function(){
    $(document.body).toggleClass('body-dark')
    $(`.sidebar-message .chat-write`).toggleClass('body-dark')
    $(`.chat-write .me .message`).toggleClass('bg-white-dark')
    $(`.comments-post .box:nth-child(even)`).toggleClass('body-dark')
    $(`.setting .set > .box .links`).toggleClass('body-dark')
    $(document.querySelectorAll('.form-input label')).toggleClass('body-dark')
    $(document.querySelectorAll('textarea')).toggleClass('bg-white-dark')
    $('div[role="progressbar"]').toggleClass('dark')
});
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
$('.mega-open').click(function(){
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