<?php


class User
{

    public $id;
    public $name;
    public $address;
    public $birthday;
    public $gender;
    public $CPR;
    public $company;
    public $CVR;
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

        if (strlen($oldDate['month']) > 1) {
            $month =  $oldDate['month'];
        } else {
            $month = "0" . $oldDate['month'];
        }

        if (strlen($oldDate['day']) > 1) {
            $day =  $oldDate['day'];
        } else {
            $day = "0" . $oldDate['day'];
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
        if ($this->calculateAge($birthday < 18)) {
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
            return "unmarried";
        }
    }

    function getGenderValue($gender_id)
    {
        if ($gender_id === '0002') {
            return 'female';
        } else {
            return 'male';
        }
    }

    function isEmployee()
    {
        if ($this->CVR) {
            return "Employee";
        } else {
            return null;
        }
    }
}
