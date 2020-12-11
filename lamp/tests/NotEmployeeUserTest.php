<?php

use PHPUnit\Framework\TestCase;

// require_once(__DIR__ . '/../index.php');
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/entity/UserNotEmployee.php');
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');



class NotEmployeeTest extends TestCase
{
    public function setUp(): void
    {
        $this->User = new UserNotEmployee();
        $this->SharedFunctions = new SharedFunctions();
    }

    public function tearDown(): void
    {
        $this->User = null;
        $this->SharedFunctions = null;
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
            'status is single' => [1, 'single'],
            'status is married' =>  [2, 'married'],
            'status is divorced' =>  [3, 'divorced'],
            'status is widow' =>  [4, 'widow'],
            'status is RegisteredPartnership' =>  [5, 'registeredPartnership'],
            'status is AbolitionOfRegisteredPartnership' =>  [6, 'abolitionOfRegisteredPartnership'],
            'status is Deceased' =>  [7, 'deceased'],
            'status is unknown' =>  [8, 'unknown'],
            'status is undefined' =>  [null, "undefined"],
        ];
    }

    public function testGetSpouse()
    {
        $test =  $this->SharedFunctions->getSpouseByID(6);
        $this->assertNotEmpty($test);
    }
}
