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

    <?php
    $sql = "SELECT * FROM user";
    $statement = $connection->prepare($sql);

    if ($statement->execute()) {
      $users = $statement->fetchAll(PDO::FETCH_ASSOC);
      $connection = null;

      foreach ($users as $user) {

        echo '<p>' . $user['name'] . '</p>';
      }
    }

    ?>

    <h2>Here comes FakeID in LAMP now its automatically deployed</h2>

  </body>

  </html>