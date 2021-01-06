

<!DOCTYPE html>
<?php 
$local;
if($_SERVER["REMOTE_ADDR"]=="::1"){
    $local = True;
    }else{
    
        $local = False;
}

// include_once('home.html'); 


?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>FakeID test page</title>
</head>
<body class="testpage">

    <a href=
    <?php
        if($local){ echo "/fakeid/lamp/";}else{ echo 'https://fakeid-lamp.herokuapp.com/'; };
    ?>
    >LAMP</a>
    <a href=
    <?php
        if($local){ echo "http://localhost:3000";}else{ echo 'https://fakeid-mern.herokuapp.com/'; };
    ?>
    >MERN</a>
    <a href=
    <?php
        if($local){ echo "http://localhost:4200";}else{ echo 'https://fakeid-mean.herokuapp.com/'; };
    ?>
    >MEAN</button>
    
</body>
</html>