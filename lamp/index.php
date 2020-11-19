  <?php
  require_once(__DIR__ . '/connection.php');
  use TDD\Database;
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
      function getAllUsers(){
        $sql = "SELECT * FROM user";
        $conn  = new Database();
        $statement = $conn->connectToDatabase()->prepare($sql);
        // echo $conn->selectAllUsers();
        if ($statement->execute()) {
          $users = $statement->fetchAll(PDO::FETCH_ASSOC);
          $conn = null;
          return $users;
      }
    }
      foreach (getAllUsers() as $user) {
        echo '<p>' . $user['name'] . '</p>';
      }
    

    ?>

    <h2>Here comes FakeID in LAMP now its automatically deployed</h2>

  </body>

  </html>