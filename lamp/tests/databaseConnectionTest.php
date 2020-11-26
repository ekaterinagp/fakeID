<?php
require_once(__DIR__ . '/../utilities/connection.php');

use PHPUnit\Framework\TestCase;

class databaseConnectionTest extends TestCase
{
    // only instantiate pdo once for test clean-up/fixture load
    static private $pdo = null;

    // only instantiate PHPUnit_Extensions_Database_DB_IDatabaseConnection once per test
    private $conn = null;

    public function getConnection()
    {
        $this->conn = new Database();
        return $this->conn->connectToDatabase();
    }

    public function testConnectionObjectIsNotEmpty()
    {
        $this->assertNotNull($this->getConnection());
    }
}
