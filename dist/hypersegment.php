<?php

class HyperSegment 
{
    

    private $productsType = [
        "hotcabel",
        "hotmat",
        "thincabel",
        "plenka"
    ];

    private $options = [
        "productType" => [
            "title" => [
                "hotcabel" => "Нагревательный кабель",
                "hotmat" => "Нагревательный мат",
                "thincabel" => "Тонкий нагревательный кабель",
                "plenka" => "Инфракрасная пленка"
            ]
        ],
        "region" => [
            "title" => [
                "kharkov" => "в Харькове"
            ]
        ]
    ];

    public function getRelevantText($keyword, $area, $default) {
        $paramValue = $_GET[$keyword];
        return isset($this->options[$keyword][$area][$paramValue]) ? $this->options[$keyword][$area][$paramValue] : $default; 
    }

}