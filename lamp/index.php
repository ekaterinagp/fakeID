  <?php
  require_once(__DIR__ . '/connection.php');
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
        echo '<div class="singleUser"><p>' . $user['name'] . '</p><p>' . $user['date_of_birth'] . '</p> <p>' . $user['gender_value'] . '</p> <p>' . $user['CVR'] . '</p> <p>' . $user['marital_status_id'] . '</p></div>';
      }


      ?>
    </div>



    <script src="js/script.js"></script>
  </body>

  </html>