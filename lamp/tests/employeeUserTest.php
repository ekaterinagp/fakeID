<?php

use PHPUnit\Framework\TestCase;

require_once(__DIR__ . '/../utilities/connection.php');
require_once(__DIR__ . '/../src/entity/UserEmployee.php');
require_once(__DIR__ . '/../src/entity/sharedFunctions.php');

class EmployeeUserTest extends TestCase
{
    public function setUp(): void
    {
      $this->User = new UserEmployee('1234567', 'EE');
    }
  
    public function tearDown(): void
    {
      $this->User = null;
    }
    function testIfClassConstructed(){
        $this->assertIsObject($this->User);
    }

    function testCvrIsReturned(){
        $this->assertEquals('1234567', $this->User->CVR);
    }
    function testCompanyNameIsReturned(){
        $this->assertEquals('EE', $this->User->companyName);
    }
}