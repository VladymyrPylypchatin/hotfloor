<?php

class HyperSegment 
{
    

    private $productsType = [
        "hotcabel",
        "hotmat",
        "thincabel",
        "plenka",
    ];

    private $options = [
        "productType" => [
            "title" => [
                "hotcabel" => "Нагревательные кабеля",
                "hotmat" => "Нагревательные маты",
                "thincabel" => "Тонкие нагревательные кабеля",
                "plenka" => "Инфракрасная пленка"
            ],
            "header" => [
                "hotcabel" => "Нагревательные кабеля",
                "hotmat" => "Нагревательные маты",
                "thincabel" => "Тонкие нагревательные кабеля",
                "plenka" => "Инфракрасная пленка"
            ]
        ],
        "region" => [
            "title" => [
                "kharkov" => "в Харькове"
            ],
            "header" => [
                "kharkov" => "в Харькове"
            ],
        ]
    ];

    public function getRelevantText($keyword, $area, $default) {
        $paramValue = $_GET[$keyword];
        if($keyword == "region" && !isset($this->options[$keyword][$area][$paramValue])){
            if($this->getGeo() == "Kharkiv") return $this->options["region"][$area]["kharkov"];
        }
        return isset($this->options[$keyword][$area][$paramValue]) ? $this->options[$keyword][$area][$paramValue] : $default; 
    }

    public function setActiveCategory($category){
        $paramValue = $_GET['productType'];

        return $category == $paramValue ? "active" : "";
    }

    public function getGeo(){
        $ip = $_SERVER['HTTP_CLIENT_IP']; 
        if (!empty($_SERVER['HTTP_CLIENT_IP']))
        {
            $ip=$_SERVER['HTTP_CLIENT_IP'];
        }
        elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
        {
            $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        else
        {
            $ip=$_SERVER['REMOTE_ADDR'];
        }
        $query = @unserialize(file_get_contents('http://ip-api.com/php/'.$ip));
        return $query['city'];
    }

}