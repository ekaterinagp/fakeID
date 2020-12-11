<?php
require_once(__DIR__ . "/../../utilities/connection.php");
class SharedFunctions
{


  function sendErrorMessage($message, $line)
  {
    http_response_code(400);
    $response = ['status' => 0, 'message' => $message, 'line' => $line];
    return $response;
  }

  function getAllUsers()
  {
    $sql = "SELECT * FROM user";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $users = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      return $users;
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getUserByID($id)
  {
    $sql = "SELECT * FROM user WHERE id=$id";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $user = $statement->fetch(PDO::FETCH_ASSOC);
      $conn = null;
      $object = (object) $user;
      return json_decode(json_encode($object));
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getAllAvailableAddress()
  {

    $sql = "SELECT * FROM address";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $addresses = $statement->fetchAll(PDO::FETCH_ASSOC);
      return $addresses;
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getAddressByID($id)
  {
    $sql = "SELECT * FROM address WHERE id=$id";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $address = $statement->fetch(PDO::FETCH_ASSOC);
      $conn = null;
      $object = (object) $address;
      return json_decode(json_encode($object));
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd


  function countAllAddresses()
  {
    $sql = "SELECT count(*) FROM address";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $addresses = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      return $addresses[0]['count(*)'];
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getAddressList()
  {
    $sql = "SELECT * FROM address";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $addresses = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      return $addresses;
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getAllAvailableSpouses($id)
  {
    $sql = " SELECT * FROM `user` WHERE CVR IS NULL AND marital_status_id IN(3,8,4,6,7,1) AND id<> $id ";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $spouses = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      return $spouses;
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getSpouseByID($id)
  {
    $sql = " SELECT * FROM user WHERE spouse_id= $id";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $spouse = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;

      return $spouse;
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getChildrenByID($id)
  {
    $sql = "SELECT * FROM user INNER JOIN family_relation ON child_id=user.id WHERE family_relation.parent_id=$id GROUP BY user.id";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $children = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      if ($children) {
        return $children;
      } else {
        return NULL;
      }
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getParentByID($id)
  {
    $sql = "SELECT * FROM user INNER JOIN family_relation ON parent_id=user.id WHERE family_relation.child_id=$id GROUP BY user.id";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);
    if ($statement->execute()) {
      $parents = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      if ($parents) {
        return $parents;
      } else {
        return NULL;
      }
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd

  function getUserAge($id, $array)
  {
    foreach ($array as $item) {
      if ($item['id'] == $id) {
        $itemToCompare = $item;
        $userAge = (int)(substr($itemToCompare['date_of_birth'], -2));
        // echo json_encode($userAge);
        $year = "20" . $userAge;
        $age = (int)date("Y") - (int)$year;

        if ($userAge > 20) {
          $year = "19" . $userAge;
          $age = (int)date("Y") - (int)$year;
        }



        return $age;
      }
    }
    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd


  function getAllAvailableChildren($id)
  {
    $sql = " SELECT * FROM user LEFT JOIN family_relation ON  user.id=family_relation.child_id GROUP BY user.id HAVING COUNT(user.id) < 2";
    $conn  = new Database();
    $statement = $conn->connectToDatabase()->prepare($sql);


    if ($statement->execute()) {
      $children = $statement->fetchAll(PDO::FETCH_ASSOC);
      $conn = null;
      $functions = new SharedFunctions();
      $newFunction = new SharedFunctions();
      $ageToCompare = $newFunction->getUserAge($id, $children);
      $spouse = $functions->getSpouseByID($id)[0];

      $tempArray = [];
      $newArray = [];
      foreach ($children as $child) {

        if ($child['id'] !== $id && $child['CVR'] == null && $child['id'] !== $spouse['id'] && $child['parent_id'] !== $id) {
          $userAge = (int)(substr($child['date_of_birth'], -2));

          $year = "20" . $userAge;
          $child['age'] = (int)date("Y") - (int)$year;


          if ($userAge > 20) {
            $year = "19" . $userAge;
            $child['age'] = (int)date("Y") - (int)$year;
          }

          array_push($tempArray, $child);
        }
      }
      // echo json_encode($tempArray);
      foreach ($tempArray as $user) {
        if ($ageToCompare - $user['age'] > 18) {
          array_push($newArray, $user);
        }
      }

      return $newArray;
    }



    //@codeCoverageIgnoreStart
  }
  //@codeCoverageIgnoreEnd
}
