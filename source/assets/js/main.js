$(document).ready(function() {
    let app = new ProductList();
    app.printProducts();

    let callbackPopupTest = [
        {
            header: "Увас есть вопросы?",
            text: "Укажите ваш номер телефона и мы перезвоним вам в самое ближайшее время.",
            code: "popupHaveQuestion"
        },
        {
            header: "Получи Бесплатную консультацию!",
            text: "Укажите ваш номер телефона и наш специалист ответит на все ваши вопросы.",
            code: "popupGetFreeConsult"
        },
        {
            header: "Неможете сделать правильный выбор?",
            text: "Укажите ваш номер телефона и наш специалист проведет для Вас <b>Бесплатную консультацию</b>.",
            code: "popupCantMakeChoice"
        }
    ];


    let callBackPopup = $("#callback-popup");
    let rand = Math.floor(Math.random() * (3 - 1)) + 1;
    callBackPopup.find(".cta-text__header").html(callbackPopupTest[rand - 1].header);
    callBackPopup.find(".cta-text__explanation").html(callbackPopupTest[rand - 1].text);
    callBackPopup.find("form").attr("data-form-name", callbackPopupTest[rand - 1].code);

    setTimeout(function(){
        $.magnificPopup.open({
            items: {
                src: '#callback-popup', // can be a HTML string, jQuery object, or CSS selector
                type: 'inline',
            },
            
            mainClass: 'mfp-fade',
            closeOnBgClick: false,
            fixedContentPos: true
        });

        dataLayer.push({"event":"popupConsultation"});
    }, 150000);

    
});  