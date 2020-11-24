<?php

use PHPUnit\Framework\TestCase;

require_once(__DIR__ . '/../pages/connection.php');
require_once(__DIR__ . '/../src/entity/User.php');
require_once(__DIR__ . '/../pages/sharedFunctions.php');

class displaySingleUserTest extends TestCase
{

  public function setUp(): void
  {
    $this->User = new User();
  }

  public function tearDown(): void
  {
    $this->User = null;
  }



  public function testUserIsObject()
  {
    $this->sharedFunctions = new SharedFunctions();
    $user = $this->sharedFunctions->getUserByID(2);
    $this->assertIsObject($user);
  }

  /**
   * @dataProvider attributeProvier
   */
  public function testUserHasAttributes($attribute, $expected)
  {
    $this->sharedFunctions = new SharedFunctions();
    $user = $this->sharedFunctions->getUserByID(2);
    $this->assertObjectHasAttribute($attribute, $expected);
  }

  public function attributeProvier()
  {
    $this->SharedFunctions = new SharedFunctions();
    $user = $this->SharedFunctions->getUserByID(2);
    return [
      'user has key name' => ['name', $user],
      'user has key date of birth' =>  ["date_of_birth", $user],
      'user has key address_id' =>  ['address_id', $user],
      'user has key CPR' =>  ['CPR', $user],
      'user has key gender' =>  ['gender_value', $user],
      'user has key marital status' =>  ['marital_status_id', $user],
    ];
  }
}
