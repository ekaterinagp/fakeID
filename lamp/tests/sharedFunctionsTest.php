
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

        $this->assertEquals($exptectdRespone, json_encode($response));
    }


    public function testCountAllAddress()
    {
        $addressesNumber = $this->SharedFunctions->countAllAddresses();
        $this->assertEquals(2, $addressesNumber);
    }

    public function testAllAvailableAddress()
    {
        $addresses = $this->SharedFunctions->getAllAvailableAddress();
        $this->assertIsArray($addresses);
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
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses(14);
        $this->assertIsArray($spousesList);
    }

    /**
     * @dataProvider spousesAttributeProvider
     */
    public function testPossibleSpousesHaveAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }

    public function spousesAttributeProvider()
    {
        $this->SharedFunctions = new SharedFunctions();
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses(14);

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
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses(14);
        $this->assertNull($spousesList[0]['company_name']);
    }

    public function testNoUserWithIdOnTheSpouseList()
    {
        $this->SharedFunctions = new SharedFunctions();
        $spousesList = $this->SharedFunctions->getAllAvailableSpouses(2);
        $this->assertNotContains(2,  $spousesList);
    }

    public function testGetChildrenByID()
    {
        $this->SharedFunctions = new SharedFunctions();
        $childrenList = $this->SharedFunctions->getChildrenByID(10);
        $this->assertIsArray($childrenList);
    }

    /**
     * @dataProvider childrenAttributeProvider
     */
    public function testChildrenListHaveAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }

    public function childrenAttributeProvider()
    {
        $this->SharedFunctions = new SharedFunctions();
        $childrenList = $this->SharedFunctions->getChildrenByID(10);

        return [
            'child has key id' => ['id', $childrenList[0]],
            'child has key name' => ['name', $childrenList[0]],
            'child has key date_of_birth' => ['date_of_birth', $childrenList[0]],
            'child has key address_id' =>  ['address_id', $childrenList[0]],
            'child has key CPR' =>  ['CPR', $childrenList[0]],
        ];
    }

    public function testNoChildren()
    {
        $this->SharedFunctions = new SharedFunctions();
        $childrenList = $this->SharedFunctions->getChildrenByID(5);
        $this->assertEquals(null, $childrenList);
    }

    public function testGetParentByID()
    {
        $this->SharedFunctions = new SharedFunctions();
        $parentList = $this->SharedFunctions->getParentByID(13);
        $this->assertIsArray($parentList);
    }


    /**
     * @dataProvider parentAttributeProvider
     */
    public function testParentsListHaveAttributes($attribute, $expected)
    {
        $this->assertArrayHasKey($attribute, $expected);
    }

    public function parentAttributeProvider()
    {
        $this->SharedFunctions = new SharedFunctions();
        $parentList = $this->SharedFunctions->getParentByID(1);

        return [
            'parent has key id' => ['id', $parentList[0]],
            'parent has key name' => ['name', $parentList[0]],
            'parent has key date_of_birth' => ['date_of_birth', $parentList[0]],
            'parent has key address_id' =>  ['address_id', $parentList[0]],
            'parent has key CPR' =>  ['CPR', $parentList[0]],
        ];
    }

    public function testNoParent()
    {
        $this->SharedFunctions = new SharedFunctions();
        $parentList = $this->SharedFunctions->getParentByID(11);
        $this->assertEquals(null, $parentList);
    }

    public function testGetUserAge()
    {
        $this->SharedFunctions = new SharedFunctions();
        $array = array();
        $array[0] = array(
            "id" => 6,
            "date_of_birth" => "260383"
        );
        $array[1] = array(
            "id" => 7,
            "date_of_birth" => "260385"
        );

        $age = $this->SharedFunctions->getUserAge(6, $array);
        $this->assertEquals(37, $age);
    }

    public function testGetAllPossibleChildrenAsArray()
    {
        $this->SharedFunctions = new SharedFunctions();
        $childrenList = $this->SharedFunctions->getAllAvailableChildren(2);
        $this->assertIsArray($childrenList);
    }

    public function testNoEmployeesOnChildrenList()
    {
        $this->SharedFunctions = new SharedFunctions();
        $childrenList = $this->SharedFunctions->getAllAvailableChildren(6);
        $this->assertNull($childrenList[0]['CVR']);
    }

    public function testNoUserIdOnChildrenList()
    {
        $this->SharedFunctions = new SharedFunctions();
        $childrenList = $this->SharedFunctions->getAllAvailableChildren(6);
        $this->assertNotContains(6, $childrenList);
    }
}
