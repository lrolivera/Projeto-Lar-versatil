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

<!DOCTYPE html>

<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <Title>Produtos - Lar Versátil</Title>
  <link rel="stylesheet" href="./Css/estilo-larversatil3.css">

  <link rel="stylesheet" href="./Css-B/bootstrap.css">

  <link rel="stylesheet" href="./Css-B/bootstrap-grid.css">

  <link rel="icon" href="../imagens/logopag.png">


</head>

<body>


  <header>
    <!--menu-->
    <?php 
         include_once('menu.html');
        ?>

    <!-- Nome da página-->
    <h2>Produtos</h2>
    <hr>
    <!--Fim do nome da página-->

  </header>

  <div class="organizar">
    <div class="categorias" class="navbar flex-column">
      <h3>Categorias</h3>
      <h4>
        <li onclick="exibir_todos()"> Todos (12)</li>
        <li onclick="exibir_categoria('geladeira')"> Geladeiras (3)</li>
        <li onclick="exibir_categoria('fogao')"> Fogões (2)</li>
        <li onclick="exibir_categoria('microondas')"> Microondas (3)</li>
        <li onclick="exibir_categoria('lavadouraderoupas')"> Lavadoura de Roupas (2)</li>
        <li onclick="exibir_categoria('lavaloucas')"> Lava-louças (2)</li>
      </h4>
    </div>

    <div class="flex">

      <?php

              $sql = "select * from Produtos";
              $result = $conn->query($sql);
          
              if($result->num_rows > 0){
                while ($rows = $result->fetch_assoc()){
                  
            ?>

      <div class="selecaodeprodutos" class="container" id="<?php echo $rows["id_produtos"];?>">
        <img src="<?php echo $rows["nome_img"];?>">
        <br>
        <h5 id="titulo"><?php echo $rows["nome_produtos"];?></h5>
        <hr>
        <p id="preço"><?php echo $rows["preco"];?></p>
        <h3 id="promoçao"><?php echo $rows["precofinal"];?></h3>
      </div>


      <?php 
            
               }
            
                }else {
                   echo "Nenhum produto cadastrado:";
                }

               ?>

    </div>

  </div>

  <!--Rodapé-->
  <br> <br> <br> <br> <br> <br>

  <?php 
         include_once('footer.html');
        ?>

  <!-- Fim do Rodapé-->

  <script type="text/javascript" src="./Js/Javascript_Larversatil3.js"> </script>
</body>

</html>