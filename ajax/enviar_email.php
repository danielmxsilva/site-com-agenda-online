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
            $mail->setFrom('contato@paularosangelanails.com.br ', 'Paula Rosangela Nails'); // E-mail e nome do remetente
            $mail->addAddress($emailCliente); // Adiciona o destinatário

            $mail->CharSet = 'UTF-8'; // Define a codificação do e-mail

            // Conteúdo do e-mail
            $mail->isHTML(true);
            $mail->Subject = 'Código de Recuperação de Senha: ' . $codigoRecuperacao;
            $mail->Body = "
               <div style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
                <!-- Logo -->
                <div style='text-align: center; padding: 20px 0;'>
                    <img src='https://paularosangelanails.com.br/img/logo/NOVO-LOGO-SITE.png' alt='Paula Rosangela Nail Design' style='max-width: 150px;'>
                </div>

                <!-- Conteúdo Principal -->
                <div style='background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px;'>
                    <h1 style='color: #4CAF50; text-align: center;'>Recuperação de Senha</h1>
                    <p>Olá,</p>
                    <p>Recebemos sua solicitação para redefinir a senha de acesso ao nosso sistema. Utilize o código abaixo para continuar o processo:</p>
                    <div style='text-align: center; margin: 20px 0;'>
                        <span style='font-size: 24px; font-weight: bold; color: #4CAF50;'>$codigoRecuperacao</span>
                    </div>
                    <p style='font-size: 14px; color: #555;'>
                        Este código é válido por <strong>15 minutos</strong>. Após esse período, será necessário solicitar um novo código.
                    </p>
                    <p>Se você não solicitou a recuperação, ignore este e-mail. Sua senha permanecerá inalterada.</p>
                </div>

                <!-- Rodapé -->
                <div style='text-align: center; font-size: 12px; color: #777; margin-top: 20px;'>
                    <p><strong>Paula Rosangela Nail Design</strong></p>
                    <p>contato@paularosangelanails.com.br</p>
                    <p>Este é um e-mail automático. Por favor, não responda.</p>
                </div>
            </div>
        ";
            $mail->AltBody = "Olá, tudo bem? Recebemos sua solicitação para redefinir a senha. Seu código de recuperação é: $codigoRecuperacao. \n
                Este código é válido por 15 minutos. Após esse período, será necessário solicitar um novo código.\n
                Caso você não tenha solicitado a recuperação de senha, ignore este e-mail.\n
                Paula Rosangela Nail Design"; // Texto plano para clientes que não suportam HTML

            //var_dump($mail); https://paularosangelanails.com.br/img/logo/NOVO-LOGO-SITE.png

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