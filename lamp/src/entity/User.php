<?php


class User
{

    public $id;
    public $name;
    public $address;
    public $birthday;
    public $gender;
    public $CPR;


    public function formatBirthday($birthday)
    {

        return (implode('-', str_split($birthday, 2)));
    }


    public function calculateAge($birthday)
    {

        $oldDate = date_parse_from_format("dmY", $birthday);
        if ($oldDate['year'] >= 20) {
            $year = "19" . $oldDate['year'];
        } else if ($oldDate['year'] < 10) {
            $year = "200" . $oldDate['year'];
        } else {
            $year = "20" . $oldDate['year'];
        }

        $month = $oldDate['month'];
        if (strlen($oldDate['month']) == 1) {
            $month = "0" . $oldDate['month'];
        }

        $day =  $oldDate['day'];
        if (strlen($oldDate['day']) == 1) {
            $day = "0" . $oldDate['day'];
        }


        $newDate = $year . "-" . $month . "-" . $day;

        $age = floor((time() - strtotime($newDate)) / 31556926);
        // echo $age;
        return $age;
    }




    function setAddress($addressObject)
    {
        return "$addressObject->street_name, $addressObject->street_building_name $addressObject->district $addressObject->post_code";
    }


    //add for all statuses

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
