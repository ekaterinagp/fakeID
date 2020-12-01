  <?php
  $pageTitle = "home";

  require_once(__DIR__ . '/utilities/connection.php');
  require_once(__DIR__ . '/src/entity/User.php');
  require_once(__DIR__ . '/src/entity/UserEmployee.php');
  require_once(__DIR__ . '/src/entity/UserNotEmployee.php');
  require_once(__DIR__ . '/src/entity/sharedFunctions.php');
  require_once(__DIR__ . '/components/menu.php');

  ?>
  
    <main>

      <h2></h2>
      <?php
      $getFunction = new SharedFunctions();

      ?>
      <div class="searchBar">
        <div>
          <input class="searchInput" type="text" placeholder="Search for user">
          <button class="searchBtn" onclick="searhForUsers()">Search</button>

        </div>
          <button class="clearSearchBtn" onclick="clearSearch()">Clear Search</button>
        </div>

      <button class="filterBtn">Show filters</button>
    <div class="filtersContainer hide">
      <form class="filters">

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

</form>

    <form class="sorters">
        <h3>Sort By</h3>
              <div class="labelRadio">
                <input type="checkbox" id="sortAge" value="sortAge" name="sorter" >
                <label for="sortAge">Age</label>
                <input type="checkbox" id="sortName" value="sortName" name="sorter" >
                <label for="sortName">Name</label>
              </div>
            
    </form>

  <button onclick="clearAllFilters()">Clear filters</button>
</div>

      <div class="container">
     
      </div>



    </main>
    <script src="../lamp/js/script.js"></script>
    <script src="../lamp/js/search.js"></script>
  </body>

  </html>