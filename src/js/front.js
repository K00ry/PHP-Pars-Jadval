    var css = require('../scss/application.scss');
    var $ = require('../../node_modules/jquery/dist/jquery.js');
    var bootstrapCarousel = require('../../node_modules/bootstrap/dist/js/npm.js');
    var bootstrap = require('../../node_modules/bootstrap/dist/js/bootstrap.js');
    var ScrollMagic = require('../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js');
    var setTween = require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');

    export default function front() {
       


        //////////////////////////////////////////////////////////////////////////////////////

        // init controller
        var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

        // build scenes
        new ScrollMagic.Scene({ triggerElement: "#parallax1" })
            .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })

            .addTo(controller);

        /** ===========================================
            Hide / show the master navigation menu
        ============================================ */

        // console.log('Window Height is: ' + $(window).height());
        // console.log('Document Height is: ' + $(document).height());

        var previousScroll = 0;

        $(window).scroll(function() {

            var currentScroll = $(this).scrollTop();

            /*
              If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
            */
            if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
                /*
                  If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
                */
                if (currentScroll > previousScroll) {
                    window.setTimeout(hideNav, 300);
                    /*
                      Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
                    */
                } else {
                    window.setTimeout(showNav, 300);
                }
                /* 
                  Set the previous scroll value equal to the current scroll.
                */
                previousScroll = currentScroll;
            }

        });

        function hideNav() {
            $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
        }

        function showNav() {
            $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
        }





        ///////   back to top function\\\\\\\\\\\\\\

        var btn_top = $('#back-to-top');

        if (btn_top.length) {
            var scrollTrigger = 100, // px
                backToTop = function() {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        btn_top.addClass('show');
                    } else {
                        btn_top.removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function() {
                backToTop();
            });
            btn_top.on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }








        //////////////// side nav \\\\\\\\\


        var links = $('.sidenav ul');
        var slide_nav = $('#mySidenav');

        function openNav() {

            slide_nav.css('width', "200px").addClass('nav-open');
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }

        function closeNav() {
            slide_nav.css('width', "0");
            document.body.style.backgroundColor = "white";
        }

        $('#btn').click(function(e) {
            e.stopPropagation();
            if (slide_nav.hasClass('nav-open')) {
                slide_nav.removeClass('nav-open');
                links.fadeOut();
                closeNav();

            } else {
                links.fadeIn();
                openNav();
            }

        });
        slide_nav.click(function() {
            links.fadeOut();
            closeNav();
        });
        $('#main,.main,.contact').click(function() {
            links.fadeOut();
            closeNav();
        });


        ///////////////// sub nav function for home goodies \\\\\\\\\\
        var sub_down = $('.head-intro-sub');

        function dropSub() {
            sub_down.css('height', "50px").addClass('sub-open');
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }

        function closeSub() {
            sub_down.css('height', "0");
            document.body.style.backgroundColor = "white";
        }
        $('.head-intro').click(function(e) {
            e.stopPropagation();
            if (sub_down.hasClass('sub-open')) {
                sub_down.removeClass('sub-open');
                // links.fadeOut();
                closeSub();

            } else {
                // links.fadeIn();
                dropSub();
            }

        });



        /////////// side nav sub links functions \\\\\\\\\\\\\\\\


        function openSubLink(selector) {
            if (selector.hasClass('expand')) {
                selector.removeClass('expand');
            } else {
                selector.addClass('expand');
            }
        }

        function openSubMenu(handler, div, svg) {
            handler.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                div.toggle('slow');
                // div.toggleClass('nav-sub-img');
                openSubLink(svg);
            });
        }

        openSubMenu($('.nav-link-1'), $('.1'), $('.arrow-left-icon-1'));
        /////////
        openSubMenu($('.nav-link-1-1'), $('.1-1'), $('.arrow-left-icon-1-1'));
        openSubMenu($('.nav-link-1-2'), $('.1-2'), $('.arrow-left-icon-1-2'));
        openSubMenu($('.nav-link-1-3'), $('.1-3'), $('.arrow-left-icon-1-3'));
        openSubMenu($('.nav-link-1-4'), $('.1-4'), $('.arrow-left-icon-1-4'));
        openSubMenu($('.nav-link-1-5'), $('.1-5'), $('.arrow-left-icon-1-5'));
        openSubMenu($('.nav-link-1-6'), $('.1-6'), $('.arrow-left-icon-1-6'));
        openSubMenu($('.nav-link-1-7'), $('.1-7'), $('.arrow-left-icon-1-7'));

        //////
        openSubMenu($('.nav-link-2'), $('.2'), $('.arrow-left-icon-2'));

        // $('.nav-link').click(function (e) {

        //     e.preventDefault();
        //     e.stopPropagation();
        //     $('.nav').toggle('slow');
        //    openSubLink($('.arrow-left-icon'));
        // });
    }