<?php
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../utilities/connection.php');
$conn  = new Database();
$sharedFunctions = new SharedFunctions();

$request_method=$_SERVER["REQUEST_METHOD"];


header('Content-Type: application/json');

if (isset($_SERVER['QUERY_STRING']) && $request_method == 'GET') {
    $queryString =  $_SERVER['QUERY_STRING'];
}

switch($request_method){
    case 'GET':
        // Retrive Products
        if(!empty($_GET["id"])){
            $id=intval($_GET["id"]);
            getUsers($id);
        }else if($queryString){
            $query = returnQueryString($queryString );
            filterUsers($query);
        }else{
            getUsers();
        }
        break;
     
    case 'POST':
        createUser();
        break;
    case 'PUT' || 'PATCH':
        updateUser();
        break;
    default:
    // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}


//###### GET ALL USERS OR SINGLE BASED ON ID  ##########

function getUsers($id=0){
    $users = new SharedFunctions();
    $users = $users->getAllUsers();
    global $conn;

    $sql = "SELECT * FROM user INNER JOIN address ON address.id = user.address_id";

    if($id != null){
        $sql = "SELECT * FROM user INNER JOIN address ON address.id = user.address_id WHERE user.id = $id";
    }
    $statement = $conn->connectToDatabase()->prepare($sql);
    $statement->execute();
    $users = $statement->fetchAll(PDO::FETCH_ASSOC);
    $conn = null;
    echo json_encode($users);
    return $users;
}


//###### CREATE NEW USER  ##########

function createUser(){
    global $sharedFunctions;
    global $conn;
    $CPR = '';
    $CVR = null;
    $companyName = null;
    
        if (empty($_POST['name'])) {
            $sharedFunctions->sendErrorMessage('name is required', __LINE__);
        }
    
        if (strlen($_POST['name']) < 2) {
            $sharedFunctions->sendErrorMessage('name is too short', __LINE__);
        }
    
        if (empty($_POST['address_id'])) {
            $sharedFunctions->sendErrorMessage('address is required', __LINE__);
        }
        if (empty($_POST['date_of_birth'])) {
            $sharedFunctions->sendErrorMessage('date of birth is required', __LINE__);
        }
    
        if (strlen($_POST['date_of_birth']) > 6) {
            $sharedFunctions->sendErrorMessage('date of birth should be DDMMYY', __LINE__);
        }
        if (strlen($_POST['date_of_birth']) < 6) {
            $sharedFunctions->sendErrorMessage('date of birth should be DDMMYY', __LINE__);
        }
        if (empty($_POST['isEmployee'])) {
            $sharedFunctions->sendErrorMessage('Employee status is required', __LINE__);
        }
        if (empty($_POST['gender_value'])) {
            $sharedFunctions->sendErrorMessage('Gender is required', __LINE__);
        }
        if ($_POST['isEmployee'] == 'true') {
            $companyName = 'EE A/S';
            $CVR = '12345678';
        }
        $CPR = $_POST['date_of_birth'] . $_POST['gender_value'];
    
    
        $sql = "INSERT INTO user(name, address_id, date_of_birth,company_name, CVR, CPR, gender_value )
         VALUES (:name,:address_id, :date_of_birth, :company_name, :CVR, :CPR, :gender_value )";
    
        $statement = $conn->connectToDatabase()->prepare($sql);
    
        $data = [
            ':name' => $_POST['name'],
            ':address_id' => $_POST['address_id'],
            ':date_of_birth' => $_POST['date_of_birth'],
            ':gender_value' => $_POST['gender_value'],
            ':company_name' => $companyName,
            ':CVR' => $CVR,
            ':CPR' => $CPR,
        ];
    
    
        if ($statement->execute($data)) {
            $response = ['status' => 1, 'message' => 'user created'];
            echo json_encode($response);
        }
    
}


//###### FIND USER  ##########

function returnQueryString($searchString){
    parse_str($searchString, $paramsArray); 
    json_encode($paramsArray);

    $whereArr = array();
    if(array_key_exists( 'name', $paramsArray)) $whereArr[] = "name LIKE '%{$paramsArray['name']}%'";
    if(array_key_exists('gender', $paramsArray)) $whereArr[] = "gender_value = {$paramsArray['gender']}";
    if(array_key_exists('marital-status', $paramsArray)) $whereArr[] = "marital_status_id = {$paramsArray['marital-status']}"; 
    if(array_key_exists('employee-status', $paramsArray)){
        $paramsArray['employee-status'] == 'true' ? $whereArr[] = "CVR IS NOT NULL" : $whereArr[] = "CVR IS NULL" ;
    } 
    // if($paramsArray['age'] != "") $whereArr[] = "date_of_birth = {$field2}"; <--- FIgure out later!!!
    $whereStr = implode(" AND ", $whereArr);

    $query = "SELECT * FROM user WHERE {$whereStr}";
    return $query;
}

function filterUsers($query){
    global $conn;
    $statement = $conn->connectToDatabase()->prepare($query);
    if ($statement->execute()) {
        $response = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($response);
    }
}

//###### UPDATE USER  ##########

function updateUser(){
    global $conn;
}