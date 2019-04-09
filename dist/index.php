<?php include "hypersegment.php" ?>
<?php 
    $hypersegment = new HyperSegment();   
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#528A4A" />
    
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/libs.min.css">
    <link rel="stylesheet" href="assets/css/main.css">
    
    <title>
        <?php echo $hypersegment->getRelevantText("productType", "title", "Теплый электрический пол") ?> 
         от официального дилера 
        <?php echo $hypersegment->getRelevantText("region", "title", "") ?> 
        с 20-ти летним опытом!
    </title>
    <meta name="description" content="Магазин электрических теплых полов с 20-ти летним опытом работы. Монтаж теплых полов. Гарантия до 25 лет." />
 
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WLJ5PPV');</script>
    <!-- End Google Tag Manager-->
</head>

<body>

    <!-- Google Tag Manager (noscript) -->

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLJ5PPV"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
     
    <!-- End Google Tag Manager (noscript) -->
    
    <header>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6 col-9 left">
                    <img src="assets/img/logo.png" alt="">
                    <div class="header__title_wrap">
                        <h3>HotFloor</h3>
                        <h2>Магазин электрических теплых полов.</h2>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-3  center">
                    <ul>
                        <li><a href="tel:+38 (067) 711 8712">+38 (067) 711 8712</a></li>
                        <li><a href="tel:+38 (095) 522 2696">+38 (095) 522 2696</a></li>
                    </ul>
                    <ul>
                        <li><a href="tel:+38 (067) 595 0522">+38 (067) 595 0522</a></li>
                        <li><a href="tel:+38 (067) 546 3364">+38 (067) 546 3364</a></li>
                    </ul>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-3 right">
                    <button class="button_orange header__size_button open_popup " data-text="Заказать звонок">Заказать
						звонок</button>
                    <div class="burger">
                        <div class="burger__top"></div>
                        <div class="burger__center"></div>
                        <div class="burger__bottom"></div>
                    </div>
                </div>
                <ul class="cal_row">
                    <li><a href="tel:+38 (067) 711 8712">+38 (067) 711 8712</a></li>
                    <li><a href="tel:+38 (095) 522 2696">+38 (095) 522 2696</a></li>
                    <li><a href="tel:+38 (067) 595 0522">+38 (067) 595 0522</a></li>
                    <li><a href="tel:+38 (067) 546 3364">+38 (067) 546 3364</a></li>
                </ul>
                <nav>
                    <ul>
                        <li class="assortyment"><a>Ассортимент</a></li>
                        <li class="oNas"><a>О нас</a></li>
                        <li><a class="stoimost">Расчет стоимости</a></li>
                        <li class="otzivi"><a>Отзывы</a></li>
                        <li class="sertifikaty"><a>Сертификаты</a></li>
                        <li class="projects"><a>Примеры работ</a></li>
                        <li class="contacts"><a>Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <ul class="header__mob_menu">
            <li class="mob__tiile">HotPol</li>
            <li><a href="tel:+38 (067) 711 8712">+38 (067) 711 8712</a></li>
            <li><a href="tel:+38 (095) 522 2696">+38 (095) 522 2696</a></li>
            <li><a href="tel:+38 (067) 595 0522">+38 (067) 595 0522</a></li>
            <li><a href="tel:+38 (067) 546 3364">+38 (067) 546 3364</a></li>
            <li class="assortyment"><a>Ассортимент</a></li>
            <li class="oNas"><a>О нас</a></li>
            <li><a class="stoimost">Расчет стоимости</a></li>
            <li class="otzivi"><a>Отзывы</a></li>
            <li class="sertifikaty"><a>Сертификаты</a></li>
            <li class="projects"><a>Примеры работ</a></li>
            <li class="contacts"><a>Контакты</a></li>
            <li class="mob__call open_popup " data-text="Заказать звонок">Заказать звонок</li>
        </ul>
    </header>

    <div class="screen1">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12 screen1__leftBar">
                    <h1>
                        <?php echo $hypersegment->getRelevantText("productType", "header", "Теплый электрический пол") ?> 
                        <span>от официального дилера
                        <?php echo $hypersegment->getRelevantText("region", "header", "") ?> 
                        </span> с <span> 20-ти летним</span> опытом!
                    </h1>
                    <ul>
                        <li>Гарантия 25 лет от производителя</li>
                        <li>Ремонт и Гарантийное обслуживание</li>
                        <li>Доставка в любую точку Украины</li>
                        <li>Отправка в течении 24 часов</li>
                    </ul>
                    <button class="button_orange sizeButton open_popup" data-text="Получить консультацию от эксперта">Получить консультацию от эксперта</button>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12 screen1__RightBar">
                    <form action="/" class="lead-form send2" data-form-name="specialoffer">
                        <h2>Бесплатная доставка по всей Украине</h2>
                        <h3>Закажи больше 3 кв.м теплого пола и получи бесплатную доставку</h3>
                        <input class="name2" type="text" name="name" placeholder="Ваше имя" >
                        <input class="phone2" type="tel" name="phone" required placeholder="+(380)__ - ___ - __ - __" >
                        <input class="mail2" type="email" name="email"required  placeholder="Ваш E-mail" >
                        <button class="button_orange size " type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>   
    </div>

    <div class="screen2">
        <div class="container">
            <h3>Только лучшие производители</h3>
            <p class="screen2__top">Мы реализуем только высококачественную продукцию</p>
            <div class="screen2__line_wrap">
                <span></span>
            </div>
            <div class="row topRow">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/1.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/2.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/3.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/4.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/5.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/6.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/7.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/8.webp" alt="">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 screen2__card">
                    <img src="assets/img/marks/9.webp" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="topSales">
        <div class="container">
                <h2>Теплые электрические полы всех видов</h2>
                <div class="palcka"></div>
            <div class="row top">
               <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 left sort-buttons">
                      <button data-sort-type="hotmat" class="<?php echo $hypersegment->setActiveCategory("hotmat")?>">Нагревательные маты</button>
                      <button data-sort-type="hotcabel" class="<?php echo $hypersegment->setActiveCategory("hotcabel")?>">Нагревательный кабель</button>
                      <button data-sort-type="thincabel" class="<?php echo $hypersegment->setActiveCategory("thincabel")?>">Тонкий кабель</button>
                      <button data-sort-type="plenka" class="<?php echo $hypersegment->setActiveCategory("plenka")?>">Инфракрасная пленка</button>
               </div>         
               <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 right">
                   <p class="sort-description">
                   Существует 4 основных вида теплого электрического пола. Они отличаются способом и сложностью монтажа, типом напольного покрытия под который они предназначены, ценой и энергоэффективностью. Используйте фильтр, чтобы выбрать конкретный вид теплого пола.
                   </p>
               </div>         
            </div>
            <div class="row row__items">
     
               
            </div>
            <div class="button_orange btn-showmore" data-action="more">
                Показать больше
            </div>
        </div>
    </div>

    <div class="screen-advantages">
        <div class="container">
            <h3 class="pochemu">Почему клиенты выбирают нас</h3>
            <div class="screen2__line_wrap">
                <span class="screen2_nextSpan"></span>
            </div>
            <div class="row screen2__Bottom">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col">
                    <div class="wrap"><img src="assets/img/advantages/engineer.svg" alt=""></div>
                    <div class="text">
                        <h4>Консультация от специалиста</h4>
                        <p>
                            Мы эксперты в электрических теплых полах. Наш опыт в 20 лет поможет вам сделать правильный выбор и сохранить ваше время и деньги.
                        </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col">
                    <div class="wrap"><img src="assets/img/advantages/driller.svg" alt=""></div>
                    <div class="text">
                        <h4>Монтажные работы</h4>
                        <p>
                            Для тех кто проживает в Харькове у нас есть услуга монтажных работ. При заказе от 5000 грн. монтаж бесплатно!.
                        </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col">
                    <div class="wrap"><img src="assets/img/advantages/document.svg" alt=""></div>
                    <div class="text">
                        <h4>Официальный партнер производителя</h4>
                        <p>
                            Наша компания является официальным партнером производителей теплых полов, что дает Гарантийное обслуживание и Выгодную цену.
                        </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col">
                    <div class="wrap"><img src="assets/img/advantages/security.svg" alt=""></div>
                    <div class="text">
                        <h4>Гарантия до 25 лет от Производителя</h4>
                        <p>
                            Мы реализуем только оригинальную продукцию поэтому, Производители предоставляют полную гарантию до 25 лет. 
                        </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col">
                    <div class="wrap"><img src="assets/img/advantages/truck.svg" alt=""></div>
                    <div class="text">
                        <h4>Доставка по всей Украине</h4>
                        <p>
                            Мы отправляем наши товары в любую точку Украины. Ваш заказ отправляется в течении 24 часов.
                        </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col">
                    <div class="wrap"><img src="assets/img/advantages/customer-support.svg" alt=""></div>
                    <div class="text">
                        <h4>Сервисное обслуживание и Ремонт</h4>
                        <p>
                            Наша компания одна из немногих в Украине которая проводит сервисное обслуживание и ремонт теплого пола.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="screen3">
        <img class="screen3__cat" src="assets/img/kot.webp" alt="">
        <div class="container">
            <h3>Скидка 10% на все товары!</h3>
            <p>Оставьте заявку на сайте и получайте <span>консультацию от специалиста </span> и <span>гарантированную скидку 10%</span> на все товары!
            </p>
            <div class="screen3__line"></div>
            <form action="/" class="lead-form send2" data-form-name="discount">
                <h3>
                    Оставьте заявку, чтобы получить подробности акции
                </h3>
                <div class="screen3__blockInput">
                    <input class="name2" type="text" name="name" placeholder="Ваше имя" >
                    <input class="phone2" type="tel" name="phone" required placeholder="+(380)__ - ___ - __ - __">
                    <input class="mail2" type="email" name="email" required placeholder="Ваш E-mail">
                    <button class="button_orange size " type="submit">Отправить</button>
                </div>
            </form>
        </div>
    </div>

    <div class="screen4">
        <div class="container">
            <h3>Сертификаты</h3>
            <p>
                Мы являемся официальным партнером производителей и реализуем только оригинальную продукцию
            </p>
            <div class="palcka"></div>
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src="assets/img/certificate1.webp" alt="">
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src="assets/img/certificate2.webp" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="screen-projects">
        <div class="container">
            <h3>Примеры наших работ</h3>
            <div class="palcka"></div>
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="projects-carousel">
                        <div><img src="assets/img/projects/5.webp" alt=""></div>
                        <div><img src="assets/img/projects/1.webp" alt=""></div>
                        <div><img src="assets/img/projects/2.webp" alt=""></div>
                        <div><img src="assets/img/projects/3.webp" alt=""></div>
                        <div><img src="assets/img/projects/4.webp" alt=""></div>
                        <div><img src="assets/img/projects/6.webp" alt=""></div>
                        <div><img src="assets/img/projects/7.webp" alt=""></div>
                        <div><img src="assets/img/projects/8.webp" alt=""></div>
                        <div><img src="assets/img/projects/9.webp" alt=""></div>
                        <div><img src="assets/img/projects/10.webp" alt=""></div>
                        <div><img src="assets/img/projects/11.webp" alt=""></div>
                        <div><img src="assets/img/projects/12.webp" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="screen5">
        <div class="container">
            <h3>Расчет стоимости</h3>
            <div class="palcka"></div>
            <div class="screen5__wrapCol">
                <div class="leftCol">
                    <p>Закажите бесплатный расчет стоимости и энергопотребления полов с электро обогревом.</p>
                    <p>Наш <span class="underline">Специалсит с опытом 20 лет</span> проконсультирует вас и поможет подобрать самый лучший вариант пола именно в вашем случае.</p>
                    <p>Поскольку выбор пола это комплексный вопрос в котором, <span>неправильный выбор пола может
							привести к скорой его поломке.</span> Специалист поможет вам сделать правильный выбор чтобы
                        <span> избежать переплат и дальнейших проблем.</span> </p>
                </div>
                <div class="rightCol">
                    <form action="/" class="lead-form send2" data-form-name="calculator">
                    <p>Калькулятор теплого пола</p>
                        <div class="topIput">
                            <label for="type">Тип помещения</label>
                            <select class="select" required name="type" id="type">
                                <option value="">Выберите тип помещения</option>
                                <option value="">Балкон, лоджия</option>
                                <option value="">Бассейн</option>
                                <option value="">Ванная комната, санузел</option>
                                <option value="">Гараж</option>
                                <option value="">Гостинная</option>
                                <option value="">Прихожая</option>
                                <option value="">Кухня</option>
                                <option value="">Комната</option>
                                <option value="">Подсобное помещение</option>
                            </select>

                            <label for="heating">Тип обогрева</label>
                            <select class="select" required name="heating" id="heating">
                                <option value="">Выберите тип обогрева</option>
                                <option value="">Инфракрасная пленка</option>
                                <option value="">Стержневой теплый пол</option>
                                <option value="">Нагревательный кабель</option>
                                <option value="">Нагревательный мат</option>
                            </select>

                            <label for="montage">Тип монтажа</label>
                            <select class="select" required name="montage" id="montage">
                                <option value="">Выберите тип монтажа</option>
                                <option value="">С нашей помощью</option>
                                <option value="">Своими руками</option>
                            </select>

                            <label for="cover">Тип напольного покрытия</label>
                            <select class="select" required name="cover" id="cover">
                                <option value="">Выберите тип покрытия</option>
                                <option value="">Доска</option>
                                <option value="">Ковролин</option>
                                <option value="">Ламинат</option>
                                <option value="">Линолеум</option>
                                <option value="">Паркет</option>
                                <option value="">Плитка</option>
                                <option value="">Другое</option>
                            </select>

                            <label for="s">Площадь обогрева, м<sup>2</sup></label>
                            <input name="s" type="text" id="s">

                            <label for="Thermostat">Терморегулятор</label>
                            <select class="select" required name="Thermostat" id="Thermostat">
                                <option value="">Выберите терморегулятор</option>
                                <option value="">Механический</option>
                                <option value="">Программируемый</option>
                                <option value="">Не надо</option>
                            </select>

                            <label for="tel" >Телефон для обратной связи</label>
                            <input type="tel" required name="phone" id="tel" placeholder="+38( ___ ) ___ - __ - __">

                            <label name="textarea" for="textarea">Комментарий</label>
                            <textarea  id="textarea"></textarea>

                        </div>
                        
                        <button data-text="Заказать расчет стоимости" class="button_orange buttonSize " type="submit">Заказать расчет стоимости</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="screen-testimonials">
        <div class="container">
            <h3>Что говорят наши клиенты</h3>
            <div class="palcka"></div>
            <div class="row justify-content-center">
                <div class="col-xl-9 ">
                    <div class="testimonials-carousel">
                    <div>
                            Была сложная техническая задача по электро отоплению. Обращался в разные конторы. Везде одно и тоже рекомендуют. Но мне было дороговато. Ребята
                            подсказали решение, которое, и стоит дешевле, и более правильное с инженерной точки зрения. Даже удивлен их грамотностью и порядочностью. Я очень доволен!!
                            
                        </div>
                        <div>
                            Лет 10 назад ставил себе теплые полы Энсто. Все работает, классно. Тут сыну квартиру делаю, опять к ним пошёл. 
                            Опять поставил их кабель и еще скидку получил. Очень приятно. Молодцы! Какой опыт накоплен. Короче, однозначно рекомендую!
                        </div>
                        <div>
                            Купил кабель Энсто в Эпицентре. Обратился за укладкой. Но мне там отказали и направили в магазин на Бурсацком спуске. Очень прилично. Думал наткнусь на отказ, но нет. Они представители. И проконсультировали и установили. Очень
                            толково. Супер. Рекомендую без зазрения совести.
                        </div>
                       
                        <div>Зашла с мужем за теплыми полами. Мне очень понравилось. Там еще и фурнитура красивая есть. Шикарно в общем!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="wrap">
            <div class="container">
                <h3>Как с нами связаться</h3>
                <div class="palcka"></div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <img src="assets/img/email.svg" alt="">
                        <a href="mailto:hotfloorinfo@gmail.com">hotfloorinfo@gmail.com</a>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <img src="assets/img/smartphone.svg" alt="">
                        <ul>
                            <li><a href="tel:+38 (067) 711 8712">+38 (067) 711 8712</a></li>
                            <li><a href="tel:+38 (067) 595 0522">+38 (067) 595 0522</a></li>
                            <li><a href="tel:+38 (067) 546 3364">+38 (067) 546 3364</a></li>
                            <li><a href="tel:+38 (095) 522 2696">+38 (095) 522 2696</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src="assets/img/placeholder.svg" alt="">
                        <a target="_blanck" href="https://www.google.com/maps/place/%D0%91%D1%83%D1%80%D1%81%D0%B0%D1%86%D0%BA%D0%B8%D0%B9+%D1%81%D0%BF%D1%83%D1%81%D0%BA,+7,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@49.9932529,36.226299,17z/data=!3m1!4b1!4m5!3m4!1s0x4127a0fa91629f9f:0xcc1aa486959f6ce4!8m2!3d49.9932529!4d36.2284877">
							Украина, Харьков,
							Бурсацкий спуск 7
						</a>
                    </div>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.96568090317!2d36.226299015714794!3d49.99325287941486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0fa91629f9f%3A0xcc1aa486959f6ce4!2z0JHRg9GA0YHQsNGG0LrQuNC5INGB0L_Rg9GB0LosIDcsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1553423656341"
            width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        <div class="development">
            <a target="_blanck" href="https://promobullet.pp.ua/">development and promotion: PromoBullet</a>
        </div>
    </footer>

    <!-- popup -->

    <div class="popup">
        <form action="/" class="lead-form send" data-form-name="popup">
            <div class="PopupClosed"></div>
            <p class="popup__titleForm"></p>
            <input class="name" type="text" name="name" placeholder="Ваше имя" >
            <input class="phone" type="tel" name="phone" required placeholder="+(380)__ - ___ - __ - __" >
            <input class="mail" type="email" name="email" required placeholder="Ваш E-mail" >
            <button class="button_orange popupBat" type="submit">Отправить</button>
        </form>
    </div>

    <div class="popup_goodbye">
        <div class="bye">
            <p>Спасибо, мы Вам позвоним в ближайшее время. </p>
        </div>
    </div>

    <div class="cnopa"></div>
    <!-- popup item -->
            
        <div class="popupshome">
            
        </div>
        
        <div id="callback-popup" class="callback-popup mfp-hide">
            <div class="content">
                <div class="content__hidden-img">
                    <img src="assets/img/consultant.png" alt="">
                </div>
                <div class="content__cta">
                    <div class="image">
                        <img src="assets/img/consultant.png" alt="">
                    </div>
                    <div class="cta-text">
                        <h4 class="cta-text__header">Увас есть вопросы?</h4>
                        <p class="cta-text__explanation">Укажите ваш номер телефона и мы перезвоним вам в самое ближайшее время.</p>
                    </div>
                </div>
                <form action="" class="lead-form send2" data-form-name="">
                    <input type="tel" name="phone" placeholder="Телефон для связи">
                    <button>Жду звонка!</button>
                </form>
            </div>
        </div>
        <!-- <a href="#callback-popup" class="open-popup-link">Show inline popup</a> -->
<!-- popup item -->
    <!-- popup -->


    <!-- Scripts -->

    <script src="assets/js/libs.min.js"></script>
    <script src="assets/js/main.min.js"></script>
    <script type="text/javascript"></script>

</body>

</html>
