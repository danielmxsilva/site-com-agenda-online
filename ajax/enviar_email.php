<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../vendor/autoload.php'; // Inclui o autoload do Composer para carregar o PHPMailer

    function enviarCodigoRecuperacao($emailCliente, $codigoRecuperacao) {

        $mail = new PHPMailer(true);
        
        try {
            // Configurações do servidor SMTP
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com'; // Servidor SMTP do Gmail
            $mail->SMTPAuth = true;
            $mail->Username = 'contato@paularosangelanails.com.br'; // Seu e-mail
            $mail->Password = 'Kaique#171'; // Sua senha do e-mail
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Criptografia TLS
            $mail->Port = 465; // Porta SMTP 

            // Configurações do e-mail
            $mail->setFrom('contato@paularosangelanails.com.br ', 'Paula Rosangela Nail'); // E-mail e nome do remetente
            $mail->addAddress($emailCliente); // Adiciona o destinatário

            // Conteúdo do e-mail
            $mail->isHTML(true);
            $mail->Subject = 'Código de Recuperação de Senha';
            $mail->Body = "
                <h1>Recuperação de Senha</h1>
                <p>Olá</p>
                <p>Seu código de recuperação de senha é:</p>
                <h2 style='color: #5A9;'>$codigoRecuperacao</h2>
                <p>Por favor, insira este código no formulário para continuar o processo de recuperação.</p>
            ";
            $mail->AltBody = "Seu código de recuperação de senha é: $codigoRecuperacao"; // Texto plano para clientes que não suportam HTML

            //var_dump($mail);

            try {
                $mail->send();
                //echo 'E-mail enviado com sucesso!';
            } catch (Exception $e) {
                echo "Erro ao enviar e-mail: {$e->errorMessage()}";
            }

            // Envia o e-mail
            
            registrarLog($emailCliente, 'Código de recuperação enviado');
            return true;
        } catch (Exception $e) {
            registrarLog($emailCliente, 'Erro ao enviar o código: ' . $e->getMessage());
            return false;
        }

        //var_dump($mail);

        //$mail->SMTPDebug = PHPMailer::DEBUG_SERVER; // Habilita o modo detalhado
    }

    function registrarLog($email, $mensagem) {
        // Implemente a lógica para registrar logs em um arquivo ou banco de dados
        // Exemplo:
        error_log("[$email] $mensagem");
    }

?>