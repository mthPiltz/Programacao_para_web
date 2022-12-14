<?php
    
    $path = explode('/', $_GET['path']);
    $contents = file_get_contents('db.jon');

    $contents_json = json_decode($constants);

    $method = $_SERVER['REQUEST-METHOD'];

    header('content-type: aplication/json');
    $body = file_get_contents('php://input');

    $dados = [
        "ARS" => [
            "ask" => "0.0396",
            "bid" => "0.0396",
            "code" => "ARS",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:21",
            "high" => "0.04",
            "low" => "0.0394",
            "name" => "Peso Argentino/Real Brasileiro",
            "pctChange" => "-0.75",
            "timestamp" => "1653685161",
            "varBid" => "-0.0003"
          ],
          "AUD" => [
            "ask" => "3.3891",
            "bid" => "3.3869",
            "code" => "AUD",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:20",
            "high" => "3.4205",
            "low" => "3.3733",
            "name" => "Dólar Australiano/Real Brasileiro",
            "pctChange" => "0.12",
            "timestamp" => "1653685160",
            "varBid" => "0.0039"
          ],
          "BTC" => [
            "ask" => "137.338",
            "bid" => "137.161",
            "code" => "BTC",
            "codein" => "BRL",
            "create_date" => "2022-05-27 18:53:07",
            "high" => "142.576",
            "low" => "135.05",
            "name" => "Bitcoin/Real Brasileiro",
            "pctChange" => "-3.48",
            "timestamp" => "1653688387",
            "varBid" => "-4939"
          ],
          "CAD" => [
            "ask" => "3.7193",
            "bid" => "3.7171",
            "code" => "CAD",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:20",
            "high" => "3.7534",
            "low" => "3.6996",
            "name" => "Dólar Canadense/Real Brasileiro",
            "pctChange" => "-0.36",
            "timestamp" => "1653685160",
            "varBid" => "-0.0136"
          ],
          "CHF" => [
            "ask" => "4.9418",
            "bid" => "4.9392",
            "code" => "CHF",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:18",
            "high" => "4.9959",
            "low" => "4.932",
            "name" => "Franco Suíço/Real Brasileiro",
            "pctChange" => "-0.56",
            "timestamp" => "1653685158",
            "varBid" => "-0.0279"
          ],
          "CNY" => [
            "ask" => "0.7066",
            "bid" => "0.7062",
            "code" => "CNY",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:02",
            "high" => "0.7139",
            "low" => "0.7042",
            "name" => "Yuan Chinês/Real Brasileiro",
            "pctChange" => "-0.15",
            "timestamp" => "1653685142",
            "varBid" => "-0.001"
          ],
          "DOGE" => [
            "ask" => "0.387317",
            "bid" => "0.387317",
            "code" => "DOGE",
            "codein" => "BRL",
            "create_date" => "2022-05-27 18:53:22",
            "high" => "0.401534",
            "low" => "0.365633",
            "name" => "Dogecoin/Real Brasileiro",
            "pctChange" => "2.36",
            "timestamp" => "1653688402",
            "varBid" => "0.008928"
          ],
          "ETH" => [
            "ask" => "8.34739",
            "bid" => "8.31785",
            "code" => "ETH",
            "codein" => "BRL",
            "create_date" => "2022-05-27 18:53:08",
            "high" => "8.86877",
            "low" => "8.2",
            "name" => "Ethereum/Real Brasileiro",
            "pctChange" => "-5.09",
            "timestamp" => "1653688388",
            "varBid" => "-447.61"
          ],
          "EUR" => [
            "ask" => "5.0807",
            "bid" => "5.077",
            "code" => "EUR",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:20",
            "high" => "5.1349",
            "low" => "5.0515",
            "name" => "Euro/Real Brasileiro",
            "pctChange" => "-0.67",
            "timestamp" => "1653685160",
            "varBid" => "-0.034"
          ],
          "GBP" => [
            "ask" => "5.9732",
            "bid" => "5.9692",
            "code" => "GBP",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:20",
            "high" => "6.0422",
            "low" => "5.9485",
            "name" => "Libra Esterlina/Real Brasileiro",
            "pctChange" => "-0.55",
            "timestamp" => "1653685160",
            "varBid" => "-0.0332"
          ],
          "ILS" => [
            "ask" => "1.4139",
            "bid" => "1.413",
            "code" => "ILS",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:03",
            "high" => "1.4263",
            "low" => "1.4085",
            "name" => "Novo Shekel Israelense/Real Brasileiro",
            "pctChange" => "-0.68",
            "timestamp" => "1653685143",
            "varBid" => "-0.0097"
          ],
          "JPY" => [
            "ask" => "0.03725",
            "bid" => "0.03719",
            "code" => "JPY",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:19",
            "high" => "0.03766",
            "low" => "0.03711",
            "name" => "Iene Japonês/Real Brasileiro",
            "pctChange" => "-0.8",
            "timestamp" => "1653685159",
            "varBid" => "-0.0003"
          ],
          "LTC" => [
            "ask" => "297.47",
            "bid" => "295.92",
            "code" => "LTC",
            "codein" => "BRL",
            "create_date" => "2022-05-27 18:53:11",
            "high" => "311.86",
            "low" => "290.61",
            "name" => "Litecoin/Real Brasileiro",
            "pctChange" => "-3.89",
            "timestamp" => "1653688391",
            "varBid" => "-12.04"
          ],
          "USD" => [
            "ask" => "4.7326",
            "bid" => "4.7295",
            "code" => "USD",
            "codein" => "BRL",
            "create_date" => "2022-05-27 17:59:23",
            "high" => "4.781",
            "low" => "4.7153",
            "name" => "Dólar Americano/Real Brasileiro",
            "pctChange" => "-0.77",
            "timestamp" => "1653685163",
            "varBid" => "-0.0366"
          ],
          "USDT" => [
            "ask" => "4.9",
            "bid" => "4.62",
            "code" => "USD",
            "codein" => "BRLT",
            "create_date" => "2022-05-27 16:16:00",
            "high" => "4.8",
            "low" => "4.74",
            "name" => "Dólar Americano/Real Brasileiro Turismo",
            "pctChange" => "-0.52",
            "timestamp" => "1653678960",
            "varBid" => "-0.025"
          ],
          "XRP" => [
            "ask" => "1.84",
            "bid" => "1.84",
            "code" => "XRP",
            "codein" => "BRL",
            "create_date" => "2022-05-27 18:52:48",
            "high" => "1.94",
            "low" => "1.8",
            "name" => "XRP/Real Brasileiro",
            "pctChange" => "-3.63",
            "timestamp" => "1653688368",
            "varBid" => "-0.07"
          ]
    ];

    $json = json_encode($dados, x'
                        JSON_PRETTY_PRINT | 
                        JSON_UNESCAPED_UNICODE |
                        JSON_UNESCAPED_SLASHES |
                        JSON_NUMERIC_CHECK);

    if($method === 'GET'){
        if($json[$path[0]]){
            echo json_encode($json[$path[0]]);
        }
        else{
            echo '[]';
        }
    }

    // echo "<pre>";
    // print_r ($json);
    // echo "</pre>";

    $decode = json_decode($json, true);

    // echo "<pre>";
    // print_r ($decode);
    // echo "</pre>";