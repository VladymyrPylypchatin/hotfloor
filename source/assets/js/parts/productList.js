'use strict'

class ProductList{
    
    

    constructor(){
        //Lists 
        this.list = [
            new Product(8, brands.interm, types.hotmat, 664, 150), 
            new Product(1, brands.ensto, types.hotcabel, 78, 20),
            new Product(12, brands.fenix, types.hotmat, 943, 160), 
            new Product(11, brands.nexans, types.hotmat, 1162, 150), 
            new Product(5, brands.interm, types.hotcabel, 49, 20),
            new Product(2, brands.hemstedt, types.hotcabel, 61, 17),
            new Product(9, brands.hemstedt, types.hotmat, 1087, 150), 
            new Product(17, brands.raychem, types.thincabel, 547, 10, "Raychem cera"),
            new Product(3, brands.devi, types.hotcabel, 162, 18),
            new Product(13, brands.raychem, types.hotmat, 1378, 150), 
            new Product(4, brands.fenix, types.hotcabel, 52, 18),
            new Product(20, brands.plenka, types.plenka, 356, 180, "Heat Plus Aph"),
            new Product(6, brands.profitherm, types.hotcabel, 56, 19),
            new Product(7, brands.raychem, types.hotcabel, 71, 17),
            
            new Product(16, brands.fenix, types.thincabel, 279, 10, "Fenix ADSV 10"),
            new Product(18, brands.plenka, types.plenka, 115, 220, "In Therm"),
            new Product(10, brands.devi, types.hotmat, 1360, 150), 
            
            new Product(14, brands.hemstedt, types.thincabel, 547, 12),
            new Product(15, brands.devi, types.thincabel, 378, 10),
            
            new Product(19, brands.plenka, types.plenka, 350, 220, "Heat Plus"),
        ];
        this.sort = null;
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
        this.sortsButtons.bind("click", this.sortProducts.bind(this));
        this.sortsButtons.bind("click", this.activateButton.bind(this));
        this.sortsButtons.bind("click", this.refreshTitle.bind(this));
        this.sortsButtons.bind("click", this.refreshDescription.bind(this));
        this.sortsButtons.bind("click", function(){
            dataLayer.push({"event":"changeCategory"});      
        });

        //Info blocks
        this.sectionTitle = $(".topSales h2");
        this.typeDescription = $(".topSales .sort-description");
    }
    
    //Sort
    sortProducts(event){
        let sortType = event.target.getAttribute("data-sort-type");

        console.log(sortType);
        console.log(this.sort);

        if(types[sortType] == this.sort){
            this.sortedList = this.list;
            this.sort = null;
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
    activateButton(event){
        let button = event.target;
                
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