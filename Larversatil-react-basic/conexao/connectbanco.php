<?php

    function query($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "larversatil";
    
        $connect = mysqli_connect($servername, $username, $password, $database);
        if (!$connect) {
            die("A conexão ao banco de dados falhou: ".mysqli_connect_error());
        } 
        $result = mysqli_query($connect, $sql);
        mysqli_close($connect);
        return $result;
    }

    function nonquery($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "larversatil";
    
        $connect = mysqli_connect($servername, $username, $password, $database);
        if (!$connect) {
            die("A conexão ao banco de dados falhou: ".mysqli_connect_error());
        } 
        $result = mysqli_query($connect, $sql);
        mysqli_close($connect);
    }
?>