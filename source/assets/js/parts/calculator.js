'use strict'

class Calculator{
    
    constructor(){
        this.form = $("#calculator");
        this.type = 0;
        this.heating = 0;
        this.montage = 0;
        this.thermostat =0;
        this.area = 0;
        this.resultPopup = null;

        this.result = {
            min: 0,
            max: 0,
        };

        //Events

        this.form.bind("submit", this.sendFormHandler.bind(this));
    }

    sendFormHandler(event){
        event.preventDefault();
        this.getData();
        this.caclResutls();
        this.generatePopup();
        this.resultPopup.openPopup();
        dataLayer.push({"event":"popupCalculatorOpen"});
    }

    getData(){
        this.type = parseFloat(this.form.find("select[name=type]").val());
        this.heating = this.form.find("select[name=heating]").val();
        this.montage = parseInt(this.form.find("select[name=montage]").val());
        this.thermostat = parseInt(this.form.find("select[name=thermostat]").val());
        this.area = parseInt(this.form.find("input[name=s]").val());

        console.dir(this);
    }

    caclResutls(){
        if(this.heating == "plenka"){
            this.result.min = 115;
            this.result.max = 356
        }

        if(this.heating = "hotmat"){
            this.result.min = 664;
            this.result.max = 1087;
        }

        if(this.heating = "hotcabel"){
            this.result.min = 269;
            this.result.max = 380;
        }

        if(this.heating = "thincabel"){
            this.result.min = 279;
            this.result.max = 547;
        }

        this.result.min *= this.area;
        this.result.max *= this.area;

        this.result.min += this.montage;
        this.result.max += this.montage;

        this.result.min += this.thermostat;
        this.result.max += this.thermostat;

        this.result.min *= this.type;
        this.result.max *= this.type;

        console.log(this.result.min);
        console.log(this.result.max);
    }

    generatePopup(){
        this.resultPopup = new PopupMS(".popup-calcResult");
        $(this.resultPopup.popupSelector).find(".price .from").html(this.result.min);
        $(this.resultPopup.popupSelector).find(".price .to").html(this.result.max);
    }
};


let calculator = new Calculator();

