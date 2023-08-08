/*=============== ACCORDION ===============*/

//Vairables - give the element with class name accordion container, that includes every accordion item
let $accordionContainer;
$accordionContainer = $('.accordion__container');
//Function that toggle the element
function toggleItem(item) {
    let selectedElementContent = item.children('.accordion__content');
    let scrollHeight = selectedElementContent.prop("scrollHeight");
    if (item.hasClass('accordion-open')) {
        selectedElementContent.removeAttr('style');
        item.removeClass('accordion-open')
    } else {
        selectedElementContent.css('height', scrollHeight)
        item.addClass('accordion-open');
    }

}


//Function on click on element
$accordionContainer.on('click', '.accordion__item', function () {
    let selectedElemet = $(this);
    let openItem = $('.accordion-open');
    if (openItem) {
        toggleItem(openItem);
    }
    toggleItem(selectedElemet);
})
//function that rremove style on clicking the element when accordion its open
$accordionContainer.on('click', '.accordion-open', function () {
    let selectedElementContent = $(this).children('.accordion__content');
    selectedElementContent.removeAttr('style');
    $(this).removeClass('accordion-open')
})

//Ripple Effent

$('.btn-submit-ripple').on('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let $ripples = $(`<span class='ripple'></span>`);
    $ripples.css('left', x);
    $ripples.css('top', y);

    $(this).append($ripples);
    setTimeout(() => {
        $ripples.remove();
    }, 300);
})

//Button

let $formRegistration, $formLogin;
$formRegistration = $('.registration')
$formLogin = $('.login')

$('.btn-register').on('click', function () {
    $formLogin.removeClass('active');
    if ($formRegistration.hasClass('active')) {
        $formRegistration.removeClass('active');
    } else {
        $formRegistration.addClass('active');
    }

})
$('.btn-login').on('click', function () {
    $formRegistration.removeClass('active');
    if ($formLogin.hasClass('active')) {
        $formLogin.removeClass('active');
    } else {
        $formLogin.addClass('active');
    }
})


//Message

$('#btn-register').on('click', function (e) {
    $('.message').addClass('active');
    setTimeout(() => {
        $('.message').removeClass('active');
    }, 5000);
    e.preventDefault();
})