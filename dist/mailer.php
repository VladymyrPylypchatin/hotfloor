<?php
  
    // -------------------------------------------
    $data = json_decode($_POST["data"]);
    if (!empty($data->email) && !empty($data->phone)) {

        $name = (!empty($data->name) && isset($data->name)) ? $data->name : "No name";
        $email = (!empty($data->email) && isset($data->email)) ? $data->email : "No email";
        $phone = (!empty($data->phone) && isset($data->phone)) ? $data->phone : "No phone";
        
        // TODO: uncomment
        
        $host = 'a213547.mysql.mchost.ru'; // адрес сервера 
        $database = 'a213547_hotfloor'; // имя базы данных
        $user = 'a213547_hotfloor'; // имя пользователя
        $password = 'qwe321qwe'; // пароль
        
        $db = mysqli_connect($host, $user, $password, $database); 
        mysqli_set_charset($db, 'utf8');
        $query = "INSERT INTO lead (name, email, phone, date) VALUES ('".$name."', '".$email."', '".$phone."', NOW())";
        $result = mysqli_query($db, $query) or die("Ошибка " . mysqli_error($db));
        mysqli_close($db);
        
        mail("hotfloorinfo@gmail.com", "Заявка на Теплый пол за " . date("d.m.Y") , "Имя: " . $name . "; E-mail - " . $email . "; Телефон - " . $phone);
        mail("pavel_vorota@gmail.com", "Заявка на Теплый пол за " . date("d.m.Y") , "Имя: " . $name . "; E-mail - " . $email . "; Телефон - " . $phone);
        

        echo 1;
   
        
    } else {
        echo 2;
    }