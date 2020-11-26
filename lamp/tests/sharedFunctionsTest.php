
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

    function testErrorFunction()
    {
        $response = $this->SharedFunctions->sendErrorMessage('test message', __LINE__);
        $exptectdRespone = '{"status":0,"message":"test message","line":' . (__LINE__ - 1) . '}';
        $this->assertArrayHasKey('status', $response);
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
     * @dataProvider addressObjectAttributeProvier
     */
    public function testAddressHasAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }

    public function addressObjectAttributeProvier()
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

    public function testGetAddressByID()
    {
        $addressByID = $this->SharedFunctions->getAddressByID(1);
        $this->assertEquals(1, $addressByID->id);
    }

    public function testGetListOfAddressesAsArray()
    {
        $this->SharedFunctions = new SharedFunctions();
        $addressesList = $this->SharedFunctions->getAddressList();
        $this->assertIsArray($addressesList);
    }

    /**
     * @dataProvider addressAttributeProvier
     */

    public function testGetListAddresses($attribute, $expected)
    {
        $this->assertContains($attribute, $expected);
    }

    public function addressAttributeProvier()
    {
        $this->SharedFunctions = new SharedFunctions();
        $addresses = $this->SharedFunctions->getAddressList();

        return [
            'first address is Lygten, 17' => ['17', $addresses[0]],
            'second address is Lygten, 37' => ['37', $addresses[1]],

        ];
    }

    public function testGetAllPossibleSpousesAsArray()
    {
        $this->SharedFunctions = new SharedFunctions();
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses();
        $this->assertIsArray($spousesList);
    }

    /**
     * @dataProvider spousesAttributeProvier
     */
    public function testPossibleSpousesHaveAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }

    public function spousesAttributeProvier()
    {
        $this->SharedFunctions = new SharedFunctions();
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses();
        return [
            'spouse has key id' => ['id', $spousesList[0]],
            'spouse has key name' => ['name', $spousesList[0]],
            'spouse has key date_of_birth' => ['date_of_birth', $spousesList[0]],
            'spouse has key address_id' =>  ['address_id', $spousesList[0]],
            'spouse has key CPR' =>  ['CPR', $spousesList[0]],
        ];
    }

    public function testNoEmployeesInSpouseList()
    {
        $this->SharedFunctions = new SharedFunctions();
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses();
        $this->assertNull($spousesList[0]['company_name']);
    }
}
