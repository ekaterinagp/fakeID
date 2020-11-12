<?php

$host = '127.0.0.1';
$db = 'fakeid';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset"; // using 'mysql:connecting to the host; specifying dbname';

$username = 'root'; // default for xampp phpmyadmin mysql
$password = ''; // default for xampp phpmyadmin mysql
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try{
    $connection = new PDO($dsn, $username, $password, $options);      
} catch(PDOException $e){
    throw new PDOException($e->getMessage(), (int)$e->getCode()); // throw me errors
}