<?php
require_once(__DIR__ . '/../pages/sharedFunctions.php');
$errorFunction = new SharedFunctions();


$CPR;
$CVR;
$companyName;

if ($_POST) {
    if (empty($_POST['name'])) {
        $errorFunction->sendErrorMessage('name is required', __LINE__);
    }

    if (strlen($_POST['name']) < 2) {
        $errorFunction->sendErrorMessage('name is too short', __LINE__);
    }

    if (empty($_POST['address_id'])) {
        $errorFunction->sendErrorMessage('address is required', __LINE__);
    }
    if (empty($_POST['date_of_birth'])) {
        $errorFunction->sendErrorMessage('date_of_birth is required', __LINE__);
    }
    if (empty($_POST['isEmployee'])) {
        $errorFunction->sendErrorMessage('Employee status is required', __LINE__);
    }
    if (empty($_POST['gender_value'])) {
        $errorFunction->sendErrorMessage('Gender is required', __LINE__);
    }
    if ($_POST['isEmployee'] == 'true') {
        $companyName = 'EE A/S';
        $CVR = '12345678';
    }
    $CPR = $_POST['date_of_birth'] . $_POST['gender_value'];


    require_once(__DIR__ . '/../connection.php');

    $sql = "INSERT INTO user(name, address_id, date_of_birth,company_name, CVR, CPR, gender_value, marital_status_id )
     VALUES (:name,:address_id, :date_of_birth, :company_name, :CVR, :CPR, :gender_value, 8 )";

    $conn  = new Database();
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
        // echo '{​​"status":1, "message":"New user created"}​​';
        header('Location: http://localhost/fakeid/lamp/');
    }
}
