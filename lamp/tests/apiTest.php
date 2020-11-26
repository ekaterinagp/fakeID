<?php
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/api/users.php');

use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;
use GuzzleHttp\Handler\MockHandler;

class apiTest extends TestCase{
    private $client;

    public function setUp(): void
    {
        $this->PDO = $this->getConnection();
		$this->usersTable = new Database($this->PDO);
        $this->client = new Client([
            'base_uri' => 'http://localhost/fakeid/lamp/src/api/',
            'exceptions' => false
            ]);
    }
  
    public function tearDown(): void
    {
      $this->client = null;
        unset($this->usersTable);
		unset($this->PDO);
    }


    public function testGetUsers() {
		$id = 1;

		$result = getUsers($id);
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

    public function testPostStatusCode(){
        $response = $this->client->post('users', ['form_params' => ['name' => 'test', 'date_of_birth'=> '020202', 'address_id'=> 1, 'isEmployee'=> 'true', 'gender_value'=> '0002']]);
        $this->assertEquals(200, $response->getStatusCode());
    }

    protected function getConnection() {
		return new PDO('sqlite::memory:');
	}
  

}