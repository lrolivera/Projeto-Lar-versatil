<!DOCTYPE html>

<html lang = "pt-br">

    <head>
        <meta charset = "UTF-8">
        <Title>Relatório - Lar versátil</Title>
        <link rel = "stylesheet" href = "./Css/estilo-larversatil3.css">

        <link rel="icon" href="./imagens/logopag.png">

        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif&family=Press+Start+2P&family=Ruslan+Display&family=Ubuntu+Mono&family=Yeseva+One&display=swap" rel="stylesheet">
    </head>


      <body>

            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "larversatil";

            $conn = mysqli_connect($servername, $username, $password, $database);


            if (!$conn) {
                die("A conexão ao BD Falhou" . mysqli_connect_error());

            }

            ?>

            <?php

            $sql = "select * from comentarios";
            $result = $conn->query($sql);

            if($result->num_rows > 0){
            while ($rows = $result->fetch_assoc()){
                echo "Data:", $rows['data'], "<br>";
                echo "Nome:", $rows['nome'], "<br>";
                echo "Mensagem:", $rows['msg'], "<br>";
                echo "<hr>";
            }
            }else{
                echo "Nenhum comentário ainda!", "<br>";
            }
                
            ?>

            <h4><a href="./contato3.php"> Contato </a> </h4>

        </body>
  </html>
                