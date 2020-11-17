<?php


if (getenv("CLEARDB_DATABASE_URL")) {
    //deployment settings
    //Get Heroku ClearDB connection information
    $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
    $host       = $cleardb_url["host"];
    $user       = $cleardb_url["user"];
    $password   = $cleardb_url["pass"];
    $db         = substr($cleardb_url["path"], 1);
} else {
    $host = '127.0.0.1';
    $db = 'fakeid';
    $user = 'root';
    $password = '';
}
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset"; // using 'mysql:connecting to the host; specifying dbname';

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $connection = new PDO($dsn, $user, $password, $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode()); // throw me errors
}
