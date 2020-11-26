<?php

use PHPUnit\Framework\TestCase;

// require_once(__DIR__ . '/../index.php');
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/entity/User.php');
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');



class displayAllUsersTest extends TestCase
{
    public function setUp(): void
    {
        $this->User = new User();
        $this->SharedFunctions = new SharedFunctions();
    }

    public function tearDown(): void
    {
        $this->User = null;
        $this->SharedFunctions = null;
    }
 /**
     * @dataProvider attributeUserProvier
     */
    public function testUserReceivedFromDatabaseHasAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }
    public function attributeUserProvier()
    {
        $this->SharedFunctions = new SharedFunctions();
        $users = $this->SharedFunctions->getAllUsers();
        return [
            'user has key name' => ['name', $users[0]],
            'user has key date of birth' =>  ["date_of_birth", $users[0]],
            'user has key address_id' =>  ['address_id', $users[0]],
            'user has key CPR' =>  ['CPR', $users[0]],
            'user has key gender' =>  ['gender_value', $users[0]],
            'user has key marital status' =>  ['marital_status_id', $users[0]],
        ];
    }
 
    // public function testGetUserCount()
    // {
    //     $this->Database = new Database();
    //     $this->assertEquals(9, $this->Database->selectAllusers($this->Database->connectToDatabase()), 'should return 9 users');
    // }


    
    








   
    
    /**
     * @dataProvider employeeProvider
     */
    public function testIfUserIsEmployee($input, $expected)
    {
        $test = $this->User->isEmployee($input);
        $this->assertSame($test, $expected);
    }
    public function employeeProvider()
    {
        return [
            'user is employee' => ['12345678', 'Employee'],
            'user is not employee' =>  [null, ''],
        ];
    }

    
   
}
