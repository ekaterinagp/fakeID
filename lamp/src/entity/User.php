<?php


class User
{

    public $id;
    public $name;
    public $address;
    public $birthday;
    public $gender;
    public $CPR;
    public $CVR;
    public $isEmployee;
    public $maritalStatus;
    public $spouse;
    public $children;
    public $serialnumber;

    public function formatBirthday($birthday)
    {

        return (implode('-', str_split($birthday, 2)));
    }

    public function calculateAge($birthday)
    {

        $oldDate = date_parse_from_format("dmY", $birthday);
        // echo json_encode($oldDate);

        if ($oldDate['year'] >= 20) {
            $year = "19" . $oldDate['year'];
        } else if ($oldDate['year'] < 10) {
            $year = "200" . $oldDate['year'];
        } else {
            $year = "20" . $oldDate['year'];
        }

        if (strlen($oldDate['month']) < 1) {
            $month = "0" . $oldDate['month'];
        } else {
            $month = $oldDate['month'];
        }

        if (strlen($oldDate['day']) < 1) {

            $day = "0" . $oldDate['day'];
        } else {
            $day =  $oldDate['day'];
        }

        $newDate = $year . "-" . $month . "-" . $day;

        $age = floor((time() - strtotime($newDate)) / 31556926);
        // echo $age;
        return $age;
    }

    public function getName()
    {
    }

    public function setName()
    {
    }



    public function isChild($birthday)
    {
        if ($this->calculateAge($birthday) < 18) {
            return true;
        } else {
            return false;
        }
    }

    function setAddress()
    {
    }
    function getAddress()
    {
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
    //add for all statuses
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
    // Single=1, Married=2,Divorced=3,Widow=4, RegisteredPartnership=5, AbolitionOfRegisteredPartnership=6, Deceased=7,Unknown=8

    function getGenderValue($gender_id)
    {
        if ($gender_id === '0002') {
            return 'female';
        } else {
            return 'male';
        }
    }



    function isEmployee($CVR)
    {
        if ($CVR !== null) {
            return "Employee";
        } else {

            return "";
        }
    }
}
