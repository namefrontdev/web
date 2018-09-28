// =========================================
// Scroll window
// =========================================

let documentElm = $(document);
var lastScrollTop = 0;


var navbar = $('#header_main').find('nav'); /* navbar animation */
var goTopBtn = $("#goTop"); /* goTop button */

documentElm.on('scroll', function() {

    var currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > lastScrollTop) {

            navbar.removeClass('bg-out');
            navbar.addClass('bg-light-show');

        } else {
            
            navbar.addClass('bg-out');
            lastScrollTop = currentScrollTop;

        }

        if (currentScrollTop > 200 ) {
            goTopBtn.fadeIn();
        }
        else {
            goTopBtn.fadeOut();
            lastScrollTop = currentScrollTop;
        }
});


// AOS animate
var anim = 'data-aos',
    fadeUp = 'fade-up',
    fadeRight = 'fade-right',
    fadeDown = 'fade-down',
    fadeLeft = 'fade-left';

var highlightNormals = documentElm.find('.highlight').find('.hl-image'),
    highlightReverse = documentElm.find('.highlight').filter('.rev').find('.hl-image'),
    room = documentElm.find('.room');

highlightNormals.attr( anim, fadeLeft );
highlightReverse.attr( anim, fadeRight );
room.attr( anim, fadeUp);




// ========================================
// Add overlay to image.
// ========================================
var allImg = documentElm.find('#room img, #conference img, #restaurant img');
console.log(allImg)
allImg.after(
    '<div class="img-overlay">'+
        '<div class="can-zoom"><i class="fa fa-search-plus fa-2x" style="color:#f8f9fa"></i></div>'+
    '</div>');



