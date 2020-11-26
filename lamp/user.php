<?php
require_once(__DIR__ . '/../lamp/utilities/connection.php');
require_once(__DIR__ . '/../lamp/src/entity/UserEmployee.php');
require_once(__DIR__ . '/../lamp/src/entity/UserNotEmployee.php');
require_once(__DIR__ . '/../lamp/src/entity/sharedFunctions.php');
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
  $address = $getFunction->getAddressByID($user->address_id);
  // echo json_encode($user);
  if($user->CVR){
    $User = new UserEmployee();
    $maritalStatus = '';
  }else{
    $User = new UserNotEmployee();
    $maritalStatus = $User->getMaritalStatus($user->marital_status_id);

  }
  echo '<h2>User  ' . $user->name . ' </h2>';
  echo '<div class="user"><h3>Name</h3><p>' . $user->name . '</p>
  <h3>Date of birth</h3><p>' . $User->formatBirthday($user->date_of_birth) . '</p>
  <h3>Address</h3><p>' . $User->setAddress($address) . '</p>
  <h3>CPR</h3><p>' . $user->CVR . '</p>
  <h3>Gender</h3><p>' . $User->getGenderValue($user->company_name) . '</p>
  <h3>Marital status</h3><p>' . $maritalStatus . '</p>

 </div>';

  ?>

</body>


<script src="../lamp/js/user-profile.js"></script>

</html>