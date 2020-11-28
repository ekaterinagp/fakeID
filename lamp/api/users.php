<?php
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../utilities/connection.php');
$conn  = new Database();
$sharedFunctions = new SharedFunctions();
$request_method = $_SERVER["REQUEST_METHOD"];
header('Content-Type: application/json');

switch ($request_method) {
    case 'GET':
        // Retrive Products
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

    $sql = "SELECT * FROM user INNER JOIN address ON address.id = user.address_id";

    if ($id != null) {
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

function createUser()
{
    global $sharedFunctions;
    global $conn;
    $CPR = '';
    $CVR = null;
    $companyName = null;

    if (empty($_POST['name'])) {
        $sharedFunctions->sendErrorMessage('name is required', __LINE__);
    }

    if (empty($_POST['name'])) {
        $sharedFunctions->sendErrorMessage('name is required', __LINE__);
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


//###### UPDATE USER  ##########

function updateUser($id)
{
    global $conn;
    global $sharedFunctions;
    //trigger for if one employee status changes, it also changes for the other?
    //trigger for not be able to add spouse for employee
    if (!$id) {
        $sharedFunctions->sendErrorMessage('id is required', __LINE__);
    }
    // if (empty($_POST['name'])) {
    //     $sharedFunctions->sendErrorMessage('name is required', __LINE__);
    // }


    if (isset($_POST['spouse_id'])) {
        $sql = 'UPDATE user SET spouse_id=:spouse_id WHERE id=:id; UPDATE user SET spouse_id=:id WHERE id=:spouse_id;';
        $statement = $conn->connectToDatabase()->prepare($sql);
        $data = [
            ':id' => $id,
            ':spouse_id' => $_POST['spouse_id'],
        ];
    }

    if (isset($_POST['name'])) {
        $sql = 'UPDATE user SET name=:name WHERE id=:id';
        $statement = $conn->connectToDatabase()->prepare($sql);
        $data = [
            ':name' => $_POST['name'],
            ':id' => $id
        ];
    }

    if (isset($_POST['marital_status_id'])) {
        $sql = 'UPDATE user SET marital_status_id=:marital_status_id WHERE id=:id;';

        $data = [
            ':marital_status_id' => $_POST['marital_status_id'],
            ':id' => $id,
        ];
    }

    if (isset($_POST['address_id'])) {
        $sql = 'UPDATE user SET address_id=:address_id WHERE id=:id';
        $statement = $conn->connectToDatabase()->prepare($sql);
        $data = [
            ':address_id' => $_POST['address_id'],
            ':id' => $id
        ];
    }

    $statement = $conn->connectToDatabase()->prepare($sql);

    if ($statement->execute($data)) {
        $response = ['status' => 1, 'message' => 'user updated '];
        echo json_encode($response);
    }
}
