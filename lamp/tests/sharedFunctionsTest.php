
<?php
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../src/entity/User.php');

use PHPUnit\Framework\TestCase;

class sharedFunctionsTest extends TestCase
{
/**
 * 
 */

    function testErrorFunction(){
        $functions = new SharedFunctions();
        $response = $functions->sendErrorMessage('test message', __LINE__);
        $exptectdRespone = '{"status":0,"message":"test message","line":17}';
        $this->assertArrayHasKey('status', $response );
        $this->assertEquals($exptectdRespone, json_encode($response));
    }
    
    public function attributeProvier()
    {
        $this->SharedFunctions = new SharedFunctions();
        $response = $this->SharedFunctions->sendErrorMessage('test message', __LINE__);
        return [
            'response has key status' => ['status', $response],
            'response has key message' =>  ["message", $response],
            'response has key line' =>  ['line', $response],
        ];
    }
    
    public function testCountAllAddress()
     {
        $this->SharedFunctions = new SharedFunctions();
        $addressesNumber = $this->SharedFunctions->countAllAddresses();
        $this->assertEquals(2, $addressesNumber);
    }  
        
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
