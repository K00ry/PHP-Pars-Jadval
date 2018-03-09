const data = require('./data.js');
import front from './front';

$(document).ready(function() {
    console.log(data);

    /////// catalog  Functions \\\\\\\\\\\\\

    var catalogGroup = $('.wrapper');
    var group = $(".group");
    var genre = $('#genre');
    var genre_btn = document.querySelector(".genre-btn a");;




    //////////////////////////////////////
    function genreBiult(object) {
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
        group_table += '<tr><th class="tg-6xid">هزینه</th><th class="tg-4s02">(فی(ریال</th><th>(cm)ابعاد</th></tr>';
        $.each(object.sizes, function(key, value) {
            group_table += '<tr>';
            group_table += '<td>' + value.shipping + '</td>';
            group_table += '<td>' + value.price + '</td>';
            group_table += '<td>' + value.type + '</td>';
            group_table += '</tr>';
        })
        group_table += '</table></div>';
        group_product += group_table;

        group.html(group_product).fadeIn("slow");
    }
    /////// alternate Table built 2

    function galleryTableBuilt2(object) {
        var group_product = " ";
        var group_table = " ";
        group_product += '<div class="table_wrapper">';
        group_product += '<div class="aks_table">';
        group_product += '<img class="aks_preview" src="images/' + object.img + '.jpg" alt="' + object.type + '">';
        group_product += '</div>';
        ////////////
        group_table += '<table class="tg">';
        group_table += '<tr><th>هزینه</th><th>(فی(ریال</th><th>(cm)ابعاد</th><th>نوع</th></tr>';
        $.each(object.sizes, function(key, value) {
            group_table += '<tr>';
            group_table += '<td>' + value.shipping + '</td>';
            group_table += '<td>' + value.price + '</td>';
            group_table += '<td>' + value.size + '</td>';
            group_table += '<td>' + value.type + '</td>';
            group_table += '</tr>';
        })
        group_table += '</table></div>';
        group_product += group_table;

        group.html(group_product).fadeIn("slow");
    }
    /////////////////////////////////////////
     function galleryTableBuilt3(object) {
        var group_product = " ";
        var group_table = " ";
        group_product += '<div class="table_wrapper">';
        group_product += '<div class="aks_table">';
        group_product += '<img class="aks_preview" src="images/' + object.img + '.jpg" alt="' + object.type + '">';
        group_product += '</div>';
        ////////////
        group_table += '<table class="tg">';
        group_table += '<tr><td rowspan="1"></td><th colspan="3" scope="colgroup">(فی(ریال</th></tr><tr><tr><th>هزینه بارگیری</th><th>(زرد و قرمز(خارجی</th><th>(قرمز(ایرانی</th><th>طوسی</th><th>تعداد در مترمربع</th><th>نوع</th></tr></tr>';
        $.each(object.sizes, function(key, value) {
            group_table += '<tr>';
            group_table += '<td>' + value.shipping + '</td>';
            group_table += '<td>' + value.yellowmix + '</td>';
            group_table += '<td>' + value.red + '</td>';
            group_table += '<td>' + value.toosi + '</td>';
            group_table += '<td>' + value.inSquarefeet + '</td>';
            group_table += '<th scope="row">' + value.type + '</td>';
            group_table += '</tr>';
        })
        group_table += '</table></div>';
        group_product += group_table;

        group.html(group_product).fadeIn("slow");
    }
 /// switching the type of product and calling appropriete function to load details /////


     function genreSwitch(key,func) {
        $('.genres').on('click', 'li', function(e) {
            e.preventDefault();
            genre.removeAttr('class');
            group.fadeOut("slow");
            var rightObject = key[$(this).attr('class')];
            setTimeout(function() { func(rightObject) }, 500);
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }
 
    ////highlights correct category
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


    //////for catalog JADVAL
    if (genre.hasClass('jadval')) {
        genreBiult(data.jadval);
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
        genreSwitch(data.jadval,galleryTableBuilt);
        //////for catalog BLOOK
    } else if (genre.hasClass('blook')) {
        genreBiult(data.blook);
        galleryTableBuilt2(data.blook.a);
        if (genre.hasClass('pooke')) {
            activeType("a");
            galleryTableBuilt2(data.blook.a);
        } else if (genre.hasClass('simani')) {
            activeType("b");
            galleryTableBuilt2(data.blook.b);
        }
        genreSwitch(data.blook,galleryTableBuilt2);
        //////for catalog DAL
    } else if (genre.hasClass('dal')) {
        genreBiult(data.dal);
        galleryTableBuilt(data.dal.a);
        if (genre.hasClass('light')) {
            activeType("a");
            galleryTableBuilt(data.dal.a);
        } else if (genre.hasClass('heavy')) {
            activeType("b");
            galleryTableBuilt(data.dal.b);
        }
        genreSwitch(data.dal,galleryTableBuilt);
        //////for catalog KAVAL
    } else if (genre.hasClass('kaval')) {
        genreBiult(data.kaval);
        galleryTableBuilt(data.kaval.a);
        if (genre.hasClass('gerd')) {
            activeType("a");
            galleryTableBuilt(data.kaval.a);
        } else if (genre.hasClass('anbary')) {
            activeType("b");
            galleryTableBuilt(data.kaval.b);
        } else if (genre.hasClass('kanaly')) {
            activeType("c");
            galleryTableBuilt(data.kaval.c);
        }
        genreSwitch(data.kaval,galleryTableBuilt);
        //////for catalog KAFPOOSH
    } else if (genre.hasClass('kafpoosh')) {
        genreBiult(data.kafpoosh);
        galleryTableBuilt3(data.kafpoosh.a);
        if (genre.hasClass('khoshk')) {
            activeType("a");
            galleryTableBuilt3(data.kafpoosh.a);
        } else if (genre.hasClass('press')) {
            activeType("b");
            galleryTableBuilt3(data.kafpoosh.b);
        } else if (genre.hasClass('vibrate')) {
            activeType("c");
            galleryTableBuilt3(data.kafpoosh.c);
        } else if (genre.hasClass('wash')) {
            activeType("d");
            galleryTableBuilt3(data.kafpoosh.d);
        }
        genreSwitch(data.kafpoosh,galleryTableBuilt3);
        //////for catalog MOZAYIK
    } else if (genre.hasClass('mozayik')) {
        genreBiult(data.mozayik);
        galleryTableBuilt3(data.mozayik.a);
        if (genre.hasClass('simplw')) {
            activeType("a");
            galleryTableBuilt3(data.mozayik.a);
        } else if (genre.hasClass('hayati')) {
            activeType("b");
            galleryTableBuilt3(data.mozayik.b);
        }
        genreSwitch(data.mozayik,galleryTableBuilt3);
        //////for catalog MOBLOMAN
    }



    front();


});

