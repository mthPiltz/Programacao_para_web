<?php
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $cep = $_POST["cep"];
    $telefone = $_POST["telefone"];
    $dataNascimento = $_POST["dataNacimento"];


    $cabecalho = ['nome', 'sobrenome', 'cep', 'telefone', 'data de nascimento'];

    $dados = [
        'nome' => $nome,
        'sobrenome' => $sobrenome,
        'cep' => $cep,
        'telefone' => $telefone,
        'data de nascimento' => $dataNascimento
    ];

    $arquivo = fopen('file.csv', 'w');

    fputcsv($arquivo, $cabecalho, ';');
    fputcsv($arquivo, $dados, ';');


    fclose($arquivo);
?>