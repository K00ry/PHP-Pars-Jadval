<?php 
$pageTitle = "abbas ghaderi";
$productClass = null;
$productTitle = null;
$productMode = null;
if(isset($_GET["cata"])){
	if($_GET["cata"] == "jadval"){
		$pageTitle = "جدول بتنی - پارس جدول"; 
		$productGenre = "jadval";
		$productClass = "Jadval-page";
		$productTitle = "جدول بتنی";
    if($_GET["mode"] == "wet"){
    $productMode = " wet";
    } else if ($_GET["mode"] == "kush") {
      $productMode = " kush";
    } else if ($_GET["mode"] == "hand") {
      $productMode = " hand";
    }  
  } else if ($_GET["cata"] == "mozayik") {
  	$pageTitle = "موزاییک - پارس جدول";
  	$productGenre = "mozayik";
  	$productClass = "mozayik-page";
  	$productTitle = "موزاییک";
  } else if ($_GET["cata"] == "dal"){
    $pageTitle = "دال بتني - پارس جدول"; 
    $productGenre = "dal";
    $productClass = "dal-page";
    $productTitle = "دال بتني";
    if($_GET["mode"] == "light"){
    $productMode = " light";
    } else if ($_GET["mode"] == "heavy") {
      $productMode = " heavy";
    }  
  } else if ($_GET["cata"] == "kaval"){
    $pageTitle = "دال بتني - پارس جدول"; 
    $productGenre = "kaval";
    $productClass = "kaval-page";
    $productTitle = "كول";
    if($_GET["mode"] == "gerd"){
    $productMode = " gerd";
    } else if ($_GET["mode"] == "anbary") {
      $productMode = " anbary";
    }  else if ($_GET["mode"] == "kanaly") {
      $productMode = " kanaly";
    }  
  }
}
include 'inc/header.php';
?>
<h1 class="sub-title"><?php  echo $productTitle ?></h1> 
<div id="genre" class="<?php  echo $productGenre ; echo $productMode ?>">

</div>

<div class="wrapper">
	<div class="group <?php  echo $productClass  ?>">
		

	</div>

</div>
<?php 
include 'inc/footer.php';
?>