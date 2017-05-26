<?php 
$pageTitle = "abbas ghaderi";
$productClass = null;
$productTitle = null;
if(isset($_GET["cata"])){
	if($_GET["cata"] == "jadval"){
		$pageTitle = "جدول بتنی - پارس جدول"; 
		$productClass = "Jadval-page";
		$productTitle = "جدول بتنی";
  } else if ($_GET["cata"] == "mozayik") {
  	$pageTitle = "موزاییک - پارس جدول";
  	$productClass = "mozayik-page";
  	$productTitle = "موزاییک";
  }
}
include 'inc/header.php';
?>
<h1><?php  echo $productTitle ?></h1> 
<div class="wrapper">
	<div class=" group <?php  echo $productClass  ?>">
		

	</div>

</div>
<?php 
include 'inc/footer.php';
?>