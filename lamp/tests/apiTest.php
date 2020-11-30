<?php
// require_once(__DIR__ . '/../utilities/connection.php');
// require_once(__DIR__ . '/../api/users.php');

// use PHPUnit\Framework\TestCase;

// class apiTest extends TestCase{

//     public function setUp(): void
//     {
//         $this->conn = new Database();
//         $this->conn->connectToDatabase();
//     }
  
//     public function tearDown(): void
//     {
//         $this->conn = null;
//     }

//     // public function testGetUsersById() {
// 	// 	$id = 1;

//     //     $result = getUsers($id);
//     //     $result = $result[0];
// 	// 	$this->assertEquals(
// 	// 		$id,
// 	// 		$result['id'],
// 	// 		'The id key/value of the result for id should be equal to the id.'
// 	// 	);
// 	// 	$this->assertEquals(
// 	// 		'Lisa Lalalaa',
// 	// 		$result['name'],
// 	// 		'The id key/value of the result for name should be equal to `Lisa`.'
// 	// 	);
//     // }
//     /**
//      * @dataProvider queryStringProvider
//      */
//     public function testQueryStringIsCorrect($expected, $searchString){
       
//         $this->assertEquals($expected, returnQueryString($searchString));
//     }
//     public function queryStringProvider()
//     {
//         return [
//             'string is ' => ['SELECT * FROM user WHERE name LIKE "%lisa%"', 'name=lisa'],
//             'string is ' => ['SELECT * FROM user WHERE gender = "0001"', 'gender=001'],
//             'string is ' => ['SELECT * FROM user WHERE CVR IS NOT NULL', 'employee_status=true'],
//             'string is ' => ['SELECT * FROM user WHERE marital_status_id = 1', 'marital_status=1'],
//         ];
//     }

//     public function testFilterUser(){
//         $sql = 'SELECT * FROM user WHERE name LIKE "%lisa%"';
//         $result = filterUsers($sql);
//         $this->assertEquals(
//             		1,
//             		$result[0]['id'],
//             		'The id key/value of the result for id should be equal to the id.'
//             	);
//     }
// }