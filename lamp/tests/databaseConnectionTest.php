<?php
require_once(__DIR__ . '../../connection.php');

use PHPUnit\Framework\TestCase;
use TDD\Database;

class DatabaseConnectionTest extends TestCase{
   // only instantiate pdo once for test clean-up/fixture load
    static private $pdo = null;

   // only instantiate PHPUnit_Extensions_Database_DB_IDatabaseConnection once per test
    private $conn = null;
  
    public function getConnection()
    {
        $this->conn = new Database();
        return $this->conn->connectToDatabase();
    }

   

    public function testGetUserCount () {
        {
            $this->Database = new Database();
            $this->assertEquals(2, $this->Database->selectAllusers($this->getConnection()), 'should return 2 users' );
        }
    }
}