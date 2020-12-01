<?php
require_once(__DIR__ . '/User.php');

class UserNotEmployee extends User
{
    public $maritalStatus;
    public $spouse;
    public $children;

    public function isChild($birthday)
    {
        if ($this->calculateAge($birthday) < 18) {
            return true;
        } else {
            return false;
        }
    }

    function getMaritalStatus($status_id)
    {
        if ($status_id == 1) {
            return "single";
        }
        if ($status_id == 2) {
            return "married";
        }
        if ($status_id == 3) {
            return "divorced";
        }
        if ($status_id == 4) {
            return "widow";
        }
        if ($status_id == 5) {
            return "registeredPartnership";
        }
        if ($status_id == 6) {
            return "abolitionOfRegisteredPartnership";
        }
        if ($status_id == 7) {
            return "deceased";
        }
        if ($status_id == 8) {
            return "unknown";
        }
        return "undefined";
    }

    function setSpouse()
    {
    }
    function getSpouse()
    {
    }
    function setChild()
    {
    }
    function getChildren()
    {
    }
    function setMaritalStatus()
    {
    }
    // Single=1, Married=2,Divorced=3,Widow=4, RegisteredPartnership=5, AbolitionOfRegisteredPartnership=6, Deceased=7,Unknown=8

}
