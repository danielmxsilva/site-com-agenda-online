<?php

	class Painel 
	{

		public static function selectAll($tabela,$start = null,$end = null){
			if($start == null && $end == null){
				$sql = Mysql::conectar()->prepare("SELECT * FROM `$tabela`");
			}else{
				$sql = Mysql::conectar()->prepare("SELECT * FROM `$tabela` ORDER BY order_id ASC LIMIT $start,$end");
			}
			$sql->execute();
			return $sql->fetchAll();
		}

	}

?>