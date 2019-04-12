$(document).ready(function() {
    let app = new ProductList();
    app.printProducts();

    // let callbackPopupTest = [
    //     {
    //         header: "Увас есть вопросы?",
    //         text: "Оставьте ваш номер телефона, чтобы получить Бесплатную консультацию.",
    //         code: "popupHaveQuestion"
    //     },
    //     {
    //         header: "Бесплатную консультация!",
    //         text: "Оставьте ваш номер телефона, чтобы мы могли помочь вам с выбором пола.",
    //         code: "popupGetFreeConsult"
    //     },
    // ];


    // let callBackPopup = $("#callback-popup");
    // let rand = Math.floor(Math.random() * (2 - 1)) + 1;
    // callBackPopup.find(".cta-text__header").html(callbackPopupTest[rand - 1].header);
    // callBackPopup.find(".cta-text__explanation").html(callbackPopupTest[rand - 1].text);
    // callBackPopup.find("form").attr("data-form-name", callbackPopupTest[rand - 1].code);

    setTimeout(function(){
        $.magnificPopup.open({
            items: {
                src: '#callback-popup', // can be a HTML string, jQuery object, or CSS selector
                type: 'inline',
            },
            
            mainClass: 'mfp-fade',
            closeOnBgClick: false,
            fixedContentPos: true,
            fixedBgPos: true,
        });

        dataLayer.push({"event":"popupConsultation"});
    }, 150000);

    let getFaq = new PopupMS(".popup-getfaq");

    $(".faq-screen__button").on("click", function(){
        getFaq.openPopup();
    });

    

    
});  