<?php
        header("Access-Control-Allow-Origin:*");
        require_once('./connectbanco.php');

        if($_SERVER['REQUEST_METHOD'] === 'GET'){
                echo json_encode(array('mensagem' => "Método GET Efetuado"));
        } else if ($_SERVER['REQUEST_METHOD'] === 'POST'){

                $nome = $_POST['nome'];
                $msg = $_POST['msg'];
              
                
                $sql = "INSERT INTO comentarios(nome, msg) 
                values ('$nome','$msg');";
                
                nonquery($sql);

                echo json_encode(array('mensagem' => "Método POST Efetuado")); 
                  
                
        } else if($_SERVER['REQUEST_METHOD'] === 'PUT'){
                echo json_encode(array('mensagem' => "Método PUT Efetuado"));
        } else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
                echo json_encode(array('mensagem' => "Método DELETE Efetuado"));
        } else {
                echo "Falha no processamento de dados. Método inválido.";
        }