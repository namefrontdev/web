$(function(){
    $.ajax({
        url: "../42c-dev/phpcall.php", 
        success: function (result) {
            var a = JSON.parse(result);

            var mainslideList = a.mainslide
            var intro = a.intro
            var overviewList = a.overview

            //#1
            mainslideList.forEach( img => {
                $('#slider-area').append("<div style='background-image:url("+ img +");' role='javscriptAppend'/>");
            });

            $('#intro').find('.text-center').append(intro);

            overviewList.forEach( e => {
                if (e.type == "room") {
                    let $img = $('#overview_room_img');
                    $img.css('background-image', 'url(' + e.url + ')');
                    $img.find('img').attr('src', e.url);
                    $('#overview_room_header').text(e.header);
                    $('#overview_room_content').text(e.content);
                }
                else if (e.type == "restaurant") {
                    let $img = $('#overview_res_img')
                    $img.css('background-image', 'url(' + e.url + ')');
                    $img.find('img').attr('src', e.url);
                    $('#overview_res_header').text(e.header);
                    $('#overview_res_content').text(e.content);
                }
                else if (e.type == "conference") {
                    let $img = $('#overview_con_img');
                    $img.css('background-image', 'url(' + e.url + ')');
                    $img.find('img').attr('src', e.url);
                    $('#overview_con_header').text(e.header);
                    $('#overview_con_content').text(e.content);
                }
            });
            

            // #2
            // =====================================
            // call owlCarousel
            $('#slider-area').owlCarousel({
                loop:true,
                autoplay: true,
                margin:10,
                nav:true,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                },
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
            });
            //
            $('#conference-container-img').owlCarousel({
                loop: false,
                autoplay: false,
                margin:10,
                nav: true,
                dots: false,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
            //
            $('#restaurant-container-img').owlCarousel({
                loop: false,
                autoplay: false,
                margin:10,
                nav: true,
                dots: false,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });


        }
    });

    //#3 light box
    $(".js-smartPhoto").SmartPhoto();

    //#4 scroll smooth
    $('a').smoothScroll({
        speed: 1000
    });

    //#5 Aos
    AOS.init({
        offset: 500, // offset (in px) from the original trigger point
        easing: 'ease-in-out',
        once: true, // whether animation should happen only once - while scrolling down
    });


});
