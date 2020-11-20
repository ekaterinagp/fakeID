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

  <body>

    <h2>Here comes FakeID in LAMP now its automatically deployed</h2>
    <?php
    require_once(__DIR__ . '/sharedFunctions.php');

    $getFunction = new SharedFunctions();

    ?>
    <div class="container">
      <?php

      foreach ($getFunction->getAllUsers() as $user) {
        $User = new User();
        echo '<div class="singleUser"><p>' . $user['name'] . '</p><p>' . $User->calculateAge($user['date_of_birth']) . '</p> <p>' . $User->getGenderValue($user['gender_value']) . '</p> <p>' . $User->isEmployee(['CVR']) . '</p> <p>' . $User->getMaritalStatus($user['marital_status_id']) . '</p> <button>Login</button></div>';
      }

      ?>
    </div>



    <script src="js/script.js"></script>
  </body>

  </html>