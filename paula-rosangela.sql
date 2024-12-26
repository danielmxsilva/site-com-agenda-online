-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Dez-2024 às 22:16
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
  `status` int(11) NOT NULL,
  `cliente_servico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_agendamento`
--

INSERT INTO `tb_agendamento` (`id`, `horario`, `data`, `status`, `cliente_servico`) VALUES
(1, '07:00', '2024-12-23', 0, 1);

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
(1, 1, 'Daniel Mateus Xavier Tiago', '$2b$12$TxWryTIuOa3TDDNtokNieuw06eMlFWb8bmPxtlkan.EVPxtzGesdO', 'danielmxsilva@gmail.com', '', '2024-12-12', '11997615420', 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_clientes_adicionais`
--

CREATE TABLE `tb_clientes_adicionais` (
  `id` int(11) NOT NULL,
  `cliente_adicional_id` int(11) NOT NULL,
  `cliente_servico_id` int(11) NOT NULL,
  `servico_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cliente_servico`
--

CREATE TABLE `tb_cliente_servico` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `servico_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

--
-- Extraindo dados da tabela `tb_codigos_recuperacao`
--

INSERT INTO `tb_codigos_recuperacao` (`id`, `email`, `codigo`, `expira_em`) VALUES
(15, 'danielmxsilva@gmail.com', '771675', '2024-12-26 18:15:39');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_credito`
--

CREATE TABLE `tb_credito` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `valor_credito` varchar(255) NOT NULL,
  `data_do_credito` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, '13299010', 'Itupeva', 'Nova Monte Serrat', 'Avenida Nelson Gula ', 1426);

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
(1, 'fundo-servico-exemplo.jpg', '2:00', '49,99', 'Manicure e Pedicure Completo e Bem Estar teste', 'Essa é uma breve descrição opcional do meu serviço', 'manicure-pedicure'),
(2, 'fundo-servico-exemplo.jpg', '1:00', '39,99', 'Manicure Completa e Bem Estar', 'Essa é uma breve descrição opcional do meu serviço', 'manicure'),
(3, 'fundo-servico-exemplo.jpg', '0:40', '14,99', 'Corte de Unha Mão', 'Essa é uma breve descrição opcional do meu serviço', 'manicure-corte'),
(4, 'manicure-esmaltacao-img.jpg', '0:40', '14,99', 'Esmaltação Mão', 'Essa é uma breve descrição opcional do meu serviço', 'manicure-esmaltacao'),
(5, 'fundo-servico-exemplo.jpg', '1:00', '29,99', 'Pedicure', 'Essa é uma breve descrição opcional do meu serviço', 'pedicure'),
(6, 'fundo-servico-exemplo.jpg', '0:40', '14,99', 'Corte de Unha Pé', 'Essa é uma breve descrição opcional do meu serviço', 'pedicure-corte'),
(7, 'fundo-servico-exemplo.jpg', '0:40', '14,99', 'Esmaltação Pé', 'Essa é uma breve descrição opcional do meu serviço', 'pedicure-esmaltacao'),
(8, 'fundo-servico-exemplo.jpg', '0:40', '39,99', 'Spa do pé', 'Essa é uma breve descricão', 'pedicure-spa-do-pe'),
(9, 'fundo-servico-exemplo.jpg', '0:40', '49,99', 'Plástica dos Pés', 'Descrição', 'pedicure-plastica-dos-pes'),
(10, 'fundo-servico-exemplo.jpg', '0:40', '24,99', 'Limpeza Simples de Sobrancelhas', 'Essa é uma breve descrição opcional', 'sobrancelhas-limpeza-simples'),
(11, 'fundo-servico-exemplo.jpg', '0:40', '39,99', 'Aplicação Henna', 'Breve descrição do serviço', 'sobrancelhas-aplicacao-henna'),
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
-- Estrutura da tabela `tb_tokens`
--

CREATE TABLE `tb_tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `tipo` enum('login','reset','verificacao') NOT NULL,
  `expira_em` datetime NOT NULL,
  `usado` tinyint(1) DEFAULT 0,
  `criado_em` datetime DEFAULT current_timestamp(),
  `ip_origem` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_tokens`
--

INSERT INTO `tb_tokens` (`id`, `user_id`, `token`, `tipo`, `expira_em`, `usado`, `criado_em`, `ip_origem`) VALUES
(7, 1, '8cf7789dd769d60f98f2d9c0fc35d7c8e38ee21f325c885ee9162eff44499d72', 'login', '2025-12-25 09:38:18', 0, '2024-12-24 11:36:27', '127.0.0.1');

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
-- Índices para tabela `tb_tokens`
--
ALTER TABLE `tb_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tb_clientes`
--
ALTER TABLE `tb_clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_clientes_adicionais`
--
ALTER TABLE `tb_clientes_adicionais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_cliente_servico`
--
ALTER TABLE `tb_cliente_servico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_codigos_recuperacao`
--
ALTER TABLE `tb_codigos_recuperacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

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
-- AUTO_INCREMENT de tabela `tb_tokens`
--
ALTER TABLE `tb_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_tokens`
--
ALTER TABLE `tb_tokens`
  ADD CONSTRAINT `tb_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_clientes` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
