<?php

class SharedFunctions
{

  function getAllUsers()
  {
    $sql = "SELECT * FROM user";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $users = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      return $users;
    }
  }
}
