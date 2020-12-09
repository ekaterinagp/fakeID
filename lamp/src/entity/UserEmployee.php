<?php
require_once(__DIR__ . '/User.php');

class UserEmployee extends User
{

    public $CVR;
    public $companyName;


    function __construct(string $CVR, string $companyName)
    {
        $this->CVR = $CVR;
        $this->companyName = $companyName;
    }
}
