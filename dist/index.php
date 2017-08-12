<!DOCTYPE html>
<html lang="fa">

<head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- <link rel="stylesheet" type="text/css" href="application.css"> -->
    <title> <?php $pageTitle = "پارس جدول - صفحه اصلی"; 
    echo $pageTitle;

    ?>
    </title>
</head>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="arrow-right" width="44.1" height="80" viewBox="0 0 44.1 80">
  
            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_2-2-2" data-name="Layer 2-2"><path d="M40.1,0a3.9,3.9,0,0,1,3.7,2.5c.9,1.9.1,3.5-1.3,4.9L25.9,24c-4.5,4.4-8.8,9-13.5,13.3-2.3,2.1-2.2,3.3,0,5.4,9.8,9.5,19.4,19.2,29,28.9,1.3,1.3,2.8,2.4,2.7,4.5a3.9,3.9,0,0,1-2.4,3.5,3.8,3.8,0,0,1-4.6-.9L1.5,43.1c-2-2-2-4.2,0-6.2L37.2,1.3A3.7,3.7,0,0,1,40.1,0Z" fill="#121313"/><path d="M40.1,0a3.9,3.9,0,0,1,3.7,2.5c.9,1.9.1,3.5-1.3,4.9L25.9,24c-4.5,4.4-8.8,9-13.5,13.3-2.3,2.1-2.2,3.3,0,5.4,9.8,9.5,19.4,19.2,29,28.9,1.3,1.3,2.8,2.4,2.7,4.5a3.9,3.9,0,0,1-2.4,3.5,3.8,3.8,0,0,1-4.6-.9L1.5,43.1c-2-2-2-4.2,0-6.2L37.2,1.3A3.7,3.7,0,0,1,40.1,0Z" fill="#fff"/></g></g></g></g>
        </symbol>
        <symbol id="arrow-up" viewBox="0 0 82.17 46.15">
            <defs>
                <style>
                .cls-1 {
                    fill: #fefefe;
                }
                
                .cls-2 {
                    fill: #121313;
                }
                </style>
            </defs>
            <title>Asset 1</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class="cls-1" d="M41.12,46.09c-12.64,0-25.28,0-37.93,0C1,46.15,0,46,0,43.21Q.29,23,0,2.79C0,.31.65,0,2.88,0Q41.05.17,79.23,0c2.84,0,2.91,1,2.9,3.22-.08,13.31-.13,26.62,0,39.92,0,2.61-.73,3-3.12,3C66.41,46,53.77,46.09,41.12,46.09Z" />
                    <path class="cls-2" d="M81.09,41.09a3.9,3.9,0,0,1-2.45,3.68c-1.93.86-3.5.09-4.91-1.33q-8.27-8.32-16.59-16.59C52.68,22.38,48.07,18,43.8,13.39c-2.11-2.29-3.27-2.21-5.42,0-9.51,9.78-19.23,19.36-28.88,29C8.23,43.66,7.11,45.2,5,45.1a3.92,3.92,0,0,1-3.51-2.4,3.78,3.78,0,0,1,.93-4.56Q20.18,20.29,38,2.49c2-2,4.17-2,6.16,0Q62,20.3,79.82,38.15A3.66,3.66,0,0,1,81.09,41.09Z" />
                </g>
            </g>
        </symbol>
    </svg>
    <nav class="navbar navbar-fixed-top navbar-light bg-faded navigation-bar is-visible" data-nav-status="toggle">
     
        <div id="main">
            <span id="btn" style="font-size:30px;cursor:pointer">&#9776;</span>
            <a href="./index.php"><h1>پارس <b>جدول</b></h1></a>
        </div>
   
    </nav>
    <!-- Sidebar -->
    <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn">&times;</a>
            <ul class="sideNav-title">
                <li>
                    <a class="nav-link-asli nav-link-style" href="./index.php">
                        <div class="jakesh">
                            <!-- <svg class="arrow-left-icon-asli arrow-style">
                                <use xlink:href="#arrow-right" />
                            </svg> -->
                        </div>
                        <div>صفحه اصلی</div>
                        <div class="nav asli">
                           
                        </div>
                    </a>
                </li>
                <li>
                    <a class="nav-link-1 nav-link-style"  href="#">
                        <div class="jakesh">
                            <svg class="arrow-left-icon-1 arrow-style">
                                <use xlink:href="#arrow-right" />
                            </svg>
                        </div>
                        <div>محصولات</div>
                        <div class="nav 1">
                         <!-- sraat of sub -->
                            <ul class="sideNav-sub">
                                <li>
                                    <a class="nav-link-1-1 nav-link-style-sub" href="#">
                                        <div class="jakesh">
                                            <svg class="arrow-left-icon-1-1 arrow-style-sub">
                                                <use class="jabbar" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <div>جدول</div>
                                        <div class="nav-sub-container 1-1">
                                            <a class="sub-link" href="catalog.php?cata=mozayik">جدول وت پرس</a>
                                            <a class="sub-link" href="#">جدول پرس خشك</a>
                                            <a class="sub-link" href="#">جدول دستي</a>
                                        </div> 
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link-1-2 nav-link-style-sub" href="#">
                                        <div class="jakesh">
                                            <svg class="arrow-left-icon-1-2 arrow-style-sub">
                                                <use class="jabbar" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <div>بلوك</div>
                                        <div class="nav-sub-container 1-2">
                                            <a class="sub-link" href="catalog.php?cata=mozayik">سبك پوكه</a>
                                            <a class="sub-link" href="#">بلوك سيماني</a>
                                            
                                        </div> 
                                    </a>
                                </li>
                                 <li>
                                    <a class="nav-link-1-3 nav-link-style-sub" href="#">
                                        <div class="jakesh">
                                            <svg class="arrow-left-icon-1-3 arrow-style-sub">
                                                <use class="jabbar" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <div>كفپوش</div>
                                        <div class="nav-sub-container 1-3">
                                            <a class="sub-link" href="catalog.php?cata=mozayik">پرس خشك</a>
                                            <a class="sub-link" href="#">وت پرس</a>   
                                            <a class="sub-link" href="#">ويبره</a> 
                                            <a class="sub-link" href="#">واش بتن</a>               
                                        </div> 
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link-no-sub" href="#">
                                        <div>دال بتني</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link-no-sub" href="#">
                                        <div>موزاییک</div>
                                    </a>
                                </li>
                                   <li>
                                    <a class="nav-link-1-4 nav-link-style-sub" href="#">
                                        <div class="jakesh">
                                            <svg class="arrow-left-icon-1-4 arrow-style-sub">
                                                <use class="jabbar" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <div>كول</div>
                                        <div class="nav-sub-container 1-4">
                                            <a class="sub-link" href="catalog.php?cata=mozayik">گرد</a>
                                            <a class="sub-link" href="#">انباري</a>   
                                            <a class="sub-link" href="#">كانالي</a>               
                                        </div> 
                                    </a>
                                </li>
                                        <li>
                                    <a class="nav-link-1-5 nav-link-style-sub" href="#">
                                        <div class="jakesh">
                                            <svg class="arrow-left-icon-1-5 arrow-style-sub">
                                                <use class="jabbar" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <div>مبلمان شهري</div>
                                        <div class="nav-sub-container 1-5">
                                            <a class="sub-link" href="catalog.php?cata=mozayik">نيمكت بتني</a>
                                            <a class="sub-link" href="#">پايه چراغ</a>   
                                            <a class="sub-link" href="#">استاپر</a>               
                                        </div> 
                                    </a>
                                </li>
                            </ul>

                            
                             <!-- ends here -->
                            <!-- -----------------mMMMMMMMMMMMMOOOHEM ------------------>
                           <!--  <a class="sub-link" href="#">کفپوش بتنی</a>
                            <a class="sub-link" href="#">سنگدال بتنی</a> -->
                        </div>
                    </a>
                </li>
              
                <li>
                    <a class="nav-link-2 nav-link-style" href="#">
                        <div class="jakesh">
                            <svg class="arrow-left-icon-2 arrow-style">
                                <use class="jabbar" xlink:href="#arrow-right" />
                            </svg>
                        </div>
                        <div>درباره ما</div>
                        <div class="nav 2">
                            <a class="sub-link" href="#">HOME</a>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    <div   class="container main">
        <!-- //////////////////////////////////end navbar\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->


        <div class="container head-intro">
         <!--    <h2 class="image-head-slog">سختکوشی ارث نامه ماست</h2>
            <h1 class="image-head-company">پارس جدول</h1> -->
        </div>


        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="center-block" src="images/mozayik/mobile/5zeli.png" alt="First slide">
                </div>
                <div class="item">
                    <img class="center-block" src="images/mozayik/mobile/puzzelesombe.png" alt="Second slide">
                </div>
                <div class="item">
                    <img class="center-block" src="images/mozayik/mobile/ajori.png" alt="Third slide">
                </div>
            </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- end CAROUSEL -->
        <div class="container col-feature axs1 ">
            <a href="#">
                <span class="image-head"> سنگفرش </span>
            </a>
        </div>
   
        <!-- parralex start -->
        <div class="spacer s0"></div>
        <div id="parallax1" class="parallaxParent">
            <div class="jabeja"></div>
        </div>
        <!-- parralex end -->
        <div class="container col-feature axs2 ">
            <a href="#">
                <span class="image-head"> موزاییک </span>
            </a>
        </div>
        <div class="container col-feature axs3 ">
            <a href="#">
                <span class="image-head"> سنگفرش </span>
            </a>
        </div>
    </div> <!-- ////////////////////////Closing Main Div tag \\\\\\\\\\\\\\\\\\\\\\\\-->

    <!-- //////////////////////////////////Contact and footer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <div class="contact container m-x-auto">
        <div class="top-nav">
            <a href="#" id="back-to-top">
                <svg class="arrow-icon">
                    <use xlink:href="#arrow-up" />
                </svg>
                <br>بالایه صفحه
            </a>
        </div>
        <div class="contact-info">
            <h4><a href="tel:+989121180175">۹۱۲-۱۱۸-۰۱۷۵</a> <span>: تلفن همراه</span></h4>
            <h4><a href="tel:+989123368183">۹۱۲-۳۳۶-۸۱۸۳</a> <span>: تلفن همراه</span></h4>
            <h4><span>آدرس:</span>ورامین بعد از میدان ولیعصر جنب کوی جعفر آباد</h4>
            <h4><a href="mailto:info@parsjadval.ir">info@parsjadval.ir</a><span>:ایمل</span></h4>
        </div>
    </div>
    <footer>
        <h1>&copy;پارس جدول</h1>
    </footer>

    <script src="./bundle.js"></script>
</body>

</html>
