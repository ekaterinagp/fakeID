<?php
require_once(__DIR__ . '/../connection.php');

$sql = "SELECT * FROM user";
$conn  = new Database();
$statement = $conn->connectToDatabase()->prepare($sql);
if ($statement->execute()) {
  $users = $statement->fetchAll(PDO::FETCH_ASSOC);
  $conn = null;
  echo json_encode($users);
  return json_encode($users);

  $connection = null;
  exit;
}

echo 0;
$connection = null;
