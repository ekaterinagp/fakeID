<?php
require_once(__DIR__ . "/../pages/connection.php");
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
  function sendErrorMessage($message, $line)
  {
    $response = ['status' => 0, 'message' => $message, 'line' => $line];
    echo json_encode($response);
    exit;
  }


  function getUserByID($id)
  {

    $sql = "SELECT * FROM user WHERE id=$id";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $user = $statement->fetch(PDO::FETCH_ASSOC);
      $conn = null;
      $object = (object) $user;
      return json_decode(json_encode($object));
    }
  }
}
