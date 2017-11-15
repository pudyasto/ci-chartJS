<!--
 * CoreUI - Open Source Bootstrap Admin Template
 * @version v1.0.4
 * @link http://coreui.io
 * Copyright (c) 2017 creativeLabs Łukasz Holeczek
 * @license MIT
 -->
 <!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="CoreUI Bootstrap 4 Admin Template">
  <meta name="author" content="Lukasz Holeczek">
  <meta name="keyword" content="CoreUI Bootstrap 4 Admin Template">
  <!-- <link rel="shortcut icon" href="assets/ico/favicon.png"> -->

  <title><?php echo $template['title'];?></title><meta charset="UTF-8" />

  <!-- Icons -->
  <link rel="stylesheet" href="<?=base_url('assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css');?>" />
  <link rel="stylesheet" href="<?=base_url('assets/plugins/simple-line-icons/css/simple-line-icons.css');?>" />


  <!-- Main styles for this application -->
  <link href="<?=base_url('assets/css/style.css');?>" rel="stylesheet">

  <!-- Styles required by this views -->

</head>


<body class="app flex-row align-items-center">
<div class="container">
    <?php echo $template['body'];?>
</div>

<!-- Bootstrap and necessary plugins -->
<script src="<?=base_url('assets/js/jquery-3.2.1.min.js');?>"></script> 
<script src="<?=base_url('assets/plugins/popper.js/umd/popper.min.js');?>"></script>   
<script src="<?=base_url('assets/js/bootstrap.min.js');?>"></script>  
</body>
</html>
