'use strict'

class ProductList{
    
    

    constructor(){
        //Lists 
        this.list = [
            new Product(
                8, brands.interm, 
                types.hotmat, 664, 170, 
                3.0, "0.5 - 1.0", 15, 
                "Двухжильный греющий мат IN-TERM 170-0,8 m2 (Fenix, Чехия) – тонкий кабель со сплошным алюминиевым защитным экраном, закрепленный на стекловолоконной армировочной сетке. Маты IN-TERM 170-0,8 m2 (Fenix, Чехия) с мощностю 200 Вт/м2 разработаны и производится компанией Феникс (Fenix) в Чешской Республике для систем теплого пола и для систем отопления, монтируемого сразу на стяжку - непосредственно под плитку в клей (высота клея 5-8 мм).",
                "Двужильный"
                ), 
            new Product(
                1, brands.ensto, types.hotcabel, 78, 20,
                8, "0.9 - 1,25", 15, 
                "TASSU2 нагревательный кабель для системы Теплый пол используется для установки в бетонную стяжку пола. Монтаж возможно установить в сухих и влажных помещениях. Это кабель экранированный двухжильный в ПВХ изоляции с концевой муфтой. Он не прихотливый в эксплуатации, обладает удельной мощностью 20 Вт/м.",
                "Двужильный"
                ),
            new Product(
                12, brands.fenix, types.hotmat, 943, 160,
                3, "1.6", 15, 
                "Двухжильный нагревательный мат Fenix LDTS 160 Вт/м2 предназначен для устройства системы теплого пола под плитку. Диаметр нагревательной жилы составляет 3 мм. Данный кабель закреплен на сетке, шириной 50 см и идеально подходит для укладки в слой плиточного клея. Удельная мощность 160 Вт/м2. Класс защиты IP67.",
                "Двужильный"         
                ), 
            new Product(
                11, brands.nexans, types.hotmat, 1162, 150, 4.5, "1.0", 15,
                "Нагревательные маты Nexans, как и вся продукция этого бренда, заслуживает отдельного внимания. Nexans первые запатентовали системы электрических теплых полов и уже более 100 лет успешно производят и реализуют свою продукцию. Это одна из не многих фирм производителей предоставляющих полную гарантию, которая включает в себя покрытие пола и стяжку. Жилы нагревательного кабеля покрыты высокотемпературной тефлоновой оплеткой, исключающее их от замыкания. Для бронирования и экранирования используется цельная алюминиевая трубка с гидроизоляционным покрытием",
                "Двужильный"
                
                ), 
            new Product(
                5, brands.interm, types.hotcabel, 49, 20,
                4, "0.8 - 1.1", 20,
                "Универсальный кабель, подойдет как для укладки в плиточный клей так и в бетонную стяжку. Хорошо подходит для монтажа в холодных или влажных помещениях: ванная, балкон, лоджия. Страна производитель: Чехия. Гарантия: 20 лет.",
                "Двужильный" 
                ),
            new Product(
                2, brands.hemstedt, types.hotcabel, 61, 17,
                8, "1.1", 20,
                "Безмуфтовое соединение нагревательного кабеля (даже на матах маленькой площади), что делает теплый пол исключительно долговечным и безопасным в использовании. Фторполимерных изоляция кабеля, температура плавления которого составляет 205с, так же гарантия безопасности и эффективности системы отопления. Дополнительный сплошной алюминиевый экран, обеспечивающий стабильное сопротивление всей системы.",
                "Двужильный"
                ),
            new Product(
                9, brands.hemstedt, types.hotmat, 1087, 150,
                4.5, "1", 20,
                "Немецкий нагревательный мат Hemstedt, доминирует по характеристикам. Компания Хемштед специализируется на греющих матах и кабелях с 1974 года. Безмуфтовое соединение исключает выход из строя. Гарантия 20 лет.",
                "Двужильный"
                ), 
            new Product(
                17, brands.raychem, types.thincabel, 547, 10, 3, "1.6", 20, 
                "Тонкий кабель Raychem CeraPro Тонкий кабель под плитку или ламинат Raychem CeraPro, изготовленную в 8-ми типоразмеров. Это ультратонкий (всего 3 мм диаметр!), прочный кабель, позволяющий производить быстрый монтаж на различные типы выровненных оснований.",
                "Двужильный",
                "Raychem cera",),
            new Product(
                3, brands.devi, types.hotcabel, 162, 18,
                6.9, "0.9", 20,
                "Нагревательный кабель DEVI flex 18T Известная торговая марка Devi, на территории Украины хорошо себя зарекомендовала. Преимущества торговой марки в сплошном алюминиевом экране. Внутренняя изоляция - XLPE, наружная - PVC.",
                "Двужильный"
                ),
            new Product(
                13, brands.raychem, types.hotmat, 1378, 160, 
                5, "1", 20,
                "Нагревательные маты Raychem T2QuickNet-160 Премиальный производитель нагревательных матов, компания специализируется на производстве саморегулирующих кабелей и муфт. Гарантия 20 лет.",
                "Двужильный"
                ), 
            new Product(
                4, brands.fenix, types.hotcabel, 52, 18,
                4.6, "0.7 - 1.2", 20,
                "Нагревательный кабель Fenix ADSV мощностью 18Вт/м.п. при 230Вт в сети и 17,21Вт/м.п. при 220Вт, имеет диаметр 4,6 мм. Предназначен для укладки в слой стяжки толщиной от 3 до 5 см.",
                "Двужильный"
                ),
            new Product(
                20, brands.plenka, types.plenka, 356, 180, "Heat Plus Aph",
                0.4, "", 15,
                "Плёнка Heat Plus - это инфракрасная плёнка повышенной мощности со сплошным карбоновым слоем. Она используется как нагревательный элемент в системах отопления, обогрева и тёплых полах. В комплексе с другими материалами ТМ Heat Plus идеально подходит для укладки как под лёгкие покрытия (линолеум, ламинат, ковролин, паркет и т.д.), так и на стяжку под тяжелые керамические покрытия.",
                "Медная шина"
                ),
            new Product(
                6, brands.profitherm, types.hotcabel, 56, 19,
                5, "1.1", 15,
                "Нагревательный кабель ProfiTherm - это двухжильный нагревательный кабель для теплого пола. Применяется для основного или дополнительного обогрева. Переходная муфта выполнена из качественного материала. ProfiTherm представлен широким ассортиментом, поэтому вы сможете без проблем подобрать нужный вам комплект под любую задачу. Мощность 19Вт/пог.м.",
                "Двужильный"
                ),
            new Product(
                7, brands.raychem, types.hotcabel, 71, 17,
                7, "1.25", 20,
                "Греющий кабель представляет собой изготовленную в заводских условиях нагревательную секцию. Такой греющий кабель Raychem T2Blue подходит как для комфортного, так и для полного обогрева помещений со сложной конфигурацией.",
                "Двужильный"
                ),
            
            new Product(
                16, brands.fenix, types.thincabel, 279, 10,
                4, "0.9", 15,
                "Укладывается на готовую стяжку перед укладкой плитки. Экономит высоту пола. Более быстрый прогрев в сравнении с кабелем для укладки в стяжку. Производит: Чехия. Гарантия: 15 лет.",
                "Двужильный",
                "Fenix ADSV 10"
                ),
            new Product(
                18, brands.plenka, types.plenka, 115, 220, "In Therm",
                0.4, "", 15,
                "Инфракрасная пленка In-Therm – это качественный бюджетный вариант нагревательной ИК-пленки, предназначенной для укладки в сухих помещениях под ламинат, линолеум или ковролин без выполнения стяжки. Применять пленку в раствор и клеевой состав под плитку нельзя, так как щелочное воздействие состава быстро разрушит оболочку и выведет изделие из строя. Пленка обладает двойным эффектом – комфортный обогрев пола и инфракрасное отопление.",
                "Медная шина"
                ),
            new Product(
                10, brands.devi, types.hotmat, 1360, 150,
                6, "1", 20,
                "Премиум класс среди теплых полов нагревательные маты DEVIcomfort 150T .Мат состоит из двужильного, экранированного кабеля в гидроизоляционном покрытии на полимерной,клейкой сетке.Очень прост в монтаже.Мат применяется в полах не требующих стяжки, устанавливается в плиточный клей.",
                "Двужильный"
                ), 
            
            new Product(
                14, brands.hemstedt, types.thincabel, 547, 12,
                4.5, "1.2", 20,
                "Тонкий кабель DR - монтируется на монтажную ленту. Укладывается на готовую стяжку, перед укладкой плитки. Кабель утапливается в клеевой слой для плитки и не поднимает уровень пола.",
                "Двужильный"
                ),
            new Product(
                15, brands.devi, types.thincabel, 378, 10,
                5, "1", 20,
                "Тонкий кабель DEVIflex 10T Укладываются на чистовую стяжку, сверху плиточный клей и плитка. Применяются в том случае, когда нет возможности или желания поднимать высоту пола.",
                "Двужильный"
                ),
            
            new Product(
                19, brands.plenka, types.plenka, 350, 220, "Heat Plus",
                0.5, "", 15,
                "Плёнка Heat Plus - это инфракрасная плёнка повышенной мощности со сплошным карбоновым слоем. Она используется как нагревательный элемент в системах отопления, обогрева и тёплых полах. В комплексе с другими материалами ТМ Heat Plus идеально подходит для укладки как под лёгкие покрытия (линолеум, ламинат, ковролин, паркет и т.д.), так и на стяжку под тяжелые керамические покрытия.",
                "Медная шина"
                ),
        ];
        this.sort = types.none;
        this.sortedList = this.list;

        //Dispaly data
        this.minVisibleProducts = this.sortedList.length < 8 ? this.sortedList.length : 8;
        this.visibleProducts = this.minVisibleProducts; 

        //Elements
        this.productsContainer = $(".topSales .row__items");
        this.productsElems = this.productsContainer.find(".itemWrap"); 

        //Controll count of cards on page
        this.showMoreButton = $(".topSales .btn-showmore");        
        this.showMoreButton.bind("click", this.showMore.bind(this));

        //Sorting buttons
        
        this.sortsButtons = $(".topSales .sort-buttons button");
        this.sortsButtons.bind("click", this.changeCat.bind(this));
        this.sortsButtons.bind("click", function(){
            dataLayer.push({"event":"changeCategory"});      
        });

        //Info blocks
        this.sectionTitle = $(".topSales h2");
        this.typeDescription = $(".topSales .sort-description");


        this.setActiveCat();
    }
    
    //change category

    changeCat(event){
        let sortType = event.target.getAttribute("data-sort-type");
        this.sortProducts(sortType);
        this.activateButton(event.target);
        this.refreshTitle();
        this.refreshDescription();
    }
    setActiveCat(){
        let button = document.querySelector(".topSales .sort-buttons button.active");
        if(button){
            let sortType = button.getAttribute("data-sort-type");
            this.sortProducts(sortType);
            this.refreshTitle();
            this.refreshDescription();
        }
    }
    //Sort
    sortProducts(sortType){
        //let sortType = 

        console.log(sortType);
        console.log(this.sort);

        if(types[sortType] == this.sort){
            this.sortedList = this.list;
            this.sort = types.none;
        } else {
            this.sort = types[sortType];
            this.sortedList = [];

            for(let i = 0; i < this.list.length; i++){
                if(this.list[i].type.id == this.sort.id){
                    console.log(1);
                    this.sortedList.push(this.list[i]);
                }
            }
        }

        console.dir(this.sortedList);
        this.maxDisplayProductsCheck();
        this.switchButton();
        this.printProducts();
    } 

    //SortButtons active
    activateButton(button){    
        console.dir(button);            
        if(button.classList.contains("active")){
            button.classList.remove("active");
        } else {
            this.sortsButtons.removeClass("active");
            button.classList.add("active");
        }
    }

    //Dispaly methodth
    printProducts(){
        this.productsContainer.find(".itemWrap").remove();

        for(let i = 0; i < this.visibleProducts; i++){
            let card = this.sortedList[i].createCard();
            this.productsContainer.append(card);
        }
        
    }

    showMore(){
        if(this.visibleProducts + 4 <= this.sortedList.length){
            this.visibleProducts += 4;
        } else {
            this.visibleProducts = this.sortedList.length;
            this.switchButton();
        } 

        this.printProducts();
    }

    showLess(){
        this.productsContainer.find(".itemWrap").remove();
        this.visibleProducts = this.minVisibleProducts;
        
        this.switchButton();    

        this.printProducts();
    }

    switchButton(){
        if(this.showMoreButton.attr("data-action") == "more"){
            console.log(1);
            this.showMoreButton.unbind("click");
            this.showMoreButton.bind("click", this.showLess.bind(this)); 
            this.showMoreButton.html("Спрятать");
            this.showMoreButton.attr("data-action", "less");
            
        } else if(this.showMoreButton.attr("data-action") == "less"){
            this.showMoreButton.unbind("click");
            this.showMoreButton.bind("click", this.showMore.bind(this));    
            this.showMoreButton.html("Показать больше");
            this.showMoreButton.attr("data-action", "more");
        }
    }
    

    //Checkers
    maxDisplayProductsCheck(){
        this.minVisibleProducts = this.sortedList.length < 8 ? this.sortedList.length : 8;
        this.visibleProducts = this.minVisibleProducts;

        if(this.sortedList.length <= 8){
            this.showMoreButton.hide(300);
        } else {
            this.showMoreButton.show();
        }
    }

    //Refresh title
    refreshTitle(){
        if(this.sort == null){
            this.sectionTitle.html("Теплые электрические полы всех видов");
        } else {
            this.sectionTitle.html(this.sort.categoryTittle);
        }
    }

    //
    refreshDescription(){
        this.typeDescription.html(this.sort.description);
    }
}