<?php
	session_start();
	//if (isset($_FILES["product_image"])){
	//	echo "YES";
	//}
	$product_name = $_POST["product_name"];
	$product_price = $_POST["product_price"];
	$product_stock = $_POST["product_stock"];
	$product_threshold = $_POST["product_threshold"];
	$product_id = $_POST["product_id"];
	$product_brand = $_POST["product_brand"];
	$product_size = $_POST["product_size"];
	$product_description = $_POST["product_description"];
	$product_gender = $_POST["product_gender"];
	$product_offer_price = $_POST["product_offer_price"];
	$product_offer_percentage = $_POST["product_offer_percentage"];
	$product_color = $_POST["product_color"];
	$product_cat = $_POST["product_cat"];
	$product_subcat = $_POST["product_subcat"];
	$product_image = $_FILES["product_image"];
	$shop_name = $_POST["shop_name"];
	$file_names = array();
	$temp_flag = $_POST["temp_flag"];
	$_SESSION["shop_name"] = $shop_name;

	$user = $_SESSION["username"];
	$file_count = count($product_image["name"]);

	if (!file_exists('user_folders/'.$user.'/images'))
		mkdir('user_folders/'.$user.'/images');

	
	function getExtension($str)
	{
		$j = strrpos($str,".");
	 	if (!$j) { return ""; }
	 	$l = strlen($str) - $j;
	 	$ext = substr($str,$j+1,$l);
	 	return $ext;
	}

	//$copy = copy($_FILES['product_image']['tmp_name'], $path);
	for ($i = 0; $i < $file_count; $i++){

		$filename = stripslashes($_FILES['product_image']['name'][$i]);
		$extension = getExtension($filename);
		$image_name = $product_name.'_'.($i+1).'.'.$extension;

		array_push($file_names, $image_name);
		$path = "user_folders/".$user."/images/".$image_name;
		copy($_FILES['product_image']['tmp_name'][$i], $path);
	}
	$file = fopen('user_folders/'.$user.'/product_data.json', 'w');
	/*$string = '{'.(string)$product_name.' : {'.
		'product_price : '.(string)$product_price.','.
		'product_stock : '.(string)$product_stock.','.
		'product_threshold : '.(string)$product_threshold.','.
		'product_image : '.$product_image.','.
		'product_id : '.(string)$product_id.','.
		'product_brand : '.$product_brand.','.
		'product_size : '.(string)$product_size.','.
		'product_description : '.(string)$product_description.','.
		'product_gender : '.$product_gender.','.
		'product_offer_price : '.(string)$product_offer_price.','.
		'product_offer_percentage : '.(string)$product_offer_percentage.','.
		'product_color : '.$product_color.','.
		'}'.
	'}';*/
	if(!isset($_SESSION["json_str"])){
		$_SESSION["json_str"] = array();
	}
	$string = array('product_price' => (string)$product_price, 'product_stock' => (string)$product_stock, 'product_threshold' => (string)$product_threshold, 'product_image' => $file_names, 'product_id' => (string)$product_id, 'product_brand' => (string)$product_brand, 'product_size' => $product_size, 'product_description' => (string)$product_description, 'product_gender' => (string)$product_gender, 'product_offer_price' => (string)$product_offer_price, 'product_offer_percentage' => (string)$product_offer_percentage, 'product_color' => (string)$product_color); 
	$json_str[(string)$product_name] = $string;


	if (isset($_SESSION['json_str'][$product_cat])){
		if (isset($_SESSION['json_str'][$product_cat][$product_subcat])){
			$temp_arr = $_SESSION['json_str'][$product_cat][$product_subcat];
			$temp_arr2[$product_subcat] = array_merge($temp_arr, $json_str);
			$temp_arr3[$product_cat] = $temp_arr2;
			$_SESSION['json_str'] = $temp_arr3;
		}
		else{
			$temp_arr2[$product_subcat] = $json_str;
			$temp_arr3 = $_SESSION['json_str'][$product_cat];
			$temp_arr4[$product_cat] = array_merge($temp_arr3, $temp_arr2);
			$_SESSION['json_str'] = $temp_arr4;
		}
	}
	else{
		$temp_arr2[$product_subcat] = $json_str;
		$temp_arr3[$product_cat] = $temp_arr2;
		$_SESSION['json_str'] = array_merge($_SESSION['json_str'], $temp_arr3);
	}
	//$json_str2[(string)$product_subcat] = $json_str;
	//$json_str3[(string)$product_cat] = $json_str2;
	//$_SESSION['json_str'] = array_merge($_SESSION['json_str'],$json_str3);
	$json_str4[(string)$shop_name] = $_SESSION['json_str'];
	


	// i have a idea but i think you should do it 
	//get a shop name from anywhere (add a input text make its visibility hidden and set its value to shopname and add it to your form this form and then fetch the value of that )
	//then take a master array and for e.g -------$main_json['shopname'] = $_SESSION['json_str'] add this line here and in the below line pass $main_json instead of SESSION value got it??
	fwrite($file, json_encode($json_str4));
	fclose($file);
	//echo "<script type='text/javascript'>alert('Called.');</script>";
	if ($temp_flag != 1){
		header("location:javascript://history.go(-1)");
	}
	else{
		header("location:template.php");
	}
?>