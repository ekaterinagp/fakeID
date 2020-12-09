<?php


$pageTitle = 'singleuser';

require_once(__DIR__ . '/utilities/connection.php');
require_once(__DIR__ . '/src/entity/UserEmployee.php');
require_once(__DIR__ . '/src/entity/UserNotEmployee.php');
require_once(__DIR__ . '/src/entity/sharedFunctions.php');
require_once(__DIR__ . '/components/menu.php');

?>

<div class="userContainer">
  <div class="tabs">
    <button onclick="changeView('info')">Information</button>
    <button onclick="changeView('edit')">Edit Information</button>
  </div>
  <?php


  $id = $_GET['id'];
  $getFunction = new SharedFunctions();

  $user =  $getFunction->getUserById($id);
  $address = $getFunction->getAddressByID($user->address_id);
  // echo json_encode($user);
  if ($user->CVR) {
    $User = new UserEmployee($user->CVR, $user->company_name);
    // echo json_encode($User);
    $maritalStatus = ' ';
    $companyName = $user->company_name;
    $partnerName = null;
    $partnerId = null;
    $class = ' class="hidden"';
    $classHide = 'class=""';
    $title = "Employee";
  } else {
    $User = new UserNotEmployee();
    // echo json_encode($User);
    $classHide = 'class="hidden"';
    $maritalStatus = $User->getMaritalStatus($user->marital_status_id);
    $class = ' class=""';
    $companyName = '';
    $title = "User";
  }


  if ($user->marital_status_id == 2 || $user->marital_status_id == 5) {
    $partnerName = $getFunction->getSpouseByID($id)[0]['name'];
    $partnerId = $getFunction->getSpouseByID($id)[0]['id'];
  }

  $children = $getFunction->getChildrenByID($id);
  if ($children == NULL) {
    $classChildren = ' class="hidden"';
  } else {
    $classChildren = ' class=""';
  }


  echo '<h2>' . $title . '  ' . $user->name . ' </h2>';
  echo '<div class="user"><h3>Name</h3><p>' . $user->name . '</p>
  <h3>Date of birth</h3><p>' . $User->formatBirthday($user->date_of_birth) . '</p>
  <h3>Address</h3><p>' . $User->setAddress($address) . '</p>
  
  <h3>CPR</h3><p>' . $user->CPR . '</p>
  <div ' . $classHide . '>
  <h3>CVR</h3><p>' . $user->CVR . '</p>
  <h3>Company</h3><p>' . $companyName . '</p>
  </div>
  <h3>Gender</h3><p>' . $User->getGenderValue($user->gender_value) . '</p>
  <div ' . $class . '>
  <h3>Marital status</h3>
  <p> ' . $maritalStatus . '</p>
  <h3>Partner</h3>
  <a href ="user.php?id=' . $partnerId . '"><p>' . $partnerName . ' </p></a>
 </div>
 <div ' . $classChildren . '>
 <h3>Children </h3>';

  foreach ($children as $child) {

    echo '<a href="user.php?id=' . $child['id'] . '"><p>' . $child['name'] . ' </p> </a>';
  }

  echo '</div>
 </div>
 ';

  echo '<div class="editContainer">
 <form>
 <div class="form-field">
 <input type="text" name="name" value="' . $user->name . '">
 <label for=""> Name</label>
</div>';
  ?>

  <div class="form-field">
    <select name="address_id" id="addressSelect" required>

      <option value="1" <?php if ($user->address_id == 1) echo 'selected' ?>>Lygten 17</option>
      <option value="2" <?php if ($user->address_id == 2) echo 'selected' ?>>Lygten 37</option>
    </select>
    <label for=""> Address </label>
  </div>


  <div class=" <?php if ($companyName || $user->marital_status_id == 2 || $user->marital_status_id == 5) {
                  echo 'hidden';
                } else {
                  echo 'form-field';
                }  ?>">
    <select name="spouse_id" id="spouseSelect">
      <option value="" disabled selected>Select Spouse</option>
      <?php
      foreach ($getFunction->getAllAvailableSpouses($id) as $spouse) {
        echo json_encode($spouse);
        echo '<option value="' . $spouse['id'] . '">' . $spouse['name'] . '</option>';
      } ?>



    </select>
    <label for=""> Available spouses</label>
  </div>

  <div class=" <?php if ($companyName) {
                  echo 'hidden';
                } else {
                  echo 'form-field';
                } ?>">
    <select name="marital_status_id" id="statusSelect">

      <option value="1" <?php if ($user->marital_status_id == 1) echo 'selected' ?>>Single</option>
      <option value="2" <?php if ($user->marital_status_id == 2) echo 'selected' ?>>Married</option>
      <option value="5" <?php if ($user->marital_status_id == 5) echo 'selected' ?>>Registered Partnership</option>
      <option value="6" <?php if ($user->marital_status_id == 6) echo 'selected' ?>>Abolition Of Registered Partnership</option>
      <option value="3" <?php if ($user->marital_status_id == 3) echo 'selected' ?>>Divorced</option>
      <option value="4" <?php if ($user->marital_status_id == 4) echo 'selected' ?>>Widow</option>
      <option value="7" <?php if ($user->marital_status_id == 7) echo 'selected' ?>>Deceased</option>
      <option value="8" <?php if ($user->marital_status_id == 8) echo 'selected' ?>>Unknown</option>
    </select>
    <label for=""> Marital status </label>
  </div>


  <div class=" <?php if ($user->marital_status_id == 2 || $user->marital_status_id == 5) {
                  echo 'spouseVisible form-field';
                } else {
                  echo 'hidden';
                }  ?>">
    <input type="text" readonly name="spouse" value="<?php echo '' . $partnerName . ''; ?>">

    <label for="">Partner</label>
  </div>
  <input type="submit" onclick="getDataToUpdate( <?php echo '' . $user->id . ''; ?>)" value='Save' />
  </form>
</div>









</body>



<script src="./js/script.js"></script>
<script src="./js/user-profile.js"></script>
<script src="./js/update.js"></script>

</html>