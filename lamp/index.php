  <?php
  require_once(__DIR__ . '/../lamp/utilities/connection.php');
  require_once(__DIR__ . '/../lamp/src/entity/User.php');
  require_once(__DIR__ . '/../lamp/src/entity/UserEmployee.php');
  require_once(__DIR__ . '/../lamp/src/entity/UserNotEmployee.php');
  require_once(__DIR__ . '/../lamp/src/entity/sharedFunctions.php');
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
  <header>
    <h1>FakeID</h1>
    <div class="menu-right">
      <a href="/" class="active">Overview</a>
      <a href="create.php">Create</a>
    </div>
  </header>


  <body>
    <main>

      <h2></h2>
      <?php
      $getFunction = new SharedFunctions();

      ?>
      <div class="searchBar">
        <input type="text" value="Search for user">
        <button>Search</button>
      </div>
      <button class="filterBtn">Show filters</button>
    <form class="filtersContainer hide">
      <div class="filters">

      <div class="ageFilters filter">
      <h3>Age</h3>

        <div class="labelRadio">
          <input type="checkbox" id="child" value="child" name="age" >
          <label for="child">Child</label>
       
              <input type="checkbox" id="adult" value="adult" name="age" >
              <label for="adult">Adult</label>
            </div>
          </div>
          
          <div class="employeeStatusFilters filter">
        <h3>Employee Status</h3>
            <div class="labelRadio">
              <input type="checkbox" id="employee" value="12345678" name="CVR" >
              <label for="employee">Employee</label>
          
              <input type="checkbox" id="not_employee" value=null name="CVR" >
              <label for="not_employee">Not Employee</label>
            </div>
          </div>
          
          <div class="genderFilters filter">
        <h3>Gender</h3>
            <div class="labelRadio">
              <input type="checkbox" id="male" value="0001" name="gender_value">
              <label for="male">Male</label>
            </div>
            <div class="labelRadio">
              <input type="checkbox" id="female" value="0002" name="gender_value" >
              <label for="female">Female</label>
            </div>
          </div>
          <div class="maritalStatusFilters filter">
        <h3>Marital Status</h3>
        <div class="labelRadio">
          <input name="marital_status_id" type="checkbox" id="single" value="1" >
          <label for="single">Single</label>
        
          <input name="marital_status_id" type="checkbox" id="married" value="2" >
          <label for="married">Married</label>
     
          <input name="marital_status_id" type="checkbox" id="divorced" value="3" >
          <label for="divorced">Divorced</label>
      
          <input name="marital_status_id" type="checkbox" id="widow" value="4" >
          <label for="widow">Widow</label>
    
       
      
          <input name="marital_status_id" type="checkbox" id="deceased" value="7" >
          <label for="deceased">Deceased</label>
     
          <input name="marital_status_id" type="checkbox" id="registered_partnership" value="5" >
          <label for="registered_partnership">Registered Partnership</label>

          <input name="marital_status_id" type="checkbox" id="unknown" value="8" >
          <label for="unknown">Unknown</label>
          
     
          <input name="marital_status_id" type="checkbox" id="abolition_of_registered_partnership" value="6" >
          <label for="abolition_of_registered_partnership">Abolition Of Registered Partnership</label>
        </div>
      </div>

          </div>

          <div class="sorters">
        <h3>Sort By</h3>
              <div class="labelRadio">
                <input type="checkbox" id="age" value="age" name="sorter" >
                <label for="age">Age</label>
                <input type="checkbox" id="name" value="name" name="sorter" >
                <label for="name">Name</label>
              </div>
            
      </div>
</form>

      <div class="container">
        <?php

        foreach ($getFunction->getAllUsers() as $user) {
          $isEmployee;
          if($user['CVR']){
            $User = new UserEmployee($user['CVR'], $user['company_name']);
            $maritalStatus = '';
          }else{
            $User = new UserNotEmployee();
            $maritalStatus = $User->getMaritalStatus($user['marital_status_id']);
        
          }
          echo '<div class="singleUser" id="' . $user['id'] . '" ><a href="user.php?id=' . $user['id'] . '"><p class="userName">' . $user['name'] . '</p></a>
            <p>' . $User->calculateAge($user['date_of_birth']) . '</p>
            <p>' . $User->getGenderValue($user['gender_value']) . '</p>
            <p>' . $user['CVR'] . '</p>
            <p>' . $maritalStatus . '</p>
            <button class="loginBtn">Log in</button>
            </div>';
        }

        ?>
      </div>



    </main>
    <script src="../lamp/js/script.js"></script>
    <script src="../lamp/js/search.js"></script>
  </body>

  </html>