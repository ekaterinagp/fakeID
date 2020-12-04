<?php
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../utilities/connection.php');
$conn  = new Database();
$sharedFunctions = new SharedFunctions();

$request_method = $_SERVER["REQUEST_METHOD"];


header('Content-Type: application/json');

if (isset($_SERVER['QUERY_STRING']) && $request_method == 'GET') {
    $queryString =  $_SERVER['QUERY_STRING'];
}

switch ($request_method) {
    case 'GET':
        // Retrive users
        if (!empty($_GET["id"])) {
            $id = intval($_GET["id"]);
            getUsers($id);
        } else {
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
    $users = new SharedFunctions();
    $users = $users->getAllUsers();
    global $conn;

    $sql = "SELECT * FROM user";

    if ($id != null) {
        $sql = "SELECT * FROM user WHERE user.id = $id";
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
        echo json_encode($response);
    }
}

function updateUser($id)
{
    global $conn;
    global $sharedFunctions;

    $user = file_get_contents('php://input');
    // echo $user;


    // echo json_decode($user);
    $user = json_decode($user);
    // echo json_encode($user->name);
    // echo gettype($user) . "\n";




    if (!$id) {
        $sharedFunctions->sendErrorMessage('id is required', __LINE__);
    }

    //check if marital status is being updated and if should include spouse
    // if(isset($_POST['marital_status_id']) and intval($_POST['marital_status_id']) !== 1 and intval($_POST['marital_status_id']) !== 8 ){
    //     $sharedFunctions->sendErrorMessage('for this marital status a spouse is required', __LINE__);
    // }




    $sql = 'UPDATE user SET address_id=:address_id, spouse_id=:spouse_id, marital_status_id=:marital_status_id, name=:name WHERE id=:id';



    $data = [
        ':marital_status_id' => $user->marital_status_id,
        ':spouse_id' => $user->spouse_id,
        ':name' => $user->name,
        ':address_id' => $user->address_id,
        ':id' => $user->id,

    ];
    $statement = $conn->connectToDatabase()->prepare($sql);


    if (!empty($user->spouse_id)) {
        updateSpouse($user->id, $user->spouse_id, $user->marital_status_id);
    }

    if ($statement->execute($data)) {
        $response = ['status' => 1, 'message' => 'user updated '];
        echo json_encode($response);
    }
}
