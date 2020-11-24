  <?php
  require_once(__DIR__ . '/../lamp/pages/connection.php');
  require_once(__DIR__ . '/../lamp/src/entity/User.php');
  require_once(__DIR__ . '/../lamp/pages/sharedFunctions.php');
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
      <a href="/" class="active">Overview</a>
      <a href="create.php">Create</a>
    </div>
  </header>


  <body>
    <main>

      <h2></h2>
      <?php



      $getFunction = new SharedFunctions();

      ?>
      <div class="container">
        <?php

        foreach ($getFunction->getAllUsers() as $user) {
          $isEmployee;
          $User = new User();
          echo '<div class="singleUser"><p>' . $user['name'] . '</p>
            <p>' . $User->calculateAge($user['date_of_birth']) . '</p>
            <p>' . $User->getGenderValue($user['gender_value']) . '</p>
            <p>' . $User->isEmployee($user['CVR']) . '</p>
            <p>' . $User->getMaritalStatus($user['marital_status_id']) . '</p>
            <button class="loginBtn">Log in</button>
            </div>';
        }

        ?>
      </div>



    </main>
    <script src="../js/script.js"></script>
  </body>

  </html>