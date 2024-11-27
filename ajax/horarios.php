<?php
// Inclua o arquivo de configuração do banco de dados
include('../config.php');

// Defina o cabeçalho para JSON
header('Content-Type: application/json');

// Obtenha a data da requisição
$data = isset($_GET['data']) ? $_GET['data'] : die(json_encode(['error' => 'Data não fornecida.']));

// Converta a data para o formato adequado
$dataFormatada = date('Y-m-d', strtotime($data));

// Prepare a consulta para verificar a disponibilidade
$query = "SELECT horario FROM tb_agendamento WHERE data = ?";
$conn = Mysql::conectar(); // Use a conexão da classe Mysql

// Prepare a consulta
$stmt = $conn->prepare($query);

// Execute a consulta, passando o parâmetro
$stmt->execute([$dataFormatada]);

// Array para armazenar os horários agendados
$horariosAgendados = $stmt->fetchAll(PDO::FETCH_COLUMN);

// Horários disponíveis (defina aqui os horários que você deseja)
$horariosDisponiveis = [
    '07:00', '08:00', '09:00', '10:00', '11:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00'
];

// Verifique se os horários estão disponíveis
foreach ($horariosAgendados as $horario) {
    if (in_array($horario, $horariosDisponiveis)) {
        $key = array_search($horario, $horariosDisponiveis);
        if ($key !== false) {
            unset($horariosDisponiveis[$key]); // Remove horário agendado da lista disponível
        }
    }
}

// Se restar horários disponíveis, considere como disponível
$isDisponivel = !empty($horariosDisponiveis);

// Retornar a resposta com os horários disponíveis
echo json_encode([
    'disponivel' => $isDisponivel,
    'horarios' => array_values($horariosDisponiveis) // Retorna os horários disponíveis restantes
]);

// Fechar a conexão (opcional, já que o PDO é gerenciado automaticamente)
?>
