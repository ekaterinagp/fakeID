<?php
namespace TDD;

use PHPUnit\Framework\TestCase;
use \stdClass;
require(__DIR__.'../../index.php');

class DisplayAllUsersTest extends TestCase {
    public function testGetUserCount () {
        $this->Database = new Database();
        $this->assertEquals(2, $this->Database->selectAllusers($this->Database->connectToDatabase()), 'should return 2 users' );
    }

    public function testUserReceivedFromDatabaseHasAttributes(){
       $users = getAllUsers();
        $this->assertNotEmpty($users);
        $this->assertArrayHasKey('name', $users[0]);
        $this->assertArrayHasKey('date_of_birth', $users[0]);
        $this->assertArrayHasKey('address_id', $users[0]);
        $this->assertArrayHasKey('CPR', $users[0]);
        $this->assertArrayHasKey('gender_value', $users[0]);
        $this->assertArrayHasKey('marital_status_id', $users[0]);
        $this->assertArrayHasKey('serialnumber', $users[0]);
    }
}



