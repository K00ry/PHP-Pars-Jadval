var css = require('../scss/application.scss');
var $ = require('../../node_modules/jquery/dist/jquery.js');
var bootstrapCarousel = require('../../node_modules/bootstrap/dist/js/npm.js');
var bootstrap = require('../../node_modules/bootstrap/dist/js/bootstrap.js');
var ScrollMagic = require('../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js');
var setTween = require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
var data = require('./data.js');

$(document).ready(function() {

    console.log(data);
    /////// catalog  Functions \\\\\\\\\\\\\

    var catalogGroup = $('.wrapper');
    var group = $(".group");
    // var mozayik_class = $(".mozayik-page");
    // var jadval_class = $(".Jadval-page");
    // var dal_class = $(".dal-page");

    var genre = $('#genre');
    var genre_btn = document.querySelector(".genre-btn a");;


    function genreBiult(object) {
        genre.empty();
        var genre_identify = '<ul class="genres">';
        $.each(object, function(key, value) {
            genre_identify += '<li class="' + key + '">';
            $.each(value, function(key, value) {
                genre_identify += '<a href="#">' + key + '</a>';
                genre_identify += '</li>';
            });
        });
        genre_identify += "</ul>"
        genre.html(genre_identify);
        $(".genres li:nth-child(2)").addClass('active');
    }

    //////////////////////////////////////
    function genreBiult2(object) {
        genre.empty();
        var genre_identify = '<ul class="genres">';
        $.each(object, function(key, value) {
            genre_identify += '<li class="' + key + '">';
            // genre_identify += '<li class="genre-btn">';
            genre_identify += '<a href="#">' + value.type + '</a>';
            genre_identify += '</li>';
        });
        genre_identify += "</ul>"
        genre.html(genre_identify);
        // $(".genres li:nth-child(1)").addClass('active');
    }
    /////////////////////////////////////////

    function galleryBuilt(object) {

        var group_product = " ";
        $.each(object, function(key, value) {
            group_product += '<div class="itemha">';
            group_product += '<img src="images/mozayik/mobile/' + value.img + '.png" alt="' + value.type + '">';
            group_product += '<div class="item-detail"><span>' + value.size + '</span>';
            group_product += '<span class="item-name">' + value.type + '</span></div>';
            group_product += '</div>';
        })
        mozayik_class.html(group_product).fadeIn("slow");
    }
    /////////////////////////////////////////

    function galleryTableBuilt(object) {

        var group_product = " ";
        var group_table = " ";

        group_product += '<div class="table_wrapper">';
        group_product += '<div class="aks_table">';
        group_product += '<img class="aks_preview" src="images/' + object.img + '.jpg" alt="' + object.type + '">';
        group_product += '</div>';
        ////////////
        group_table += '<table class="tg">';
        group_table += '<tr><th class="tg-6xid">هزینه</th><th class="tg-4s02">(فی(ریال</th><th class="tg-031e">(cm)ابعاد</th></tr>';
        $.each(object.sizes, function(key, value) {
            group_table += '<tr>';
            group_table += '<td class="tg-031e">' + value.shipping + '</td>';
            group_table += '<td class="tg-031e">' + value.price + '</td>';
            group_table += '<td class="tg-031e">' + value.type + '</td>';
            group_table += '</tr>';
        })
        group_table += '</table></div>';
        group_product += group_table;

        group.html(group_product).fadeIn("slow");
    }
    /////////////////////////////////////////
    function genreSwitch(key) {
        $('.genres').on('click', 'li', function(e) {
            e.preventDefault();
            mozayik_class.fadeOut("slow");
            var rightObject = key[$(this).attr('class')][$(this).children().html()];
            setTimeout(function() { galleryBuilt(rightObject) }, 500);
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }
    /////////////////////////////////////////
    function genreSwitch2(key) {
        $('.genres').on('click', 'li', function(e) {
            e.preventDefault();
            genre.removeAttr('class');
            group.fadeOut("slow");
            var rightObject = key[$(this).attr('class')];
            setTimeout(function() { galleryTableBuilt(rightObject) }, 500);
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }
    /////////////////////////////////////////
    function activeType(type) {

        var a = $(".genres li:nth-child(1)");
        var b = $(".genres li:nth-child(2)");
        var c = $(".genres li:nth-child(3)");
        
        $('genres li').removeClass('active');
        if (type === "a") {
            a.addClass('active');
        } else if (type === "b") {
            b.addClass('active');
        } else {
            c.addClass('active');
        }
    }

    ////////////////////////// apply function based on the uniqe product page \\\\\\\\\\\

    if (genre.hasClass('mozayik')) {
        genreBiult(data.mozayik);
        galleryBuilt(data.mozayik.b["40x40"]);
        genreSwitch(data.mozayik);
        //////for catalog JADVAL
    } else if (genre.hasClass('jadval')) {
        genreBiult2(data.jadval);
        galleryTableBuilt(data.jadval.a);
        if (genre.hasClass('wet')) {
            activeType("a");
            galleryTableBuilt(data.jadval.a);
        } else if (genre.hasClass('kush')) {
            activeType("b");
            galleryTableBuilt(data.jadval.b);
        } else if (genre.hasClass('hand')) {
            activeType("c");
            galleryTableBuilt(data.jadval.c);
        }
        genreSwitch2(data.jadval);
        //////for catalog DAL
    } else if (genre.hasClass('dal')) {
        genreBiult2(data.dal);
        galleryTableBuilt(data.dal.a);
        if (genre.hasClass('light')) {
            activeType("a");
            galleryTableBuilt(data.dal.a);
        } else if (genre.hasClass('heavy')) {
            activeType("b");
            galleryTableBuilt(data.dal.b);
        } 
        genreSwitch2(data.dal);
        //////for catalog KAVAL
    } else if (genre.hasClass('kaval')) {
        genreBiult2(data.kaval);
        galleryTableBuilt(data.kaval.a);
        if (genre.hasClass('gerd')) {
            activeType("a");
            galleryTableBuilt(data.kaval.a);
        } else if (genre.hasClass('anbary')) {
            activeType("b");
            galleryTableBuilt(data.kaval.b);
        } else if (genre.hasClass('kanaly')) {
            activeType("b");
            galleryTableBuilt(data.kaval.b);
        } 
        genreSwitch2(data.kaval);
    }













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









});