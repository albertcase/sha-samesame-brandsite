(function($) {



    $(document).ready(function(){


        /*
        $slide_position = 0;

        if((window.location.hash).length>0){
            $hash_name= window.location.hash.replace('#!', '#');
            
            $slide_position = $( "li" ).index( $($hash_name));

            if($slide_position.length<0){
                $slide_position = 0;
            }

        }*/

        /** DĆ©claration du slider **/

        /*
        $('.bxslider').bxSlider({
            mode: 'fade',
            auto: false,
            startSlide:$slide_position,
            onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                $hash = $('.bxslider>li').eq(currentSlideHtmlObject).attr("id");
                console.log($(currentSlideHtmlObject));
                location.hash = "!"+$hash;
            },

            onSliderLoad: function () {
            

            }
        });

        $('.containeur_lecteur').click(function() {
            console.log("test");
            $(this).find(".screenshot").hide();
            $(this).find("video")[0].play(); 

        });*/


        /** Gestion du menu mobile**/
        /*$('.menu-mobile').click( function(e) {
            if($(this).hasClass("showMenu")){
                $("nav").hide();
                $('.menu-mobile').removeClass("showMenu");
            }else{

                $("nav").show();
                $('.menu-mobile').addClass("showMenu");
            }
        });*/

        /** Gestion des clics sur la page (ancres) **/
        /*$('nav [href*=#]:not([href=#])').click(function() {
            if($(".menu-mobile").hasClass("showMenu") && $("body").width()<1160){
                $("nav").hide();
                $('.menu-mobile').removeClass("showMenu");
            }else{
                $("nav").show();
                $("nav li a").each(function( index ) {
                    $(this).removeClass("underline-menu");
                });
                $(this).addClass('underline-menu');
            }
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({ scrollTop: target.offset().top}, 1000);
                    return false;
                }
            }
        });*/


        $( ".download-popin" ).click(function() {
            $("#popin-wrapper").show();
            var dataPdf =$(this).attr("data-pdf");
            $("#data-pdf").val(dataPdf);
        });



        $( "#popin .close" ).click(function() {
            $("#popin-wrapper").hide();
        });

    });



  

})(jQuery);