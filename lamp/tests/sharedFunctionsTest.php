
<?php
require_once(__DIR__ . '/../pages/connection.php');
require_once(__DIR__ . '/../pages/sharedFunctions.php');
require_once(__DIR__ . '/../src/entity/User.php');

use PHPUnit\Framework\TestCase;

class sharedFunctionsTest extends TestCase
{



    function testIfCompany()
    {
        $User = new User();
        $User->isEmployee = true;
        $this->assertTrue($User->isEmployee);
    }
    function testCPR()
    {
        $User = new User();
        $User->birthday = '010190';
        $User->gender = '0001';
        $User->CPR = $User->birthday . $User->gender;
        $this->assertEquals('0101900001', $User->CPR);
    }
}
