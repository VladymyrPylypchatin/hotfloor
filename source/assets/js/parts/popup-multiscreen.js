'use-strict';

let conrollId = [
    {id:"getCall", text:"Ваша заявка на принята"}
];

class PopupMS{
    constructor(popupSelector, controllId){
        this.popupSelector = popupSelector;
        this.screens = $(this.popupSelector).find(".popup-multiscreen__screen");
        this.activeScreen = 0;
        this.controllId = controllId;

        this.nextButtons = $(this.popupSelector).find(".next");
        this.nextButtons.bind("click", this.next.bind(this));

        this.leadForm = $(this.popupSelector).find(".lead-form");
        this.leadForm.bind("submit", this.next.bind(this));

        this.closeButton = $(this.popupSelector).find(".close-popup");
        this.closeButton.bind("click", this.closePopup.bind(this));
    }

    initPopup(){
        
    }
    openPopup(){
        $(".popup-overlay").removeClass("hidden");
        $(".popup-wrapper").removeClass("hidden");
        $(this.popupSelector).removeClass("hidden");
    }
    closePopup(){
        $(".popup-overlay").addClass("hidden");
        $(".popup-wrapper").addClass("hidden");
        $(this.popupSelector).addClass("hidden");
        this.activeScreen = 0;
    }

    next(){
        this.activeScreen++;
        (this.screens[this.activeScreen]).classList.add("popup-multiscreen__screen_active");
        (this.screens[this.activeScreen - 1]).classList.remove("popup-multiscreen__screen_active");
    }
}