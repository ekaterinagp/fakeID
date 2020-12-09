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
    $sql = "SELECT * FROM user INNER JOIN user_family_relation ON user.id=user_family_relation.user_id INNER JOIN family_relation ON child_id=user.id WHERE family_relation.parent_id=$id GROUP BY user.id";
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
    $sql = "SELECT * FROM user INNER JOIN user_family_relation ON user.id=user_family_relation.user_id INNER JOIN family_relation ON parent_id=user.id WHERE family_relation.child_id=$id GROUP BY user.id";
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
}
