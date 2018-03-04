<?php session_start(); 
if(!isset($_SESSION["username"])){
  $_SESSION['go']=2;
  echo '<script language="javascript">
  alert("You need to Sign In to use this feature!!!")
  window.location.href="login.php"
  </script>';
}
?>
<html>
<head>
  <title>admin page</title>
<style>
   .menu {
        float:left;
        width:14%;
        height:100%;
    }
    .topBar{
      float: left;
      width: 85%;
      height: 10%;
    }
    .mainContent {
        float:left;
        width:85%;
        height: 90%;
    }
    .hr{
      float:left;
        width:1%;
        height:100%;
    }
    .badge1 {
      float: right;
      position:relative;
  }
  .badge1[data-badge]:after {
     content:attr(data-badge);
     position:absolute;
     top:-10px;
     right:-10px;
     font-size:.9em;
     background: #FF0000;
     color:white;
     width:25px;height:25px;
     text-align:center;
     line-height:25px;
     border-radius:50%;
     box-shadow:0 0 1px #333;
  }
  button {
      background-color: #37A8E5; 
      border: none;
      color: white;
      padding: 8px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
  }
  </style>
  <script type="text/javascript">
    function load_pages(choice){
      if (choice == "dashboard"){
        document.getElementById("mainContent").innerHTML='<iframe width=100% height=100% src="dashboard-admin.php">iframe is not supported, try Chrome browser</iframe>';
      }
      else if (choice == "preview-products"){
        document.getElementById("mainContent").innerHTML='<iframe width=100% height=100% src="preview-products-admin.php">iframe is not supported, try Chrome browser</iframe>';
      }
      else if (choice == "download-products"){
        document.getElementById("mainContent").innerHTML='<iframe width=100% height=100% src="download-product-data.php">iframe is not supported, try Chrome browser</iframe>';
      }
      else if (choice == "update-products"){
        document.getElementById("mainContent").innerHTML='<iframe width=100% height=100% src="update-product-admin.php">iframe is not supported, try Chrome browser</iframe>';
      }
      else if (choice == "delete-products"){
        document.getElementById("mainContent").innerHTML='<iframe width=100% height=100% src="delete-product-admin.php">iframe is not supported, try Chrome browser</iframe>';
      }
      else if (choice == "add-products"){
        document.getElementById("mainContent").innerHTML='<iframe width=100% height=100% src="add-product-admin.php">iframe is not supported, try Chrome browser</iframe>';
      }
    }
  </script>
</head>
<body style="background-color: #FCFBF1">
  <div class="menu" id="menu"><br>
    <button onclick="load_pages('dashboard');">dashboard</button><br><br>
    <button onclick="load_pages('preview-products');">preview products</button><br><br>
    <button onclick="load_pages('download-products');">download data in excel</button><br><br>
    <button onclick="load_pages('update-products');">Update product data</button><br><br>
    <button onclick="load_pages('delete-products');">Delete product</button><br><br>
    <button onclick="load_pages('add-products');">Add product</button><br><br>
  </div>
  <div class="hr">
    <hr width="1" size="610">
  </div>
  <div class="topBar" id="topBar">
    <button onclick="#">Change Password</button>
    <button onclick="#">Logout</button>
    <button class="badge1" data-badge="0">Notifications</button>
    <hr>
  </div>
    <div class="mainContent" id="mainContent">
      <iframe width=100% height=100% src="dashboard-admin.php">iframe is not supported, try Chrome browser</iframe>
    </div>
</body>
</html>