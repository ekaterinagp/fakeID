<?php
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../utilities/connection.php');
$conn  = new Database();
$sharedFunctions = new SharedFunctions();

$request_method = $_SERVER["REQUEST_METHOD"];

// header('Access-Control-Allow-Origin: *');

// header('Access-Control-Allow-Methods: GET, POST');

// header("Access-Control-Allow-Headers: X-Requested-With");

header('Content-Type: application/json');

if (isset($_SERVER['QUERY_STRING']) && $request_method == 'GET') {
    $queryString =  $_SERVER['QUERY_STRING'];
}

switch ($request_method) {
    case 'GET':
        // Retrive users

        if(!empty($_GET['relation'])){
            $id = $_GET['id'];
            $relation = $_GET['relation'];
            getFamilyRelation($id, $relation);
        }
        else if(!empty($_GET['id'])){
            $id = $_GET['id'];
            getUsers($id);
        }
        else {
            getUsers();
        }
        break;

    case 'POST':
        if (!empty($_GET["id"])) {

            $id = intval($_GET["id"]);
            updateUser($id);
        } else {

            createUser();
        }
        break;


    default:
        // Invalid Request Method
        // header("HTTP/1.0 405 Method Not Allowed");
        break;
}


//###### GET ALL USERS OR SINGLE BASED ON ID  ##########

function getUsers($id = 0)
{
    // $users = new SharedFunctions();
    // $users = $users->getAllUsers();
    global $conn;

    $sql = "SELECT * FROM user";

    if ($id != null) {
        $sql = "SELECT * FROM user INNER JOIN address ON address.address_id= user.address_id WHERE user.id = $id";
    }
    $statement = $conn->connectToDatabase()->prepare($sql);
    $statement->execute();
    $users = $statement->fetchAll(PDO::FETCH_ASSOC);
    $conn = null;
    echo json_encode($users);
    return $users;
}

function getFamilyRelation($id, $relation){
    global $conn;
    $sql = '';
    if($relation === 'children'){
        $sql = "SELECT * FROM user 
        INNER JOIN family_relation ON child_id=user.id 
        WHERE family_relation.parent_id=$id 
        GROUP BY user.id";
    }else{
        $sql = "SELECT * FROM user 
        INNER JOIN family_relation ON parent_id=user.id 
        WHERE family_relation.child_id=$id 
        GROUP BY user.id";
    }
   

    $statement = $conn->connectToDatabase()->prepare($sql);
    $statement->execute();
    $users = $statement->fetchAll(PDO::FETCH_ASSOC);
    $conn = null;
    echo json_encode($users);
    return $users;
}

//###### CREATE NEW USER  ##########

function createUser()
{
    global $sharedFunctions;
    global $conn;
    $CPR = '';
    $CVR = null;
    $companyName = null;


    if (empty($_POST['name'])) {
        $errorMessage = $sharedFunctions->sendErrorMessage('name is required', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }

    if (empty($_POST['name'])) {
        $errorMessage = $sharedFunctions->sendErrorMessage('name is required', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }

    if (empty($_POST['address_id'])) {
        $errorMessage = $sharedFunctions->sendErrorMessage('address is required', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }
    if (empty($_POST['date_of_birth'])) {
        $errorMessage = $sharedFunctions->sendErrorMessage('date of birth is required', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }

    if (strlen($_POST['date_of_birth']) > 6) {
        $errorMessage = $sharedFunctions->sendErrorMessage('date of birth should be DDMMYY', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }
    if (strlen($_POST['date_of_birth']) < 6) {
        $errorMessage = $sharedFunctions->sendErrorMessage('date of birth should be DDMMYY', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }
    if (empty($_POST['isEmployee'])) {
        $errorMessage = $sharedFunctions->sendErrorMessage('Employee status is required', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }
    if (empty($_POST['gender_value'])) {
        $errorMessage = $sharedFunctions->sendErrorMessage('Gender is required', __LINE__);
        echo json_encode($errorMessage);
        exit;
    }
    if ($_POST['isEmployee'] == 'true') {
        $companyName = 'EE A/S';
        $CVR = '12345678';
    }
    $CPR = $_POST['date_of_birth'] . $_POST['gender_value'];


    $sql = "INSERT INTO user(name, address_id, date_of_birth,company_name, CVR, CPR, gender_value, marital_status_id )
         VALUES (:name,:address_id, :date_of_birth, :company_name, :CVR, :CPR, :gender_value, :marital_status_id )";



    $statement = $conn->connectToDatabase()->prepare($sql);

    $data = [
        ':name' => $_POST['name'],
        ':address_id' => $_POST['address_id'],
        ':date_of_birth' => $_POST['date_of_birth'],
        ':gender_value' => $_POST['gender_value'],
        ':company_name' => $companyName,
        ':CVR' => $CVR,
        ':CPR' => $CPR,
        ':marital_status_id' => 8
    ];




    if ($statement->execute($data)) {
        $response = ['status' => 1, 'message' => 'user created'];
        echo json_encode($response);
    }
}


//###### UPDATE USER  ##########
//add marital status
function updateSpouse($id, $spouseID, $statusID)
{
    global $conn;


    $sql = 'UPDATE user SET spouse_id=:id, marital_status_id=:marital_status_id WHERE id=:spouse_id';
    $statement = $conn->connectToDatabase()->prepare($sql);
    $data = [
        ':spouse_id' => $spouseID,
        ':id' => $id,
        ':marital_status_id' => $statusID
    ];
    if ($statement->execute($data)) {
        $response = ['status' => 1, 'message' => 'spouse user updated '];
        // echo json_encode($response);
    }
}

function changeSpousestatus($id, $status)
{
    $users = new SharedFunctions();
    $users = $users->getAllUsers();
    global $conn;

    foreach ($users as $user) {
        if ($user['spouse_id'] == $id) {
            $sql = 'UPDATE user SET spouse_id=NULL, marital_status_id=:marital_status_id WHERE spouse_id=:id';
            $statement = $conn->connectToDatabase()->prepare($sql);
            $data = [

                ':id' => $id,
                ':marital_status_id' => $status
            ];
            if ($statement->execute($data)) {
                $response = ['status' => 1, 'message' => 'spouse user updated '];
                // echo json_encode($response);
            }
        }
    }
}

function setChild($childId, $parentId)
{
    global $conn;
    $sql = 'INSERT INTO family_relation(parent_id, child_id) VALUES (:parentId, :childId)';
    $statement = $conn->connectToDatabase()->prepare($sql);
    $data = [

        ':parentId' => $parentId,
        ':childId' => $childId
    ];
    if ($statement->execute($data)) {
        $response = ['status' => 1, 'message' => 'relations set'];
    }
}

function updateUser($id)
{
    global $conn;
    global $sharedFunctions;

    $user = file_get_contents('php://input');
    $user = json_decode($user);

    if (!$id) {
        $sharedFunctions->sendErrorMessage('id is required', __LINE__);
    }

    $sql = 'UPDATE user SET address_id=:address_id, spouse_id=:spouse_id, marital_status_id=:marital_status_id, name=:name WHERE id=:id';

    $data = [
        ':marital_status_id' => $user->marital_status_id,
        ':spouse_id' => $user->spouse_id,
        ':name' => $user->name,
        ':address_id' => $user->address_id,
        ':id' => $user->id,

    ];
    $statement = $conn->connectToDatabase()->prepare($sql);

    if ($user->change_status) {
        changeSpousestatus($user->id, $user->marital_status_id);
    }

    if ($user->child_id) {
        setChild($user->child_id, $user->id);
    }

    updateSpouse($user->id, $user->spouse_id, $user->marital_status_id);




    if ($statement->execute($data)) {
        $response = ['status' => 1, 'message' => 'user updated '];
        echo json_encode($response);
    }
}
