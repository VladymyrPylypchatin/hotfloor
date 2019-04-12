'use strict';

let brands = {
    ensto: { id: 1, name: "Ensto", country: "Финляндия" },
    fenix: { id: 2, name: "Fenix", country: "Чехия" },
    nexans: { id: 2, name: "Nexans", country: "Норвегия" },
    devi: { id: 2, name: "Devi", country: "Дания" },
    hemstedt: { id: 2, name: "Hemstedt", country: "Германия" },
    raychem: { id: 2, name: "Raychem", country: "Бельгия" },
    heatplus: { id: 2, name: "Heat Plus", country: "Южная Корея" },
    profitherm: { id: 2, name: "Profi Therm", country: "Польша" },
    interm: { id: 2, name: "In-Term", country: "Чехия" },
    plenka: { id: 2, name: "In Therm", country: "Корея" },
};

let types = {
    none:{
        categoryTittle: "Теплые электрические полы всех видов",
        description: "Существует 4 основных вида теплого электрического пола. Они отличаются способом и сложностью монтажа, типом напольного покрытия под который они предназначены, ценой и энергоэффективностью. Используйте фильтр, чтобы выбрать конкретный вид теплого пола.", 
    },
    hotmat: {
        id: 1, 
        name: "Нагревательный мат", 
        categoryTittle: "Нагревательный мат под плитку",
        montageType: "В слой плиточного клея",
        description: "Нагревательные маты монтируются на чистую стяжку, сверху плиточный клей и плитка. Используются при отсутствии возможности поднимать высоту пола.", 
        powerUnit: "Вт/м<sup>2</sup>", 
        priceUnit: "грн/м<sup>2</sup>"
    },
    hotcabel: {
        id: 2, 
        name: "Нагревательный кабель",
        montageType: "В стяжку",
        description: "Нагревательны кабель используется если есть возможность поднять высоту пола на 3 - 7 см цементно-песчаной стяжкой. Сверху выложить кабель и залить стяжкой 3-5 см, уложить плитку на плиточный клей.",  
        categoryTittle: "Нагревательный кабель в стяжку",
        powerUnit: "Вт/м", 
        priceUnit: "грн/м"
    },
    thincabel: {
        id: 3, 
        name: "Тонкий кабель",
        montageType: "В слой плиточного клея",
        description: "Тонкий нагревательный кабель под плитку монтируются на чистовую стяжку, сверху плиточный клей и укладывается плитка. Используются если нет возможности или желания поднимать высоту пола.",   
        categoryTittle: "Тонкий нгревательный кабель под плитку",
        powerUnit: "Вт/м", 
        priceUnit: "грн/м<sup>2</sup>"
    },
    plenka: {
        id: 4, 
        name: "Инфракрасная пленка",
        montageType: "Под легкие покрытия",
        description: "Инфракрасная пленка монтируется под сухие напольные покрытия, такие как: ламинат, линолеум, паркет. Экономичный и эффективный вид отопления помещения. Главные преимущества: быстрый монтаж и низкая цена.",    
        categoryTittle: "Инфракрасная пленка под ламинат",
        powerUnit: "Вт", 
        priceUnit: "грн/м"
    },
 };

class Product{
    constructor(id, brand, type, price, power, cabelDiametr, heatingArea, waranty, description, cabelType, name = brand.name) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.price = price;
        this.power = power;
        this.cabelDiametr = cabelDiametr;
        this.heatingArea = heatingArea;
        this.waranty = waranty; 
        this.description = description;
        this.cabelType = cabelType;
        this.name = name;
        this.card = null;
    }

    createCard(){
        this.card = $("<div></div>");
        this.card.addClass("col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 itemWrap");
        this.card.append(`
            <div class="item">
                <div class="wrapImg">
                    <img src="assets/img/products/${this.id}.webp" alt="">
                </div>
                <div class="discription">
                    <p class="itemTitle">${this.name}</p>
                    <p class="country">${this.brand.country}</p>
                    <p class="discr">${this.type.name}<br>${this.power} ${this.type.powerUnit}</p>
                    <p class="cena">от<span> ${this.price} </span>${this.type.priceUnit}</p>
                    <button data-product-id="${this.id}">ПОДРОБНЕЕ</button>
                </div>
            </div>
        `);

        this.card.find("button").bind("click", this.openPopup.bind(this));
        this.card.find("button").bind("click", this.analyticsEvent.bind(this));

        return this.card;
    }
   
    openPopup(){
        let popup = new ProductPopup(this);
        setTimeout(function(){
            popup.open();
        }, 200);
        // popup.open();


        // $('.popup').css({opacity:'1', 'pointer-events': 'auto'});
        // var DataText =  this.type.name + " " + this.brand.name + ". Получить консультацию";
        // $('.popup__titleForm').text(DataText);
    }

    analyticsEvent(){
        dataLayer.push({"event":"ProductMore", "info": this.type.name + " " + this.brand.name});      
    }
 }