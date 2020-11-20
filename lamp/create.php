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
    <a class="active" href="/create.php">Create</a>
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
    <form action="">
    <label for=""> Name
        <input type="text">
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
    <label for=""> Female
        <input type="radio" name="gender_value" value='0002'>
    </label>
    <label for=""> male
        <input type="radio" name="gender_value" value='0001'>
    </label>
    <label for=""> Is Employee
        <input type="radio" name="isEmployee" value='true'>
    </label>
    <label for=""> Not Employee
        <input type="radio"name="isEmployee" value='false'>
    </label>
    </form>
    
    
    
  </main>
    <script src="js/script.js"></script>
  </body>

  </html>