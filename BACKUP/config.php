<?php

	session_start();
	ob_start();

	date_default_timezone_set('America/Sao_Paulo');

	$autoload = function($class){
		include('classes/'.$class.'.php');
	};

	spl_autoload_register($autoload);

	define('HOST','localhost');
	define('USER','u626543094_paularosangela');
	define('PASSWORD','Kaique.171');
	define('DATABASE','u626543094_paularosangela');
	define("INCLUDE_PATH" , "https://paularosangelanails.com.br/");
	define('INCLUDE_PATH_PAINEL',INCLUDE_PATH.'painel/');
	define('BASE_DIR_PAINEL', __DIR__ . '/painel');



?>