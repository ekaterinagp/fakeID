<?php

use PHPUnit\Framework\TestCase;

// require_once(__DIR__ . '/../index.php');
require_once(__DIR__ . '/../connection.php');
require_once(__DIR__ . '/../entity/User.php');
require_once(__DIR__ . '/../sharedFunctions.php');


class DisplayAllUsersTest extends TestCase
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
        $this->assertEquals(11, $this->Database->selectAllusers($this->Database->connectToDatabase()), 'should return 11 users');
    }
    public function testDBResponseNotEmpty(){
        $this->SharedFunctions = new SharedFunctions();
        $users = $this->SharedFunctions->getAllUsers();
        echo var_dump($users[0]);

        $this->assertNotEmpty($users);
    }
  /**
     * @dataProvider attributeProvier
     */
    public function testUserReceivedFromDatabaseHasAttributes($attribute, $expected)
    {
        $this->SharedFunctions = new SharedFunctions();
        $users = $this->SharedFunctions->getAllUsers();
        $this->assertArrayHasKey($attribute, $expected);
        // $this->assertArrayHasKey('name', $users[0]);
        // $this->assertArrayHasKey('date_of_birth', $users[0]);
        // $this->assertArrayHasKey('address_id', $users[0]);
        // $this->assertArrayHasKey('CPR', $users[0]);
        // $this->assertArrayHasKey('gender_value', $users[0]);
        // $this->assertArrayHasKey('marital_status_id', $users[0]);
        // $this->assertArrayHasKey('serial_number', $users[0]);
    }
    public function attributeProvier()
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
      /**
     * @dataProvider ageFormatProvider
     */
    public function testUserhasAgeReadable($input, $expected)
    {
        $test = $this->User->formatBirthday($input);
        $this->assertEquals($test, $expected);
    }
    public function ageFormatProvider()
    {
        return [
           'format is 01-01-05' => ['010105', '01-01-05'],
           'format is 01-01-55' => ['010155', '01-01-55'],
           'format is 01-12-88' => ['011288', '01-12-88'],
           'format is 31-01-65' => ['310165', '31-01-65'],
        ];
    }

    /**
     * @dataProvider isChildProvider
     */
    public function testUserIsChild($input, $expected)
    {
        $test = $this->User->isChild($input);
        $this->assertSame($expected, $test);
    }

    public function isChildProvider()
    {
        return [
           'User is a child' => ['010105', true],
           'User is not a child' => ['010155', false],
        ];
    }
    
     /**
     * @dataProvider ageProvider
     */
    public function testCalculateAge($input, $expected)
    {
        $test = $this->User->calculateAge($input);
        $this->assertEquals($expected, $test );
    }
    public function ageProvider()
    {
        return [
           'age is 65' => ['010155', '65'],
           'age is 16' => ['010104', '16'],
           'age is 35' => ['010185', '35'],
           'age is 5' => ['010115', '5']
        ];
    }
     /**
     * @dataProvider maritalStatusProvider
     */

    public function testUserHasMaritalStatusReadable($input, $output)
    {
        $test =  $this->User->getMaritalStatus($input);
        $this->assertEquals($output, $test);
    }
    public function maritalStatusProvider()
    {
        return [
           'status is unmarried' => [1, 'single'],
           'status is married' =>  [2, 'married'],
           'status is divorced' =>  [3, 'divorced'],
           'status is widow' =>  [4, 'widow'],
           'status is RegisteredPartnership' =>  [5, 'registeredPartnership'],
           'status is AbolitionOfRegisteredPartnership' =>  [6, 'abolitionOfRegisteredPartnership'],
           'status is Deceased' =>  [7, 'deceased'],
           'status is unknown' =>  [8, 'unknown'],
        ];
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
           'gender is female' => ['0002', 'female'],
           'gender is male' =>  ['0001', 'male'],
        ];
    }
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
