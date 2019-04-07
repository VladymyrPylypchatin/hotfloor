    //Creating cross browsing
    function CreateRequest(){
        var Request = false;

        if(window.XMLHttpRequest) Request = new XMLHttpRequest();
        else if (window.ActiveXObject){
            try {
                Request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(Exception) {
                Request = new ActiveXObject("Msxml2.XMLHTTP");
            }
        }

        if(!Request) alert("Request Error");

        return Request;
    }
    function SendRequest(method, path, args, handler){
        var Request = CreateRequest();
        if(!Request) return;

        Request.onreadystatechange = function(){
            if(Request.readyState == 4) handler(Request);
        }        

        if(method.toLowerCase() == "get" && args.length > 0) path += "?" + args;

        Request.open(method, path, true);

        if(method.toLowerCase() == "post"){
            Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
            Request.send(args);
        } else {
            Request.send(null);
        }
    }
    function getFormValues($form){
        let data = {};
        data['name'] = $form.find('input[name=name]').val();
        data['email'] = $form.find('input[name=email]').val();;
        data['phone'] = $form.find('input[name=phone]').val();;
        data['capacity'] = $form.find('input[name=capacity]').val();;
        return data;
        
    }
    function priceFormSteps(){
       
    }
    var formSendHandler = function (Request){
        var response = Request.responseText;
        console.log("success");           
    };