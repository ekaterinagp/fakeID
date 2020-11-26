<?php
require_once(__DIR__ . '/../lamp/utilities/connection.php');
require_once(__DIR__ . '/../lamp/src/entity/User.php');
require_once(__DIR__ . '/../lamp/src/entity/sharedFunctions.php');
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
    <a class="active" href="create.php">Create</a>
  </div>
</header>


<body>
  <main>

    <h2></h2>
    <?php


    $getFunction = new SharedFunctions();

    ?>
    <div class="container">
      <form method="POST">
        <div class="form-field">
          <input type="text" name="name" placeholder="Name">
          <label for=""> Name</label>
        </div>
        <div class="form-field">
          <select name="address_id" id="" placeholder="Select Address" required>
            <option value="" disabled selected>Select Address</option>
            <option value="1">Lygten 17</option>
            <option value="2">Lygten 37</option>
          </select>
          <label for=""> Address </label>
        </div>
        <div class="form-field">
          <input type="text" name="date_of_birth" placeholder="Date of Birth">
          <label for=""> Date of Birth</label>
        </div>
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
        <input type="submit" onclick="submitCreateForm()">
      </form>



  </main>
  <script src="./js/script.js"></script>
  <script src="./js/create.js"></script>
</body>

</html>