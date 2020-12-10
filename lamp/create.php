<?php

$pageTitle = 'create';

require_once(__DIR__ . '/../lamp/utilities/connection.php');
require_once(__DIR__ . '/../lamp/src/entity/User.php');
require_once(__DIR__ . '/../lamp/src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../lamp/components/menu.php');
?>

<main>

  <h2></h2>
  <?php


  $getFunction = new SharedFunctions();



  ?>
  <h2>Create User</h2>
  <form method="POST" class="createForm">
    <div class="form-field">
      <input type="text" name="name" placeholder="Name">
      <label for=""> Name</label>
    </div>
    <div class="form-field">
      <select name="address_id" id="addressSelect" placeholder="Select Address" required>
        <option value="" disabled selected>Select Address</option>
        <option value="1">Lygten 17</option>
        <option value="2">Lygten 37</option>
      </select>
      <label for=""> Address </label>
    </div>
    <div class="form-field">
      <input type="date" name="date_of_birth" type="datetime-local" placeholder="Date of Birth">
      <label for=""> Date of Birth</label>
    </div>
    <div class="labelRadio">
      <input type="radio" id="female" name="gender_value" value='0002'>
      <label for="female"> Female </label>
      <input id="male" type="radio" name="gender_value" value='0001'>
      <label for="male"> Male </label>
    </div>
    <div class="labelRadio">
      <input type="radio" id="employee" name="isEmployee" value='true'>
      <label for="employee"> Is Employee </label>
      <input type="radio" id="not" name="isEmployee" value='false'>
      <label for="not"> Not Employee </label>

    </div>
    <input type="submit" onclick="submitCreateForm(event)">
  </form>


</main>
<script src="./js/script.js"></script>
<script src="./js/create.js"></script>
</body>

</html>