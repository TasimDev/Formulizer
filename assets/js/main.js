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


