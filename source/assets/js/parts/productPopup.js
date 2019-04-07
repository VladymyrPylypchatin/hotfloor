'use strict';


class ProductPopup{
    constructor(product) {
        this.product = product;
        this.popup = null;

        this.createPopup();
    }

    createPopup(){
        this.popup = $("<div></div>");
        this.popup.addClass("ItemPopup");
        this.popup.append(`
            <div class="ItemPopup__card">
                <div class="WrapTitlePage">
                    <span class="PageTitle">О товаре</span>
                    <span class="PageClosed"></span>
                </div>
                <h3 class="Title">${this.product.type.categoryTittle} ${this.product.brand.name} (${this.product.brand.country})</h3>
                <div class="ContainerImg">
                    <div class="WrapImg">
                        <img src="assets/img/products/${this.product.id}.webp" alt="">
                    </div>
                    <div class="price">
                        <div class="Brand">
                            <p>Бренд: <span>${this.product.brand.name}</span></p>
                            <p>Модель: <span>Rx 424</span></p>
                            <p>Вид: <span>${this.product.type.name}</span></p>
                        </div>
                        <p class="Prise2">от ${this.product.price} </span>${this.product.type.priceUnit}</p>
                        <p class="Clisc1">Заказать в 1 клик</p>
                        <form action="/" class="lead-form send2" data-form-name="order">
                            <input type="tel" name="phone" required placeholder="Ваш номер телефона">
                            <button>ЗАКАЗАТЬ</button>
                        </form>
                    </div>
                </div>
                <div class="discription">
                    <p class="NameDiscription">
                        Описание
                    </p>
                    <p class="text">
                        ${this.product.description}
                    </p>
                </div>

                <div class="specifications">
                    <p class="specifications__title">Характеристики теплого пола</p>
                    <ul class="specifications__list">
                        <li class="LiStyle"><span class="listFirst">Бренд</span><span class="listSecond">${this.product.brand.name}</span></li>
                        <li><span class="listFirst">Страна бренда</span><span class="listSecond">${this.product.brand.country}</span></li>
                        <li class="LiStyle"><span class="listFirst">Тип теплого пола</span><span class="listSecond">${this.product.type.name}</span></li>
                        <li><span class="listFirst">Способ монтажа</span><span class="listSecond">${this.product.type.montageType}</span></li>
                        <li class="LiStyle"><span class="listFirst">Тип кабеля</span><span class="listSecond">${this.product.cabelType}</span></li>
                        <li><span class="listFirst">Диаметр сечения кабеля</span><span class="listSecond">${this.product.cabelDiametr} мм</span></li>
                        <li class="LiStyle"><span class="listFirst">Мощность</span><span class="listSecond">${this.product.power} ${this.product.type.powerUnit}</span></li>
                        <li><span class="listFirst">Площадь обогрева</span><span class="listSecond">${this.product.heatingArea} м<sup>2</sup></span></li>
                        <li class="LiStyle"><span class="listFirst">Гарантийный срок</span><span class="listSecond">${this.product.waranty} лет</span></li>
                    </ul>
                </div>
            </div>
        `);

        $(".popupshome").append(this.popup);
        $("input[type=tel]").mask("+38 (000) 000-00-00");
        this.popup.find(".PageClosed").bind("click", this.close.bind(this));

        var closePopup = this.close.bind(this);
        
        this.popup.find("form").bind("submit", function(){
            event.preventDefault(); // отменяем событие по умолчанию
            let formName = $(this).attr("data-form-name");

            var jsonData = JSON.stringify(getFormValues($(this)));
            console.log(jsonData);
            SendRequest("POST", "mailer.php", 'data='+jsonData, formSendHandler);

            fbq("track", "Lead");
            dataLayer.push({"event":"send_form", "formName": formName});

            closePopup();
            $('.popup_goodbye').css({opacity:'1','pointer-events':'auto'});
            setTimeout(function(){
                $('.popup_goodbye').css({opacity:'0','pointer-events':'none'});
                $('.name2, .phone2, .mail2').val('');               
            },4000);
        });
        return this.popup;
    }

    open(){
        $("body").addClass("fixhtml");
        this.popup.addClass("opened");
    }

    close(){
        this.popup.removeClass("opened");
        $("body").removeClass("fixhtml");
    }
   

 
 }
