<?php

use PHPUnit\Framework\TestCase;

// require_once(__DIR__ . '/../index.php');
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/entity/User.php');
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');


class GenericUserTest extends TestCase{
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
     * @dataProvider ageProvider
     */
    public function testCalculateAge($input, $expected)
    {
        $test = $this->User->calculateAge($input);
        $this->assertEquals($expected, $test);
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
    function testCPR()
    {
        $User = new User();
        $User->birthday = '010190';
        $User->gender = '0001';
        $User->CPR = $User->birthday . $User->gender;
        $this->assertEquals('0101900001', $User->CPR);
    }
    
    function testIfCompany()
    {
        $User = new User();
        $User->isEmployee = true;
        $this->assertTrue($User->isEmployee);
    }

    public function testSetAddress()
    {
        $this->SharedFunctions = new SharedFunctions();
        $addressByID = $this->SharedFunctions->getAddressByID(1);
        $this->User = new User();
        $address = $this->User->setAddress($addressByID);
        $this->assertEquals('Lygten, 17 København N 2200', $address);
    }
}