<?php


class User {
   
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
  

    public function formatBirthday($birthday){
        return implode('-', str_split($birthday, 2));
    }

    public function calculateAge($birthday){
        $orgDate =$this->formatBirthday($birthday);  
        $newDate = date("d-m-y", strtotime($orgDate));  
        $age = floor((time() - strtotime($newDate)) / 31556926);
        return $age;
    }

    public function isChild($birthday){
        if($this->calculateAge($birthday<18)){
            return true;
        }else{
            return false;
        }
    }

    function setAddress(){

    }
    function getAddress(){

    }
    function setSpouse(){

    }
    function getSpouse(){

    }
    function setChild(){

    }
    function getChildren(){

    }
    function setMaritalStatus(){

    }
    function getMaritalStatus(){

    }
}
