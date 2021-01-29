<?php

    require_once('./connectbanco.php');
    
    $sql = "SELECT idprodutos, nomeprodutos, descricao, preco, precofinal, nomeimg
            FROM Produtos;";
    $result = query($sql);
    $produto = [];

    if ($result->num_rows >0) {
        while ($rows = mysqli_fetch_assoc($result)) {
            $produto[] = $rows;
        }
    }

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    echo json_encode($produto);

?>