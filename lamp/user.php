<?php
require_once(__DIR__ . '/../lamp/pages/connection.php');
require_once(__DIR__ . '/../lamp/src/entity/User.php');
require_once(__DIR__ . '/../lamp/pages/sharedFunctions.php');
?>


<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>User <?php $_GET['id'] ?></title>
</head>

<body>

  <?php
  $id = $_GET['id'];
  $getFunction = new SharedFunctions();
  $user =  $getFunction->getUserById($id);
  // echo json_encode($user);
  $User = new User();
  echo '<div class="user"><h3>Name</h3><p>' . $user->name . '</p>
  <h3>Date of birth</h3><p>' . $User->formatBirthday($user->date_of_birth) . '</p>
  <h3>Address</h3><p>' . $user->address_id . '</p>
  <h3>CPR</h3><p>' . $user->CPR . '</p>
  <h3>Gender</h3><p>' . $User->getGenderValue($user->company_name) . '</p>
  <h3>Marital status</h3><p>' . $User->getMaritalStatus($user->marital_status_id) . '</p>


 </div>';



  ?>

</body>


<script src="../lamp/js/user-profile.js"></script>

</html>