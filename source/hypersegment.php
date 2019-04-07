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
        return isset($this->options[$keyword][$area][$paramValue]) ? $this->options[$keyword][$area][$paramValue] : $default; 
    }

    public function setActiveCategory($category){
        $paramValue = $_GET['productType'];

        return $category == $paramValue ? "active" : "";
    }

}