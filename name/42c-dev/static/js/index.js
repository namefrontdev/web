// !! Scroll window / navbar animation !!
var documentElm = $(document);
var navbar = $('#header_main nav');
var lastScrollTop = 0;

documentElm.on('scroll', function() {

    var currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > lastScrollTop) {

            navbar.removeClass('bg-out');
            navbar.addClass('bg-light-show');

        } else {
            
            navbar.addClass('bg-out');
            lastScrollTop = currentScrollTop;

        }
})


// $('img').each(function () {
//     if (this.src.length > 0) {
//         $(this).after('<div class="img-overlay"/>');
//     }
// });

var allImg = documentElm.find('#room img,#conference img,#restaurant img');
console.log(allImg)
allImg.after(
    '<div class="img-overlay">'+
        '<div class="can-zoom"><i class="fa fa-search-plus fa-2x" style="color:#f8f9fa"></i></div>'+
    '</div>');



