
<?php
require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');
require_once(__DIR__ . '/../src/entity/User.php');

use PHPUnit\Framework\TestCase;

class sharedFunctionsTest extends TestCase
{
    public function setUp(): void
    {
        $this->SharedFunctions = new SharedFunctions();
    }

    public function tearDown(): void
    {
        $this->SharedFunctions = null;
    }
    public function testDBResponseNotEmpty()
    {
        $users = $this->SharedFunctions->getAllUsers();
        $this->assertNotEmpty($users);
    }

    function testErrorFunction(){
        $response = $this->SharedFunctions->sendErrorMessage('test message', __LINE__);
        $exptectdRespone = '{"status":0,"message":"test message","line":27}';
        $this->assertArrayHasKey('status', $response );
        $this->assertEquals($exptectdRespone, json_encode($response));
    }
    

    public function testCountAllAddress()
     {
        $addressesNumber = $this->SharedFunctions->countAllAddresses();
        $this->assertEquals(2, $addressesNumber);
    }  
         

    public function testGetAddressByIDIsObject()
    {
        $addressByID = $this->SharedFunctions->getAddressByID(1);
        $this->assertIsObject($addressByID);
    }
/**
     * @dataProvider addressAttributeProvier
     */
    public function testAddressHasAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }

    public function addressAttributeProvier()
    {
        $this->SharedFunctions = new SharedFunctions();
        $address = $this->SharedFunctions->getAllAvailableAddress();
        return [
            'address has key id' => ['id', $address[0]],
            'address has key street_name' => ['street_name', $address[0]],
            'address has key street_building_name' => ['street_building_name', $address[0]],
            'address has key district' =>  ['district', $address[0]],
            'address has key post_code' =>  ['post_code', $address[0]],

        ];
    }
    //Add data provider?
    public function testGetAddressByID()
    {
        $addressByID = $this->SharedFunctions->getAddressByID(1);
        $this->assertEquals(1, $addressByID->id);
    } 

   
}
