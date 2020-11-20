<?php
  require_once(__DIR__ . '/connection.php');
  require_once(__DIR__ . '/entity/User.php');
  ?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">

    <title>
      FakeID</title>
  </head>
<header>
  <h1>FakeID</h1>
  <div class="menu-right">
    <a href="/">Overview</a>
    <a class="active" href="/create">Create</a>
  </div>
</header>


  <body>
    <main>

      <h2></h2>
      <?php
    require_once(__DIR__ . '/sharedFunctions.php');
    
    $getFunction = new SharedFunctions();

    ?>
    <div class="container">
    
    
    
    
  </main>
    <script src="js/script.js"></script>
  </body>

  </html>