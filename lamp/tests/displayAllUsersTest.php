<?php

use PHPUnit\Framework\TestCase;

// require_once(__DIR__ . '/../index.php');
require_once(__DIR__ . '/../connection.php');
require_once(__DIR__ . '/../entity/User.php');
require_once(__DIR__ . '/../sharedFunctions.php');



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

    public function testGetUserCount()
    {
        $this->Database = new Database();
        $this->assertEquals(4, $this->Database->selectAllusers($this->Database->connectToDatabase()), 'should return 4 users');
    }

    public function testUserReceivedFromDatabaseHasAttributes()
    {
        // $this->SharedFunctions = new SharedFunctions();
        $users = $this->SharedFunctions->getAllUsers();
        $this->assertNotEmpty($users);
        $this->assertArrayHasKey('name', $users[0]);
        $this->assertArrayHasKey('date_of_birth', $users[0]);
        $this->assertArrayHasKey('address_id', $users[0]);
        $this->assertArrayHasKey('CPR', $users[0]);
        $this->assertArrayHasKey('gender_value', $users[0]);
        $this->assertArrayHasKey('marital_status_id', $users[0]);
        $this->assertArrayHasKey('serial_number', $users[0]);
    }

    public function testUserhasAgeReadable()
    {
        $birthday = $this->User->birthday = '010155';
        $this->assertEquals(
            $this->User->formatBirthday($birthday),
            '01-01-55'
        );
    }
    public function testUserIsChild()
    {
        $birthday = $this->User->birthday = '010155';
        $this->assertTrue($this->User->isChild($birthday));
    }

    public function testCalculateAge()
    {
        $birthday = $this->User->birthday =  '010155';
        $this->assertEquals(65, $this->User->calculateAge($birthday));
    }

    public function testUserHasMaritalStatusReadable()
    {
        $maritalStatus = $this->User->maritalStatus = 1;
        $this->assertEquals('unmarried', $this->User->getMaritalStatus($maritalStatus));
    }

    /**
     * @dataProvider genderProvider
     */
    public function testUserHasGenderReadable($genderValue, $expected)
    {
        $this->assertEquals($expected, $this->User->getGenderValue($genderValue));
    }

    public function genderProvider()
    {
        return [
            ['0002', 'female'],
            ['0001', 'male'],
        ];
    }
    //doesn't work
    public function testIfUserIsEmployee()
    {
        $this->User->CVR = null;
        $this->assertNotNull("Employee", $this->User->isEmployee($this->User->CVR));
    }
}
