<?php
require_once(__DIR__ . '/../pages/connection.php');
$id = $_GET['id'];
$sql = "SELECT * FROM user WHERE id='" . $id . "'";

$connection = new Database();
$statement = $connection->connectToDatabase()->prepare($sql);

if ($statement->execute()) {
  $user = $statement->fetch(PDO::FETCH_ASSOC);
  $connection = null;
  echo json_encode($user);
  return json_encode($user);
  $connection = null;
  exit;
}
echo 0;
$connection = null;
