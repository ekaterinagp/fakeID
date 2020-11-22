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
    <a href="index.php">Overview</a>
    <a class="active" href="lamp/create.php">Create</a>
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
    <form action="api/api-create-user.php" method="POST">
    <label for=""> Name
        <input type="text" name="name">
    </label>
    <label for=""> Address
        <select name="address_id" id="">
        <option value="1" name="address_id" >Lygten 17</option>
        <option value="2" name="address_id">Lygten 37</option>
    </select>
    </label>
    <label for=""> Date of Birth
        <input type="text" name="date_of_birth">
    </label>
    <div class="labelRadio">
        
        <input type="radio" id="female" name="gender_value" value='0002'>
        <label for="female"> Female </label>
        <input id="male" type="radio" name="gender_value" value='0001'>
        <label for="male"> Male </label>
    </div>
    <div class="labelRadio">
        <input type="radio" id="employee" name="isEmployee" value='true'>
        <label for="employee"> Is Employee </label>
        <input type="radio" id="not" name="isEmployee" value='false'>
        <label for="not"> Not Employee </label>
       
    </div>
    <input type="submit" value="Submit">
    </form>
    
    
    
  </main>
    <script src="js/script.js"></script>
  </body>

  </html>