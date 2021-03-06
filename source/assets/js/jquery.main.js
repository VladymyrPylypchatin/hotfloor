(function($){

   




    $(document).ready(function() {

        $("input[type=tel]").mask("+38 (000) 000-00-00");
        
        var formsSenFlag = false;
        $('.lead-form').on('submit', function(event) {
            event.preventDefault(); // отменяем событие по умолчанию
            let formName = $(this).attr("data-form-name");

            var purpose = $(this).attr("data-purpose");
            if(purpose == "price-list"){
            } else{
            }
            
            fbq("track", "Lead");
            dataLayer.push({"event":"send_form", "formName": formName});
            //$(this).find("input").val("");
        });

        // $('.popupshome').on("click", function(event){
        //     let form = event.target;
        //     console.log(event);
        // });

        var formsInteractions = [];
        $('.lead-form input').on("focus", function(event){
            let formName = $(this).parents("form").attr("data-form-name");
            if(!formsInteractions.find(value => value == formName)){
                dataLayer.push({"event":"fromInteraction", "formName":formName});
                formsInteractions.push(formName);
            }
        });
        
        $(".testimonials-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin:30,
        });

        $(".projects-carousel").owlCarousel({
            items: 3,
            loop: true,
            margin:30,
            nav: true,
            
            
            navText: [
                "<img src='assets/img/left-arrow.svg'>",
                "<img src='assets/img/right-arrow.svg'>"
            ],
            responsive: {
                0:{
                    nav: false,
                    items: 1,
                    slideBy: 1,
                    dotsEach: 1,
                    margin: 15
        
                },
                580: {
                    items: 2,
                    slideBy: 2,
                    dotsEach: 2,
                    margin: 15
                },
                768: {
                    items: 3,
                    slideBy: 3,
                    dotsEach: 3,
                }
            }
        });




          // скролл

    $('.otzivi').on('click',function(){
        var TopScreen2 = $('.screen-testimonials').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 700);
    })
 
    $('.projects').on('click',function(){
        var TopScreen2 = $('.screen-projects').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 700);
    })

    $('.assortyment').on('click',function(){
        var TopScreen2 = $('.screen2').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 500);
    })

    $('.oNas').on('click',function(){
        var TopScreen2 = $('.pochemu').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 600);
    })

    $('.stoimost').on('click',function(){
        var TopScreen2 = $('.screen5').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 700);
    })

    $('.sertifikaty').on('click',function(){
        var TopScreen2 = $('.screen4').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 800);
    })

    $('.contacts').on('click',function(){
        var TopScreen2 = $('footer').offset().top;
        $('body,html').animate({scrollTop: TopScreen2}, 900);
    })

    $('.cnopa').on('click',function(){
        $('body,html').animate({scrollTop: 0}, 900);
    })

    // скролл


    // burger


    $('.burger').on('click',function(){
        BurgerClick();
    })

    var i = 0;
    function BurgerClick(){
        i++;

        if(i % 2 != 0){
            $('.burger__center').css({opacity:'0'});
            $('.burger__top').css({transform:'rotateZ(45deg) translateY(9px) translateX(11px)'});
            $('.burger__bottom').css({transform:'rotateZ(-45deg) translateY(-6.5px) translateX(8.5px)'})
            $('.header__mob_menu').css({transform:'translateX(0px)'});
        }else{
            $('.burger__center').css({opacity:'1'}); 
            $('.burger__top').css({transform:'rotateZ(0deg)'});
            $('.burger__bottom').css({transform:'rotateZ(0deg)'});
            $('.header__mob_menu').css({transform:'translateX(-252px)'});
        }
        
        
    };

    // попап

    $('.open_popup').on('click',function(){
        $('.popup').css({opacity:'1', 'pointer-events': 'auto'});
        var DataText = $(this).attr('data-text');
        $('.popup__titleForm').text(DataText);
    })

    $('.PopupClosed').on('click',function(){
        $('.popup').css({opacity:'0', 'pointer-events': 'none'});
        setTimeout(function(){
            $('.name, .phone, .mail').val('');
        },1050);
       
    })



    $('.header__mob_menu li').on('click',function(){
        i++;
        $('.header__mob_menu').css({transform:'translateX(-252px)'});
        $('.burger__top').css({transform:'rotateZ(0deg)'});
        $('.burger__bottom').css({transform:'rotateZ(0deg)'});
        $('.burger__center').css({opacity:'1'}); 
    })

   
    $('.send').on('submit',function(){
        var name = $('.name').val().length;
        var phone = $('.phone').val().length;
        var mail = $('.mail').val().length;

        console.log(name);
        console.log(phone);
        console.log(mail);

        var FlegName = 1;
        var Flegphone = 1;
        var Flegmail = 1;

        if(name >= 2 ){
            FlegName = 1;
        }else{
            $('.name').css({border:'3px solid red'});
             setTimeout(function(){
                  $('.name').css({border:'none'});
            },1000);
        }
        if(phone == 19 ){
            Flegphone = 1;
       }else{
            $('.phone').css({border:'3px solid red'});
            setTimeout(function(){
                $('.phone').css({border:'none'});
           },1000);
       }
       if(mail >= 5 ){
            Flegmail = 1;
       }else{
          $('.mail').css({border:'3px solid red'});
          setTimeout(function(){
             $('.mail').css({border:'none'}); 
          },1000);
       }

       if(FlegName == 1 && Flegphone==1 && Flegmail==1){
            var jsonData = JSON.stringify(getFormValues($(this)));
            console.log(jsonData);
            SendRequest("POST", "mailer.php", 'data='+jsonData, formSendHandler);


            $('.name, .phone, .mail').css({opacity:'0',transition:'1s'});
        setTimeout(function(){      
            $('.name, .phone, .PopupClosed, .popupBat, .mail').css({ display:'none'});
            $('.popup__titleForm').text('Спасибо, мы Вам позвоним в ближайшее время.');
         },1000);
         setTimeout(function(){
            $('.popup').css({opacity:'0', 'pointer-events': 'none'});
            setTimeout(function(){
                $('.name, .phone, .mail, .send').css({ display:'block',opacity:'1'});
                $('.PopupClosed, .popupBat').css({ display:'flex',opacity:'1'});
                $('.name, .phone, .mail').val('');
            },1000)   
         },5000);
     };


        

        // }else{
        //     
        // }

        // console.log();

    })

    
    // попап

     

    // попап2

    $('.send2').on('submit',function(){

        console.log('da');

        var FlegName = 1;
        var Flegphone = 1;
        var Flegmail = 1;

        $('.name2').each(function(key,elem){
            var name = $(elem).val().length;
            if(name >= 2 ){
                FlegName = 1;                  
                console.log(FlegName);       
                return ;              
            }else{
                $(this).css({border:'3px solid red'});
                setTimeout(function(){
                    $('.name2').css({border:'none'});
                },1000);              
            }  
             
        });

        $('.phone2').each(function(key,elem){
            var phone = $(elem).val().length;           
            if(phone == 19){
                Flegphone = 1;                  
                console.log(Flegphone);       
                return ;   
            }else{
                $(this).css({border:'3px solid red'});
                setTimeout(function(){
                    $('.phone2').css({border:'none'});
                },1000);
            }  
            
        });

        $('.mail2').each(function(key,elem){
            var mail = $(elem).val().length;       
            if(mail >= 5){
                Flegmail = 1;                
                console.log(Flegmail);          
                return ;              
            }else{
                $(this).css({border:'3px solid red'});
                setTimeout(function(){
                    $('.mail2').css({border:'none'});
                },1000);
            }  
             
        });

       if(FlegName == 1 && Flegphone==1 && Flegmail==1){  

        var jsonData = JSON.stringify(getFormValues($(this)));
        console.log(jsonData);
        SendRequest("POST", "mailer.php", 'data='+jsonData, formSendHandler);

        $('.popup_goodbye').css({opacity:'1','pointer-events':'auto'});
        setTimeout(function(){
            $('.popup_goodbye').css({opacity:'0','pointer-events':'none'});
            $('.name2, .phone2, .mail2').val('');               
        },4000);        
       }
    })



    // попап2


    // swipe


    // jQuery('body').swipe( {
    //     swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection)
    //     {
    //         if (phase=="start"){
    //             // сработает в начале swipe
    //         } 
    //         if (phase=="end"){ 
    //             //сработает через 20 пикселей то число которое выбрали в threshold
    //             if (direction == 'left') {
    //                 //сработает при движении влево
    //                 i++;
    //                 console.log('left');
    //                 $('.burger__center').css({opacity:'1'}); 
    //                 $('.burger__top').css({transform:'rotateZ(0deg)'});
    //                 $('.burger__bottom').css({transform:'rotateZ(0deg)'});
    //                 $('.header__mob_menu').css({transform:'translateX(-252px)'});
    //                 console.log(i);
    //             }
    //             if (direction == 'right') {
    //                 //сработает при движении вправо
    //                 console.log('right');
    //                 $('.burger__center').css({opacity:'0'});
    //                 $('.burger__top').css({transform:'rotateZ(45deg) translateY(9px) translateX(11px)'});
    //                 $('.burger__bottom').css({transform:'rotateZ(-45deg) translateY(-6.5px) translateX(8.5px)'})
    //                 $('.header__mob_menu').css({transform:'translateX(0px)'});
    //                 i++;
    //             }
    //             if (direction == 'up') {
    //                 //сработает при движении вверх
    //             }
    //             if (direction == 'down') {
    //                 //сработает при движении вниз
    //             }
    //         }
    //  },
    //  triggerOnTouchEnd:false,
    //  threshold:20 // сработает через 20 пикселей
    // });

    // popup
    });



        
   

}(jQuery));