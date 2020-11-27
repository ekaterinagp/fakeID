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
  if ($user->CVR) {
    $User = new UserEmployee($user->CVR, $user->company_name);
    $maritalStatus = '';
    $class = ' class="hidden"';
  } else {
    $User = new UserNotEmployee();
    $maritalStatus = $User->getMaritalStatus($user->marital_status_id);
    $class = ' class="';
  }

  echo '<h2>User  ' . $user->name . ' </h2>';
  echo '<div class="user"><h3>Name</h3><p>' . $user->name . '</p>
  <h3>Date of birth</h3><p>' . $User->formatBirthday($user->date_of_birth) . '</p>
  <h3>Address</h3><p>' . $User->setAddress($address) . '</p>
  <h3>CPR</h3><p>' . $user->CPR . '</p>
  <h3>Gender</h3><p>' . $User->getGenderValue($user->gender_value) . '</p>
  <div ' . $class . '>
  <h3>Marital status</h3><p>' . $maritalStatus . '</p></div>

 </div>';

  echo '<div class="editContainer">
 <form method="PUT">
 <div class="form-field">
 <input type="text" name="name" value="' . $user->name . '">
 <label for=""> Name</label>
</div>';
  ?>

  <div class="form-field">
    <select name="address_id" id="" required>

      <option value="1" <?php if ($user->address_id == 1) echo 'selected' ?>>Lygten 17</option>
      <option value="2" <?php if ($user->address_id == 2) echo 'selected' ?>>Lygten 37</option>
    </select>
    <label for=""> Address </label>
  </div>

  <div class="form-field <?php if ($user->company_name) echo 'hidden'; ?>">
    <select name="marital_status_id" id="">

      <option value="1" <?php if ($user->marital_status_id == 1) echo 'selected' ?>>Single</option>
      <option value="2" <?php if ($user->marital_status_id == 2) echo 'selected' ?>>Married</option>
      <option value="1" <?php if ($user->marital_status_id == 5) echo 'selected' ?>>Registered Partnership</option>
      <option value="2" <?php if ($user->marital_status_id == 6) echo 'selected' ?>>Abolition Of Registered Partnership</option>
      <option value="1" <?php if ($user->marital_status_id == 3) echo 'selected' ?>>Divorced</option>
      <option value="2" <?php if ($user->marital_status_id == 4) echo 'selected' ?>>Widow</option>
      <option value="1" <?php if ($user->marital_status_id == 7) echo 'selected' ?>>Deceased</option>
      <option value="2" <?php if ($user->marital_status_id == 8) echo 'selected' ?>>Unknown</option>
    </select>
    <label for=""> Marital status </label>
  </div>

  <div class="form-field <?php if ($user->company_name || $user->marital_status_id == 2 || $user->marital_status_id == 5) echo 'hidden'; ?>">
    <select name="spouse_id" id="">
      <option value="" disabled selected>Select Spouse</option>
      <?php
      foreach ($getFunction->getAllAvailableSpouses($id) as $spouse) {
        echo $spouse;
        echo '<option value="' . $spouse['id'] . '">' . $spouse['name'] . '</option>';
      } ?>



    </select>
    <label for=""> Available spouses</label>
  </div>

  <div class="form-field <?php if ($user->marital_status_id == 2 || $user->marital_status_id == 5) {
                            echo 'spouseVisible';
                          } else {
                            echo 'hidden';
                          }  ?>">

    <!-- <p><?php echo '' . $User->getSpouse($user) . ''; ?></p>  -->
    <label for=""> Partner</label>
  </div>

  <button onclick="submitUpdateForm(<?php echo '' . $user->id . ''; ?>)">Save</button>
  </form>
  </div>








</body>


<script src="../lamp/js/user-profile.js"></script>
<script src="../lamp/js/update.js"></script>

</html>