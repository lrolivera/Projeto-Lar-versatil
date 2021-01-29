<?php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $database = "larversatil";

   $conn = mysqli_connect($servername, $username, $password, $database);


   if (!$conn) {
     die("A conexão ao BD Falhou" . mysqli_connect_error());

   }

   if(isset($_POST['nome']) && isset($_POST['msg'])){
     $nome = $_POST['nome'];
     $msg = $_POST['msg'];

     $sql = "insert into comentarios (nome, msg) values ('$nome', '$msg')";
     $result = $conn->query($sql);
   }
  
   ?>


<!DOCTYPE html>

<html lang = "pt-br">

  <head>
      <meta charset = "UTF-8">
      <Title>Contatos - Lar versátil</Title>
      <link rel = "stylesheet" href = "./Css/estilo-larversatil3.css">

      <link rel="icon" href="./imagens/logopag.png">

      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif&family=Press+Start+2P&family=Ruslan+Display&family=Ubuntu+Mono&family=Yeseva+One&display=swap" rel="stylesheet">
  </head>

  <body>

      <!--menu-->
      <?php 
        include_once('menu.html');
      ?>
      <!--Fim do menu-->

     <header>
      <!-- Nome da página-->
    <h2>Contato</h2>
    <hr>
     <!--Fim do nome da página-->

    </header>

    <!--Contatos-->
    <div class = "contatos">
            <div  class="contato" >
                <img src="./imagens/Contato/logoemail.png" >
                <p>Contato@larversatil.com</p>
            </div>

            <div class= "contato" >
                <img src="./imagens/Contato/logowhatsapp.jpg" >
                <p>(11) 99999 - 9999</p>
            </div>
        
    </div>
    <br><br><br><br><br>

    <!--fim dos contatos -->


    <!--Sugestão-->

    <form method="post" action="" class="sugestao">
        <h3 id="comentario">Deixe sua sugestão aqui ;)</h3>
        <h5> Nome: </h5>
        <input type="text" name="nome" style="width: 500px;">
        <h5> Mensagem: </h4>
        <input type="text" name="msg" style="width: 500px;"></input>

       <p><input type="submit" value="Enviar"></p>

     </form>

     <h4 style="text-align:center"> <a href="./resposta.php"> Relatório </a> </h4>
  <br><br><br><br><br>

  <!--Fim da sugestão -->


<!--Rodapé-->

 <footer id = "rodape" >
   <p id= "Formasdepamento"> Formas de pagamento </p>
   <img src="../imagens/formas-de-pagamento.png" >
   <p> &copy; Larissa - Recode Pro</p>
 </footer>

<!-- Fim do Rodapé-->
  </body>

</html>