<?php
if (isset($_POST['cep'])) {
    $cep = preg_replace('/[^0-9]/', '', $_POST['cep']); // Sanitiza o CEP

    if (strlen($cep) === 8) {
        $url = "https://viacep.com.br/ws/$cep/json/";

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        $response = curl_exec($ch);
        curl_close($ch);

        if ($response) {
            $data = json_decode($response, true);

            if (isset($data['erro'])) {
                echo json_encode(['erro' => true]);
            } else {
                echo json_encode($data);
            }
        } else {
            echo json_encode(['erro' => true]);
        }
    } else {
        echo json_encode(['erro' => true]);
    }
} else {
    echo json_encode(['erro' => true]);
}
?>