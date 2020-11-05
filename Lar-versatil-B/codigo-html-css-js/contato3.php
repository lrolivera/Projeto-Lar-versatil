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

      <link rel="stylesheet" href="./Css-B/bootstrap.css">

      <link rel="stylesheet" href="./Css-B/bootstrap-grid.css">

      <link rel="icon" href="../imagens/logopag.png">

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
    <div class = "contatos" >
            <div  class="contato" >
                <img src="../imagens/Contato/logoemail.png" >
                <p>Contato@larversatil.com</p>
            </div>

            <div class= "contato" >
                <img src="../imagens/Contato/logowhatsapp.jpg" >
                <p>(11) 99999 - 9999</p>
            </div>
        
    </div>
    <br><br><br><br><br>

    <!--fim dos contatos -->


    <!--Sugestão-->
    <form  method="post" class="p-3 mb-2 bg-warning text-dark" >
      <div class="form-group">
        <h4 id="comentario">Deixe sua sugestão aqui ;)</h4>
        <label for="">Nome:</label>
        <input type="text" class="form-control" name="nome"  placeholder="Seu nome">
      </div>
      <div class="form-group">
        <label for="">Mensagem:</label>
        <input type="text" class="form-control" name="msg"  placeholder="Escreva sua Mensagem">
      </div>
      <button type="submit" class="btn btn-dark">Enviar</button>
   </form>


<br><br><br><br><br>
     <h5  class="p-3 mb-2 bg-warning text-dark" style="text-align:center"> <a href="./resposta.php"> Relatório </a> </h5>
  <br><br><br><br><br>

  <!--Fim da sugestão -->


<!--Rodapé-->

<?php 
         include_once('footer.html');
        ?>

<!-- Fim do Rodapé-->
  </body>

</html>