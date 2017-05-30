<?php 
$pageTitle = "abbas ghaderi";
$productClass = null;
$productTitle = null;
if(isset($_GET["cata"])){
	if($_GET["cata"] == "jadval"){
		$pageTitle = "جدول بتنی - پارس جدول"; 
		$productGenre = "jadval";
		$productClass = "Jadval-page";
		$productTitle = "جدول بتنی";
  } else if ($_GET["cata"] == "mozayik") {
  	$pageTitle = "موزاییک - پارس جدول";
  	$productGenre = "mozayik";
  	$productClass = "mozayik-page";
  	$productTitle = "موزاییک";
  } 
  // elseif ($_GET["cata"] == "40x40") {
  // 	$pageTitle = "موزاییک - پارس جدول";
  // 	$productGenre = "mozayik";
  // 	$productClass = "mozayik-page-40x40";
  // 	$productTitle = "موزاییک";
  	
  // }
}
include 'inc/header.php';
?>
<h1 class="sub-title"><?php  echo $productTitle ?></h1> 
<div id="genre" class="<?php  echo $productGenre  ?>">

</div>

<div class="wrapper">
	<div class="group <?php  echo $productClass  ?>">
		

	</div>

</div>
<?php 
include 'inc/footer.php';
?>