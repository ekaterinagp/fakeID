<?php
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../api/users.php');

use PHPUnit\Framework\TestCase;

class apiTest extends TestCase{
    private $client;

    public function setUp(): void
    {
        $this->PDO = $this->getConnection();
		$this->usersTable = new Database($this->PDO);
    }
  
    public function tearDown(): void
    {
        unset($this->usersTable);
		unset($this->PDO);
    }

    public function testGetUsersById() {
		$id = 1;

        $result = getUsers($id);
        $result = $result[0];
		$this->assertEquals(
			$id,
			$result['id'],
			'The id key/value of the result for id should be equal to the id.'
		);
		$this->assertEquals(
			'Lisa Lalalaa',
			$result['name'],
			'The id key/value of the result for name should be equal to `Lisa`.'
		);
    }
    
    protected function getConnection() {
		return new PDO('sqlite::memory:');
	}
  

}