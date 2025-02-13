-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Fev-2025 às 23:46
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `paula-rosangela`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_agendamento`
--

CREATE TABLE `tb_agendamento` (
  `id` int(11) NOT NULL,
  `horario` varchar(255) NOT NULL,
  `data` date NOT NULL,
  `status` enum('agendado','concluido','cancelado') NOT NULL,
  `cliente_servico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_agendamento`
--

INSERT INTO `tb_agendamento` (`id`, `horario`, `data`, `status`, `cliente_servico`) VALUES
(2, '07:00', '2025-02-12', 'agendado', 1),
(3, '08:00', '2025-02-12', 'concluido', 2),
(4, '09:00', '2025-02-12', 'concluido', 3),
(5, '10:00', '2025-02-15', 'cancelado', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_clientes`
--

CREATE TABLE `tb_clientes` (
  `id` int(11) NOT NULL,
  `endereco_id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha_login` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `foto_perfil_cliente` varchar(255) NOT NULL,
  `data_cadastro` date NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `atendido` int(11) NOT NULL,
  `add_cliente_site` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_clientes`
--

INSERT INTO `tb_clientes` (`id`, `endereco_id`, `nome`, `senha_login`, `email`, `foto_perfil_cliente`, `data_cadastro`, `telefone`, `atendido`, `add_cliente_site`) VALUES
(47, 29, 'Daniel Mateus Xavier Tiago', '$2y$10$gY.hJM9hRjlIcpQ99hbihOc9rSB.PZMV8CqglIhoD3Fj0Fhst5JFW', 'danielmxsilva@gmail.com', '', '2025-01-20', '11997615420', 0, 1),
(56, 29, 'Paula Rosangela Tiago Xavier', '$2y$10$EScb99iw8.DaMNCcBvedPuwoSmfvZO/QgkwzQ.KuvG/j7aoH8y91.', 'paularts22@gmail.com', '', '2025-02-11', '11934654813', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_clientes_adicionais`
--

CREATE TABLE `tb_clientes_adicionais` (
  `id` int(11) NOT NULL,
  `cliente_adicional_nmr` int(11) NOT NULL,
  `cliente_servico_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_clientes_adicionais`
--

INSERT INTO `tb_clientes_adicionais` (`id`, `cliente_adicional_nmr`, `cliente_servico_id`) VALUES
(1, 2, 3),
(2, 3, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cliente_servico`
--

CREATE TABLE `tb_cliente_servico` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `servico_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cliente_servico`
--

INSERT INTO `tb_cliente_servico` (`id`, `cliente_id`, `servico_id`) VALUES
(1, 38, 1),
(2, 38, 3),
(3, 38, 5),
(4, 38, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_codigos_recuperacao`
--

CREATE TABLE `tb_codigos_recuperacao` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `codigo` varchar(6) NOT NULL,
  `expira_em` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_creditos`
--

CREATE TABLE `tb_creditos` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `valor_credito` float NOT NULL,
  `saldo_restante` float NOT NULL,
  `data_criacao` datetime NOT NULL DEFAULT current_timestamp(),
  `data_expiracao` date NOT NULL,
  `status` enum('ativo','expirado') NOT NULL DEFAULT 'ativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_creditos`
--

INSERT INTO `tb_creditos` (`id`, `cliente_id`, `valor_credito`, `saldo_restante`, `data_criacao`, `data_expiracao`, `status`) VALUES
(1, 47, 25.3, 25.3, '2025-01-28 19:50:53', '2025-02-28', 'ativo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cupons`
--

CREATE TABLE `tb_cupons` (
  `id` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `tipo` enum('percentual','fixo') NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL,
  `uso_maximo` int(11) DEFAULT NULL,
  `usos_realizados` int(11) DEFAULT 0,
  `reutilizavel` tinyint(1) DEFAULT 0,
  `status` enum('ativo','inativo','expirado') DEFAULT 'ativo',
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp(),
  `atualizado_em` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cupons`
--

INSERT INTO `tb_cupons` (`id`, `codigo`, `descricao`, `tipo`, `valor`, `data_inicio`, `data_fim`, `uso_maximo`, `usos_realizados`, `reutilizavel`, `status`, `criado_em`, `atualizado_em`) VALUES
(1, 'SEMANALEVE', 'Desconto nas segundas e terças feiras', 'percentual', '10.00', '2025-01-19', '2025-02-28', 5, 2, 1, 'ativo', '2025-01-19 20:01:46', '2025-02-06 23:16:00'),
(2, 'CUPOM', 'cupom de teste', 'fixo', '15.00', '2025-01-25', '2025-02-20', 5, 0, 0, 'ativo', '2025-01-26 19:12:37', '2025-02-06 23:16:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cupons_dias`
--

CREATE TABLE `tb_cupons_dias` (
  `id` int(11) NOT NULL,
  `cupom_id` int(11) NOT NULL,
  `dia` enum('domingo','segunda','terça','quarta','quinta','sexta','sábado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_cupons_dias`
--

INSERT INTO `tb_cupons_dias` (`id`, `cupom_id`, `dia`) VALUES
(1, 1, 'segunda'),
(2, 1, 'terça');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_endereco`
--

CREATE TABLE `tb_endereco` (
  `id` int(11) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `numero_casa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`id`, `cep`, `cidade`, `bairro`, `rua`, `numero_casa`) VALUES
(29, '13299-010', 'Itupeva', 'Monte Serrat', 'Avenida Nelson Gulla', 1426);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_financeiro`
--

CREATE TABLE `tb_financeiro` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `agendamento_id` int(11) NOT NULL,
  `pacotes_id` int(11) NOT NULL,
  `valor_total` int(11) NOT NULL,
  `tipo_transacao` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `data_transacao` date NOT NULL,
  `forma_pagamento` int(11) NOT NULL,
  `observacao` text NOT NULL,
  `atualizado_em` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pacote`
--

CREATE TABLE `tb_pacote` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `servico_id` int(11) NOT NULL,
  `agendamento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_servico`
--

CREATE TABLE `tb_servico` (
  `id` int(11) NOT NULL,
  `foto_servico` varchar(255) NOT NULL,
  `duracao_servico` varchar(255) NOT NULL,
  `preco_servico` varchar(255) NOT NULL,
  `nome_servico` varchar(255) NOT NULL,
  `descricao_servico` text NOT NULL,
  `nome_servico_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_servico`
--

INSERT INTO `tb_servico` (`id`, `foto_servico`, `duracao_servico`, `preco_servico`, `nome_servico`, `descricao_servico`, `nome_servico_id`) VALUES
(1, 'fundo-servico-exemplo.jpg', '2:00', '50,00', 'Manicure e Pedicure Completo e Bem Estar teste', 'Essa é uma breve descrição opcional do meu serviço', 'manicure-pedicure'),
(2, 'fundo-servico-exemplo.jpg', '1:00', '39,99', 'Manicure Completa e Bem Estar', 'Essa é uma breve descrição opcional do meu serviço', 'manicure'),
(3, 'fundo-servico-exemplo.jpg', '0:40', '14,99', 'Corte de Unha Mão', 'Essa é uma breve descrição opcional do meu serviço', 'manicure-corte'),
(4, 'manicure-esmaltacao-img.jpg', '0:40', '14,99', 'Esmaltação Mão', 'Essa é uma breve descrição opcional do meu serviço', 'manicure-esmaltacao'),
(5, 'fundo-servico-exemplo.jpg', '1:00', '29,99', 'Pedicure', 'Essa é uma breve descrição opcional do meu serviço', 'pedicure'),
(6, 'fundo-servico-exemplo.jpg', '0:40', '14,99', 'Corte de Unha Pé', 'Essa é uma breve descrição opcional do meu serviço', 'pedicure-corte'),
(7, 'fundo-servico-exemplo.jpg', '0:40', '14,99', 'Esmaltação Pé', 'Essa é uma breve descrição opcional do meu serviço', 'pedicure-esmaltacao'),
(8, 'fundo-servico-exemplo.jpg', '0:40', '30,00', 'Spa do pé', 'Essa é uma breve descricão', 'pedicure-spa-do-pe'),
(9, 'fundo-servico-exemplo.jpg', '0:40', '49,99', 'Plástica dos Pés', 'Descrição', 'pedicure-plastica-dos-pes'),
(10, 'fundo-servico-exemplo.jpg', '0:40', '20,00', 'Limpeza Simples de Sobrancelhas', 'Essa é uma breve descrição opcional', 'sobrancelhas-limpeza-simples'),
(11, 'fundo-servico-exemplo.jpg', '0:40', '10,00', 'Aplicação Henna', 'Breve descrição do serviço', 'sobrancelhas-aplicacao-henna'),
(12, 'fundo-servico-exemplo.jpg', '1:00', '24,99', 'Corte', 'Breve ', 'along-corte'),
(13, 'fundo-servico-exemplo.jpg', '1:00', '24,99', 'Manutenção', 'descrição', 'along-manutenção'),
(14, 'fundo-servico-exemplo.jpg', '1:00', '24,99', 'Remoção', 'do serviço', 'along-remocao'),
(15, 'fundo-servico-exemplo.jpg', '1:00', '39,99', 'Concerto', 'descrição', 'along-concerto'),
(16, 'fundo-servico-exemplo.jpg', '1:00', '24,99', 'Esmaltação em Gel', 'breve descrição', 'along-esmaltacaogel'),
(17, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Fibra de vidro', 'descrição', 'along-fibra-de-vidro'),
(18, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Alongamento em Gel', 'descrição', 'along-gel'),
(19, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Poligel', 'descrição', 'along-poligel'),
(20, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Seda', 'descrição', 'along-seda'),
(21, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Tips', 'descrição', 'along-tips'),
(22, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Banho em Gel', 'descrição', 'along-banhogel'),
(23, 'fundo-servico-exemplo.jpg', '1:00', '9,99', 'Blindagem', 'descrição', 'along-blindagem');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_tarifas`
--

CREATE TABLE `tb_tarifas` (
  `id` int(11) NOT NULL,
  `nome_tarifa` varchar(255) NOT NULL,
  `valor_tarifa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_tarifas`
--

INSERT INTO `tb_tarifas` (`id`, `nome_tarifa`, `valor_tarifa`) VALUES
(1, 'Tarifa Adicional', '10,00'),
(2, 'Acréscimo noturno', '5,00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_tokens`
--

CREATE TABLE `tb_tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `expira_em` datetime NOT NULL,
  `usado` tinyint(1) DEFAULT 0,
  `criado_em` datetime DEFAULT current_timestamp(),
  `ip_origem` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_tokens`
--

INSERT INTO `tb_tokens` (`id`, `user_id`, `token`, `tipo`, `expira_em`, `usado`, `criado_em`, `ip_origem`) VALUES
(29, 47, 'd67c01a622404b84e124ea0c8df834715b6e47ae953543e2efbbd8bc999994f1', 'cadastro', '2026-02-13 19:34:39', 0, '2025-01-20 16:40:48', '127.0.0.1'),
(32, 47, '5899212559000fa47e58630a54ced08cf150288bf65eb5bc3920f88250614196', 'login', '2026-02-08 13:36:11', 0, '2025-02-08 13:36:11', '::1'),
(40, 56, 'd0c7dd584b113a1395958e63de7989aeb0cd0f24fdb6300789d47d48847db99b', 'cadastro', '2026-02-11 06:26:01', 0, '2025-02-11 06:26:01', '127.0.0.1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_uso_cupons`
--

CREATE TABLE `tb_uso_cupons` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `cupom_id` int(11) NOT NULL,
  `data_uso` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('usado','cancelado') DEFAULT 'usado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_uso_cupons`
--

INSERT INTO `tb_uso_cupons` (`id`, `cliente_id`, `cupom_id`, `data_uso`, `status`) VALUES
(3, 47, 2, '2025-02-06 23:24:27', 'cancelado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_agendamento`
--
ALTER TABLE `tb_agendamento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_clientes`
--
ALTER TABLE `tb_clientes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_clientes_adicionais`
--
ALTER TABLE `tb_clientes_adicionais`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_cliente_servico`
--
ALTER TABLE `tb_cliente_servico`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_codigos_recuperacao`
--
ALTER TABLE `tb_codigos_recuperacao`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `tb_creditos`
--
ALTER TABLE `tb_creditos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`);

--
-- Índices para tabela `tb_cupons`
--
ALTER TABLE `tb_cupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Índices para tabela `tb_cupons_dias`
--
ALTER TABLE `tb_cupons_dias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cupom_id` (`cupom_id`);

--
-- Índices para tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_financeiro`
--
ALTER TABLE `tb_financeiro`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_pacote`
--
ALTER TABLE `tb_pacote`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_servico`
--
ALTER TABLE `tb_servico`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_tarifas`
--
ALTER TABLE `tb_tarifas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_tokens`
--
ALTER TABLE `tb_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `tb_uso_cupons`
--
ALTER TABLE `tb_uso_cupons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `cupom_id` (`cupom_id`);

--
-- Índices para tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_agendamento`
--
ALTER TABLE `tb_agendamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_clientes`
--
ALTER TABLE `tb_clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de tabela `tb_clientes_adicionais`
--
ALTER TABLE `tb_clientes_adicionais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_cliente_servico`
--
ALTER TABLE `tb_cliente_servico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_codigos_recuperacao`
--
ALTER TABLE `tb_codigos_recuperacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT de tabela `tb_creditos`
--
ALTER TABLE `tb_creditos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tb_cupons`
--
ALTER TABLE `tb_cupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_cupons_dias`
--
ALTER TABLE `tb_cupons_dias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `tb_financeiro`
--
ALTER TABLE `tb_financeiro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pacote`
--
ALTER TABLE `tb_pacote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_servico`
--
ALTER TABLE `tb_servico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `tb_tarifas`
--
ALTER TABLE `tb_tarifas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_tokens`
--
ALTER TABLE `tb_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `tb_uso_cupons`
--
ALTER TABLE `tb_uso_cupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_creditos`
--
ALTER TABLE `tb_creditos`
  ADD CONSTRAINT `tb_creditos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `tb_clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tb_cupons_dias`
--
ALTER TABLE `tb_cupons_dias`
  ADD CONSTRAINT `tb_cupons_dias_ibfk_1` FOREIGN KEY (`cupom_id`) REFERENCES `tb_cupons` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `tb_tokens`
--
ALTER TABLE `tb_tokens`
  ADD CONSTRAINT `tb_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_clientes` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `tb_uso_cupons`
--
ALTER TABLE `tb_uso_cupons`
  ADD CONSTRAINT `tb_uso_cupons_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `tb_clientes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tb_uso_cupons_ibfk_2` FOREIGN KEY (`cupom_id`) REFERENCES `tb_cupons` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
