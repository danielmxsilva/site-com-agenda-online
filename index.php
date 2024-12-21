<?php include('config.php');

	 // Recuperar os serviços da tabela `tb_servico`
	try {
	    $servicos = Painel::selectAll('tb_servico');
	} catch (Exception $e) {
	    die("Erro ao recuperar os serviços: " . $e->getMessage());
	}
	 
?>
<!DOCTYPE html>
<html>
<head>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMK87QLZ');</script>
<!-- End Google Tag Manager -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-REZ760HN5D"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-REZ760HN5D');
</script>
	<title>Paula Rosangela – Manicure e Pedicure em Itupeva, Jundiaí e Região 💅</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<meta name="description" content="Descubra a beleza e o cuidado que suas unhas merecem com os serviços de Paula Rosangela. Agende online de forma prática e transforme seu momento em uma experiência única. Saiba mais no site!">
	<meta name="author" content="Daniel Mateus X Tiago">
	<meta name="keyword" content="Manicure, Pedicure, Atendimento a Domicilio, Itupeva, Jundiai">
	<meta name="og:title" content="Paula Rosangela - Nail Design">
	<meta name="og:url" content="<?php echo INCLUDE_PATH;?>">
	<meta name="og:img" content="<?php echo INCLUDE_PATH;?>img/logo/icone.png">
	<meta name="og:description" content="Atendimento a Domicilio aproveite sem Taxa de Deslocamento">
	<link href="<?php echo INCLUDE_PATH;?>img/logo/icone-site.png" rel="shortcut icon" type="image/png">
	<link href="<?php echo INCLUDE_PATH;?>css/style.css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php echo INCLUDE_PATH;?>css/slick.css" />

	<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '963368409173053');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=963368409173053&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
	 
</head>



<!--
<div id="preloader">
    <div class="spinner"></div>
    <div id="preloader-text">Carregando agora</div>
</div>
-->

<!--

<body>

	<div class="container">

			<div class="texto-header">

				<h1 class="h-header">Em Breve Disponível para Agendamento Online</h2>

				 <div class="contact-container">
				      <h2 class="contact-title">Estamos prontos para atender você!</h2>
				      <p class="contact-description">Fale conosco e agende seu horario.</p>
				      <div class="contact-cards">
				        <div class="contact-card">
				          <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
				          <p><strong>E-mail:</strong></p>
				          <a href="paularts22@gmail.com.br">paularts22@gmail.com.br</a>
				        </div>
				        <div class="contact-card">
				          <div class="contact-icon"><i class="fa-brands fa-whatsapp"></i></div>
				          <p><strong>WhatsApp:</strong></p>
				          <a href="https://wa.me/+5511934654813">(11) 93465-4813</a>
				        </div>
				      </div>
				      <p class="contact-note">🌸 "Porque sua beleza é nossa prioridade."</p>
				   </div>

			</div>

		</div>

</body>


-->

<body>


	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMK87QLZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

	<div class="background-menu"></div>
	<div class="menu-fixo fixed" id="cabecalho">
		
		<div class="container flex" style="align-items: center;">
			<div class="logo">
				<a href="#home">
					<img src="<?php echo INCLUDE_PATH;?>img/logo/logo-limpo-color-nova.png" alt="logo empresa">
				</a><!--#home-->
			</div><!--logo-->
			<div class="menu">
				<nav class="menu-desktop hover-a-class">
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#sobre">Sobre</a></li>
						<li><a href="#servicos">Serviços</a></li>
						<li><a href="#galeria">Galeria</a></li>
						<li><a href="#sessao-agenda">Agenda</a></li>
						<li><a href="#depoimentos">Depoimentos</a></li>
						<li><a href="#contato">Contato</a></li>
						<li><a href="https://nailtips.paularosangelanails.com.br/">NailTips</a></li>
					</ul>
				</nav>
				<div class="btn-chamada btn-desktop"><a href="#sessao-agenda">Agendar Agora</a></div>
				<div class="menu-mobile-icone"><i class="fa-solid fa-bars"></i>
				</div>
			</div><!--menu-->
				<nav class="menu menu-mobile-nav">
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#sobre">Sobre</a></li>
							<li><a href="#servicos">Serviços</a></li>
							<li><a href="#galeria">Galeria</a></li>
							<li><a href="#sessao-agenda">Agenda</a></li>
							<li><a href="#depoimentos">Depoimentos</a></li>
							<li><a href="#contato">Contato</a></li>
							<li><a href="https://nailtips.paularosangelanails.com.br/">NailTips by Paula Rosangela</a></li>
						</ul>
						<div class="btn-chamada btn-mobile" style="display:none;"><a href="#sessao-agenda">Agendar Agora</a></div>
				</nav>
		</div><!--container-->
	</div><!--menu-fixo-->

	<header id="home" class="bg-header" style="background-image: url('img/header/fundo-header.jpg');">

		<!--Particulas-->
			<!--<div id="particles-js"></div>-->
		<!--Final particulas-->

		<div class="bg-sobre-header"></div>

		<div class="container">

			<div class="texto-header">

				<h1 class="h-header">Unhas Incríveis, Estilo Irresistível</h1> <h2>Atendimento a <b>Domicilio</b> sem <b></b> taxa de deslocamento. Aproveite e agende já!</h2>

				<div class="btn-chamada btn-header"><a href="#sessao-agenda">Agendar Agora</a></div>

			</div><!--texto-header-->

		</div><!--container-->

		<div class="arrow">
			<i class="fa-solid fa-circle-chevron-down"></i>
		</div>

	</header><!--bg-header-->

	<section id="sobre" class="sobre">

		<div class="container">

			<div class="flex sobre-box sobre-um">

				<div class="img-sobre">
					<div class="wraper-mockup">
							<img src="<?php echo INCLUDE_PATH;?>img/sobre/img-unha.png" alt="fundo banner home">
					</div><!--wraper-mockup-->
				</div><!--img-sobre-->

				<div class="texto-sobre">
					<div class="wraper-h">
						<h3 class="titulo-h">Cuidado <span class="rosa-span">Especial</span>, resultado impecável</h3>
						<span class="line-h"></span>
					</div><!--wraper-h-->
					<p class="txt-p">Oferecemos serviços de manicure e pedicure a domicilio com atenção a cada detalhe, garantindo que suas unhas não apenas reflitam sua personalidade, mas também recebam o cuidado que merecem. Nossa dedicação é proporcionar resultados perfeitos e uma experiência única em cada atendimento </p>
				</div><!--texto-sobre-->

			</div><!--flex-->

			<div class="flex sobre-box sobre-dois">

				<div class="img-sobre">
					<div class="wraper-mockup">
							<img src="<?php echo INCLUDE_PATH;?>img/sobre/img-unha.png" alt="foto sobre">
					</div><!--wraper-mockup-->
				</div><!--img-sobre-->

				<div class="texto-sobre">
					<div class="wraper-h">
						<h3 class="titulo-h">Unhas personalizadas <span class="rosa-span">Experiência Única</span></h3>
						<span class="line-h"></span>
					</div><!--wraper-h-->
					<p class="txt-p">Nós acreditamos que cada cliente é único, e suas unhas devem refletir isso. Com nossa abordagem personalizada, criamos designs exclusivos e inovadores, feitos sob medida para você. Tudo isso, em sua residência, proporcionando uma experiência memorável e diferenciada.</p>
				</div><!--texto-sobre-->

			</div><!--sobre-box-->

		</div><!--container-->

	</section><!--sobre-->

	<section id="servicos" class="servicos">

		<div class="bg-sobre-servicos"></div>

		<div class="container">

			<div class="facilidades">

				<div class="wraper-h">
					<h3 class="titulo-h color-white">
					Facilidades e <span class="rosa-span">Benefícios Exclusivos</span></h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="flex flex-facilidade">

					<div class="facilidades-single">
						<div class="img-facilidade">
							<i class="fa-regular fa-calendar-check"></i>
						</div><!--img-facilidade-->
						<div class="txt-facilidade">
							<p class="txt-p color-white">Agendamento Online Rápido e Fácil</p>
						</div><!--txt-facilidade-->
					</div><!--facilidades-single-->


					<div class="facilidades-single">
						<div class="img-facilidade">
							<i class="fa-solid fa-calendar-days"></i>
						</div><!--img-facilidade-->
						<div class="txt-facilidade">
							<p class="txt-p color-white">Flexibilidade com agendamentos personalizados e simples</p>
						</div><!--txt-facilidade-->
					</div><!--facilidades-single-->

					<div class="facilidades-single">
						<div class="img-facilidade">
							<i class="fa-solid fa-star"></i>
						</div><!--img-facilidade-->
						<div class="txt-facilidade">
							<p class="txt-p color-white">Aceitamos Cartões de Credito e Debito</p>
						</div><!--txt-facilidade-->
					</div><!--facilidades-single-->

				</div><!--flex-facilidades-->

				<div class="btn-chamada-wraper">

					<div class="btn-chamada"><a href="#sessao-agenda">Agendar Agora</a></div>

				</div><!--btn-chamada-wraper-->

			</div><!--facilidades-->

			<div class="servicos-bloco">

				<div class="wraper-h">
					<h3 class="titulo-h color-white">
					Nossos <span class="rosa-span">Serviços</span> dedicados ao seu bem -estar</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="flex flex-servicos">

					<div class="servicos-single">
						<a href="#sessao-agenda" class="btn-scroll">
						<div class="img-servicos">
							<img src="<?php echo INCLUDE_PATH;?>img/servicos/img-unha.png" alt="fundo sessão serviços">
						</div><!--img-servicos-->

						<div class="txt-servicos">
							<h3 class="txt-p">
					Serviços de Manicure Essencial e Completa com Bem-Estar</h3>
						</div><!--txt-servicos-->

						<div class="txt-facilidade">
							<p class="txt-p">Nosso serviço abrange desde o básico até um acabamento refinado, com cutilagem feita a gosto do cliente para garantir o máximo de perfeição nas suas unhas. Além disso, oferecemos como cortesia lindas decorações, para que você saia com unhas impecáveis e únicas, sem custo adicional. Experimente um momento de beleza e bem-estar pensado especialmente para você!</p>
						</div>

						</a>
					</div><!--servicos-single-->

					<div class="servicos-single">
						<a href="#sessao-agenda" class="btn-scroll">
						<div class="img-servicos">
							<img src="<?php echo INCLUDE_PATH;?>img/servicos/img-unha.png" alt="fundo foto">
						</div><!--img-servicos-->

						<div class="txt-servicos">
							<h3 class="txt-p">
					Serviços de Pedicure Essencial e Completa com Bem-Estar</h3>
						</div><!--txt-servicos-->

						<div class="txt-facilidade">
							<p class="txt-p">Cuide dos seus pés com um serviço personalizado, que vai desde o básico até um acabamento refinado. Incluímos cutilagem feita a gosto do cliente e lixamento especial dos pés, sempre prezando pela segurança com o uso de materiais descartáveis. Como cortesia, oferecemos lindas decorações para deixar suas unhas ainda mais charmosas e únicas, sem custo adicional. Venha desfrutar de um momento de beleza e bem-estar pensado especialmente para você!</p>
						</div>

						</a>
					</div><!--servicos-single-->

					<div class="servicos-single">
						<a href="#sessao-agenda" class="btn-scroll">
						<div class="img-servicos">
							<img src="<?php echo INCLUDE_PATH;?>img/servicos/img-unha.png" alt="foto">
						</div><!--img-servicos-->

						<div class="txt-servicos">
							<h3 class="txt-p">
					Serviços de Alongamentos</h3>
						</div><!--txt-servicos-->

						<div class="txt-facilidade">
							<p class="txt-p">Oferecemos diversos tipos de alongamento que se adaptam perfeitamente ao seu estilo e formato de unha, garantindo um resultado natural e proporcional ao seu gosto. Nosso serviço inclui cutilagem feita a gosto do cliente, além de técnicas seguras que preservam a saúde das unhas naturais. Como cortesia, adicionamos lindas decorações para que suas unhas fiquem ainda mais charmosas e únicas, sem custo adicional. Venha desfrutar de um momento de beleza e bem-estar pensado especialmente para você!</p>
						</div>

						</a>
					</div><!--servicos-single-->

					<div class="servicos-single">
						<a href="#sessao-agenda" class="btn-scroll">
						<div class="img-servicos">
							<img src="<?php echo INCLUDE_PATH;?>img/servicos/img-unha.png" alt="foto">
						</div><!--img-servicos-->

						<div class="txt-servicos">
							<h3 class="txt-p">
					Spa dos Pés</h3>
						</div><!--txt-servicos-->

						<div class="txt-facilidade">
							<p class="txt-p">O spa do pé é ideal para qualquer pessoa que busque relaxamento e cuidados estéticos para os pés, especialmente aqueles que passam muito tempo em pé ou sofrem com dores e desconfortos nos pés. Ele é também um excelente serviço para quem deseja uma experiência mais luxuosa e prazerosa em comparação com um pedicure tradicional.</p>
						</div>


						</a>
					</div><!--servicos-single-->

					<div class="servicos-single">
						<a href="#sessao-agenda" class="btn-scroll">
						<div class="img-servicos">
							<img src="<?php echo INCLUDE_PATH;?>img/servicos/img-unha.png" alt="foto">
						</div><!--img-servicos-->

						<div class="txt-servicos">
							<h3 class="txt-p">Limpeza de Sobrancelhas</h3>
						</div><!--txt-servicos-->

						<div class="txt-facilidade">
							<p class="txt-p">Este serviço é procurado por quem deseja um cuidado simples e eficaz com as sobrancelhas, muitas vezes combinado com outros serviços como manicure ou pedicure, oferecendo uma experiência completa de beleza e cuidados.</p>
						</div>

						</a>
					</div><!--servicos-single-->

				</div><!--flex-servicos-->

			</div><!--servicos-bloco-->

<!--
			<div class="wraper-h">
				<h3 class="titulo-h">
				Tudo isso sem <span class="rosa-span">Taxa</span> de deslocamento</h3>
				<span class="line-h"></span>
			</div>

		-->

			<div class="btn-chamada-wraper">

				<div class="btn-chamada"><a href="#sessao-agenda">Agendar Agora</a></div>

			</div><!--btn-chamada-wraper-->

		</div><!--container-->

	</section><!--servicos-->

	<section id="galeria" class="galeria">

		<div class="container">

			<div class="wraper-h">
					<h3 class="titulo-h">
					Beleza em Detalhes Sempre em Busca da Satisfação dos Nossos Clientes 
					<span class="rosa-span">Transformações Reais</span></h3>
					<span class="line-h"></span>
			</div><!--wraper-h-->
			
			<div class="slider-for">
				<?php for ($i=0; $i < 10; $i++) { ?>
				  <div><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-1.jpg" alt="Image 1"></div>
				  <div><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-2.jpg" alt="Image 2"></div>
				  <div><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-3.jpg" alt="Image 3"></div>
				  <div><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-4.jpg" alt="Image 3"></div>
				<?php }?>
			</div>

			<div class="slider-nav">
				<?php for ($i=0; $i < 10; $i++) { ?>
				  <div class="wraper-img-nav"><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-1.jpg" alt="Thumbnail 1"></div>
				  <div class="wraper-img-nav"><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-2.jpg" alt="Thumbnail 2"></div>
				  <div class="wraper-img-nav"><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-3.jpg" alt="Thumbnail 3"></div>
				  <div class="wraper-img-nav"><img src="<?php echo INCLUDE_PATH;?>img/galeria/img-4.jpg" alt="Thumbnail 3"></div>
				<?php }?>
			</div>

		</div><!--container-->

	</section><!--galeria-->

	<section id="sessao-agenda">

		<div class="meus-agendamentos">
			<!--
			<div class="editar-servico-btn">
				<div class="btn-chamada-wraper btn-edit-servico">

					<div class="btn-edit-click"><a href="">Meus Agendamentos</a></div>

				</div>
			</div>
			-->
			<div class="btn-chamada-wraper" style="text-align: center;">

				<div class="btn-chamada btn-meus-agendamentos"><a>Consultar Meus Agendamentos</a></div>

			</div><!--btn-chamada-wraper-->
		</div><!--meus-agendamentos-->



	<div class="modal-agendamento" style="display: none;">

		<div class="box-modal-wraper fundo-box box-inicio-consulta">

			<div class="close-btn"><i class="fa-solid fa-square-xmark"></i></div><!--close-btn-->

			<div class="sucess">
				<p class="txt-p">Texto exemplo</p>
			</div><!--error-->

			<div class="error">
				<p class="txt-p">Texto exemplo</p>
			</div><!--error-->

		<div class="login-agendamentos agendamentos-js-login" style="display: block;">

			<div class="wraper-h">
				<h3 class="titulo-h">Consultar <span class="rosa-span">Agendamentos</span></h3>
				<span class="line-h"></span>
			</div><!--wraper-->

			<form class="form-telefone-login form-login-consulta">
			    <fieldset>
			      <legend class="color-p">Insira seu Número de Cadastro</legend>

			      <div class="wraper-form-single">
			        <input type="text" id="telefone" name="telefone" placeholder=" " required>
			        <label for="telefone">Número de Telefone</label>
			      </div>

			      <div class="wraper-form-single">
			        <input type="submit" name="acao-validar-telefone-consulta" value="Validar">
			      </div>

			      <div class="editar-servico-btn">
					 <div class="btn-chamada-wraper btn-edit-servico">

						<div class="btn-chamada btn-meus-agendamentos"><a class="acao-editar-cadastro-consulta">Editar Cadastro</a></div>

					 </div><!--btn-chamada-wraper-->
				   </div><!--edit-btn-->

			    </fieldset>
			</form><!--form-telefone-login-->

			 <form class="form-informacoes-cliente form-editar-cadastro">
			    <fieldset>
			      <legend class="color-p">Informações do Cadastro</legend>

			      <div class="wraper-form-single">
			        <input type="text" id="nome" name="nome-cliente" placeholder=" " required>
			        <label for="nome">Nome Completo</label>
			      </div>

			      <div class="wraper-form-single">
			        <p class="txt-p">Endereço de Atendimento</p>
			      </div>

			      <div class="wraper-form-single">
			        <input type="text" id="CEP" name="CEP" placeholder=" ">
			        <label for="CEP">CEP</label>
			      </div>

			      <div class="wraper-form-single">
			        <select name="cidade">
			          <option value="Cidade" selected disabled>Cidade:</option>
			          <option value="itupeva">Itupeva</option>
			          <option value="jundiai">Jundiaí</option>
			        </select>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <input type="text" id="bairro" name="bairro" placeholder=" ">
			        <label for="bairro">Bairro</label>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <input type="text" id="rua-casa" name="rua-casa" placeholder=" ">
			        <label for="rua-casa">Rua</label>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <input type="text" id="n-casa" name="n-casa" placeholder=" ">
			        <label for="n-casa">Número</label>
			      </div>

			      <div class="wraper-form-single">
			        <input type="submit" name="acao-novo-cadastro" value="Editar Cadastro" class="acao-novo-cadastro">
			      </div>

			    </fieldset>
			</form><!--form-informacoes-clientes-->

		</div><!--login-agendamentos-->

		<div class="wraper-pagamento js-box-resumo-consulta-agendamentos" style="display: none;">

			<div class="wraper-h">
				<h3 class="titulo-h">Resumo dos <span class="rosa-span">Serviços</span></h3>
				<span class="line-h"></span>
			</div><!--wraper-->

			<div class="resumo-servico">

		<div class="wraper-resumo box-servicos-select">

			<div class="selecao-single-topo flex">
				<div class="txt-p" style="width:46%;"><span class="color-p">Data</span>
				</div> 
				<div class="duracao" style="width: 50%;">
					<span class="color-p">Horarios Selecionados</span>
				</div>
			</div>

			<div class="selecao-single flex">
	            <div class="txt-p" style="width: 46%;">
	                <span class="p-single">20/11/2024</span>
	            </div>
	            <div class="duracao" style="width: 50%;">
					<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 13:00 - 14:00 - 15:00 - 16:00</span>
				</div>
	        </div>

		</div><!--wraper-resumo box-servicos-select-->

		<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 1</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			                
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

		<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 2</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			               
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

		<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 3</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			                
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

		<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 4</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			               
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

<!--
	SE TEM CREDITO DISPONIVEL
	-->
		<div class="wraper-resumo box-servicos-select">

			<div class="selecao-single-topo flex">
				<div class="txt-p"><span class="color-p">Crédito Disponível</span>
				</div> 
				<div class="duracao">
					<span class="color-p">Serviço Atual</span>
				</div>
				<div class="preco-lixeira">
					<span class="preco-single color-p">Total Descontado</span>
				</div>
				<input type="hidden" name="cliente_1">
			</div>

			<div class="selecao-single flex">
	            <div class="txt-p">
	                <span class="p-single">R$ 69,99</span>
	            </div>
	            <div class="duracao">
					<span class="color-p">R$ 139,98</span>
				</div>
	            <div class="preco-lixeira">
	                <span class="preco-single">R$ 70,97</span>
	            </div>
	        </div>

		</div><!--wraper-resumo-->


		<!--FINAL CREDITO DISPONIVEL-->

		<div class="editar-servico-btn js-btn-editar-servico-consultar">
			<div class="btn-chamada-wraper btn-edit-servico">

				<div class="btn-chamada btn-meus-agendamentos"><a href="">Editar Serviços</a></div>

			</div><!--btn-chamada-wraper-->
		</div><!--edit-btn-->

		<div class="btn-chamada-wraper btn-cancelar-agendamento">

			<div class="btn-chamada"><a href="#sessao-agenda">Cancelar Agendamento</a></div>

		</div><!--btn-chamada-wraper-->

		</div><!--resumo-servico-->

		
			

		</div><!--wraper-pagamento js-box-resumo-consulta-agendamentos-->

		<!-- INICIO BOX SELECT SERVIÇOS EDITAR SERVIÇO CONSULTA -->

		<div class="wraper-modal modal-servicos-agendados" style="display: none;">


			<div class="box-quantidade-pessoas">

				<div class="wraper-h">
					<h3 class="titulo-h">
					Quantas Pessoas Vão <span class="rosa-span">Aproveitar</span> o Serviço?</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-quantidade flex">

					<div class="single-quantidade primeiro-bloco qnt-clientes-select">
						<span class="color-p">
							<input type="hidden" value="qnt_cliente_1">1
						</span>
					</div><!--single-quantidade-->
					<div class="single-quantidade"><span class="color-p">
							<input type="hidden" value="qnt_cliente_2">2
						</span>
					</div><!--single-quantidade-->
					<div class="single-quantidade"><span class="color-p">
							<input type="hidden" value="qnt_cliente_3">3
						</span>
					</div><!--single-quantidade-->
					<div class="single-quantidade"><span class="color-p">
							<input type="hidden" value="qnt_cliente_4">4
						</span>
					</div><!--single-quantidade-->

				</div><!--wraper-quantidade-->

			</div><!--box-quantidade-pessoas-->


		<div class="wraper-servicos-selecao um-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para 1 Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="comp-manicure-pedicure" class="checkbox-servico" value="comp-manicure-pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Manicure e Pedicure<span class="preco-txt">R$49,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="manicure" class="checkbox-servico" value="manicure" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Manicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-corte" class="checkbox-servico" value="manicure-corte" data-preco="30">

						    <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-esmaltacao" class="checkbox-servico" value="manicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="pedicure" class="checkbox-servico" value="pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Pedicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-corte" class="checkbox-servico" value="pedicure-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-esmaltacao" class="checkbox-servico" value="pedicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-simples" class="checkbox-servico" value="limpeza-simples" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Limpeza Simples de Sobrancelhas<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-henna" class="checkbox-servico" value="limpeza-henna" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Aplicação de Henna<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-corte" class="checkbox-servico" value="along-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Corte<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-manutencao" class="checkbox-servico" value="along-manutencao" data-preco="30">

						     <input type="hidden" name="duracao" value="1:30">
						    
						    <p class="p-single">Manutenção<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="along-remocao" class="checkbox-servico" value="along-remocao" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Remoção<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						 <div class="servico-single">
						    
						    <input type="checkbox" id="along-concerto" class="checkbox-servico" value="along-concerto" data-preco="30">

						     <input type="hidden" name="duracao" value="1:40">
						    
						    <p class="p-single">Concerto<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-esmaltacaogel" class="checkbox-servico" value="along-esmaltacaogel" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Esmaltação em gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-fibravidro" class="checkbox-servico" value="along-fibravidro" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Fibra de vidro<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-gel" class="checkbox-servico" value="along-gel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Along. Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-poligel" class="checkbox-servico" value="along-poligel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Poligel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-seda" class="checkbox-servico" value="along-seda" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Seda<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-tips" class="checkbox-servico" value="along-tips" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Tips<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-banhogel" class="checkbox-servico" value="along-banhogel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Banho em Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-blindagem" class="checkbox-servico" value="along-blindagem" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Blindagem<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para 1 Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


   		

        

					<div class="selecao-single-total flex">
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:00</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$0,00</span>
        </div>
    </div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico--> 

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-servicos-selecao dois-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para o 2° Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="comp-manicure-pedicure" class="checkbox-servico" value="comp-manicure-pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Manicure e Pedicure<span class="preco-txt">R$49,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="manicure" class="checkbox-servico" value="manicure" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Manicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-corte" class="checkbox-servico" value="manicure-corte" data-preco="30">

						    <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-esmaltacao" class="checkbox-servico" value="manicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="pedicure" class="checkbox-servico" value="pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Pedicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-corte" class="checkbox-servico" value="pedicure-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-esmaltacao" class="checkbox-servico" value="pedicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-simples" class="checkbox-servico" value="limpeza-simples" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Limpeza Simples de Sobrancelhas<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-henna" class="checkbox-servico" value="limpeza-henna" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Aplicação de Henna<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-corte" class="checkbox-servico" value="along-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Corte<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-manutencao" class="checkbox-servico" value="along-manutencao" data-preco="30">

						     <input type="hidden" name="duracao" value="1:30">
						    
						    <p class="p-single">Manutenção<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="along-remocao" class="checkbox-servico" value="along-remocao" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Remoção<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						 <div class="servico-single">
						    
						    <input type="checkbox" id="along-concerto" class="checkbox-servico" value="along-concerto" data-preco="30">

						     <input type="hidden" name="duracao" value="1:40">
						    
						    <p class="p-single">Concerto<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-esmaltacaogel" class="checkbox-servico" value="along-esmaltacaogel" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Esmaltação em gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-fibravidro" class="checkbox-servico" value="along-fibravidro" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Fibra de vidro<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-gel" class="checkbox-servico" value="along-gel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Along. Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-poligel" class="checkbox-servico" value="along-poligel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Poligel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-seda" class="checkbox-servico" value="along-seda" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Seda<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-tips" class="checkbox-servico" value="along-tips" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Tips<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-banhogel" class="checkbox-servico" value="along-banhogel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Banho em Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-blindagem" class="checkbox-servico" value="along-blindagem" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Blindagem<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para o 2° Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>

<!--
   		<div class="selecao-single flex">
            <div class="txt-p">
                <span class="p-single">Tarifa Especial</span>
            </div>
            <div class="duracao">
				<span class="color-p"></span>
			</div>
            <div class="preco-lixeira">
                <span class="preco-single">R$14,99</span>
            </div>
        </div>
-->
					<div class="selecao-single-total flex">
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:00</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$0,00</span>
        </div>
    </div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico-->

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-servicos-selecao tres-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para o 3° Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="comp-manicure-pedicure" class="checkbox-servico" value="comp-manicure-pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Manicure e Pedicure<span class="preco-txt">R$49,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="manicure" class="checkbox-servico" value="manicure" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Manicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-corte" class="checkbox-servico" value="manicure-corte" data-preco="30">

						    <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-esmaltacao" class="checkbox-servico" value="manicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="pedicure" class="checkbox-servico" value="pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Pedicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-corte" class="checkbox-servico" value="pedicure-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-esmaltacao" class="checkbox-servico" value="pedicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-simples" class="checkbox-servico" value="limpeza-simples" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Limpeza Simples de Sobrancelhas<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-henna" class="checkbox-servico" value="limpeza-henna" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Aplicação de Henna<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-corte" class="checkbox-servico" value="along-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Corte<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-manutencao" class="checkbox-servico" value="along-manutencao" data-preco="30">

						     <input type="hidden" name="duracao" value="1:30">
						    
						    <p class="p-single">Manutenção<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="along-remocao" class="checkbox-servico" value="along-remocao" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Remoção<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						 <div class="servico-single">
						    
						    <input type="checkbox" id="along-concerto" class="checkbox-servico" value="along-concerto" data-preco="30">

						     <input type="hidden" name="duracao" value="1:40">
						    
						    <p class="p-single">Concerto<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-esmaltacaogel" class="checkbox-servico" value="along-esmaltacaogel" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Esmaltação em gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-fibravidro" class="checkbox-servico" value="along-fibravidro" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Fibra de vidro<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-gel" class="checkbox-servico" value="along-gel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Along. Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-poligel" class="checkbox-servico" value="along-poligel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Poligel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-seda" class="checkbox-servico" value="along-seda" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Seda<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-tips" class="checkbox-servico" value="along-tips" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Tips<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-banhogel" class="checkbox-servico" value="along-banhogel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Banho em Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-blindagem" class="checkbox-servico" value="along-blindagem" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Blindagem<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para o 3° Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>

<!--
   		<div class="selecao-single flex">
            <div class="txt-p">
                <span class="p-single">Tarifa Especial</span>
            </div>
            <div class="duracao">
				<span class="color-p"></span>
			</div>
            <div class="preco-lixeira">
                <span class="preco-single">R$14,99</span>
            </div>
        </div>
-->
					<div class="selecao-single-total flex">
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:00</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$0,00</span>
        </div>
    </div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico-->

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-servicos-selecao quatro-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para  o 4° Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="comp-manicure-pedicure" class="checkbox-servico" value="comp-manicure-pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Manicure e Pedicure<span class="preco-txt">R$49,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="manicure" class="checkbox-servico" value="manicure" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Manicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-corte" class="checkbox-servico" value="manicure-corte" data-preco="30">

						    <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="manicure-esmaltacao" class="checkbox-servico" value="manicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Mão<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="pedicure" class="checkbox-servico" value="pedicure" data-preco="30">

						    <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Pedicure<span class="preco-txt">R$29,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-corte" class="checkbox-servico" value="pedicure-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Corte de Unha Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->
					    
					    <div class="servico-single">
						    
						    <input type="checkbox" id="pedicure-esmaltacao" class="checkbox-servico" value="pedicure-esmaltacao" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Esmaltação Pé<span class="preco-txt">R$14,99</span></p>
						</div><!--servico-single-->

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-simples" class="checkbox-servico" value="limpeza-simples" data-preco="30">

						     <input type="hidden" name="duracao" value="0:40">
						    
						    <p class="p-single">Limpeza Simples de Sobrancelhas<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="limpeza-henna" class="checkbox-servico" value="limpeza-henna" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Aplicação de Henna<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down" aria-hidden="true"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-corte" class="checkbox-servico" value="along-corte" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Corte<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-manutencao" class="checkbox-servico" value="along-manutencao" data-preco="30">

						     <input type="hidden" name="duracao" value="1:30">
						    
						    <p class="p-single">Manutenção<span class="preco-txt">R$24,99</span></p>
						</div><!--servico-single-->

					    <div class="servico-single">
						    
						    <input type="checkbox" id="along-remocao" class="checkbox-servico" value="along-remocao" data-preco="30">

						    <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Remoção<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						 <div class="servico-single">
						    
						    <input type="checkbox" id="along-concerto" class="checkbox-servico" value="along-concerto" data-preco="30">

						     <input type="hidden" name="duracao" value="1:40">
						    
						    <p class="p-single">Concerto<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-esmaltacaogel" class="checkbox-servico" value="along-esmaltacaogel" data-preco="30">

						     <input type="hidden" name="duracao" value="1:00">
						    
						    <p class="p-single">Esmaltação em gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-fibravidro" class="checkbox-servico" value="along-fibravidro" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Fibra de vidro<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-gel" class="checkbox-servico" value="along-gel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Along. Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-poligel" class="checkbox-servico" value="along-poligel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Poligel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-seda" class="checkbox-servico" value="along-seda" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Seda<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-tips" class="checkbox-servico" value="along-tips" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Tips<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-banhogel" class="checkbox-servico" value="along-banhogel" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Banho em Gel<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->

						<div class="servico-single">
						    
						    <input type="checkbox" id="along-blindagem" class="checkbox-servico" value="along-blindagem" data-preco="30">

						     <input type="hidden" name="duracao" value="2:00">
						    
						    <p class="p-single">Blindagem<span class="preco-txt">R$39,99</span></p>
						</div><!--servico-single-->
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para o 4° Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>

<!--
   		<div class="selecao-single flex">
            <div class="txt-p">
                <span class="p-single">Tarifa Especial</span>
            </div>
            <div class="duracao">
				<span class="color-p"></span>
			</div>
            <div class="preco-lixeira">
                <span class="preco-single">R$14,99</span>
            </div>
        </div>
-->
					<div class="selecao-single-total flex">
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:00</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$0,00</span>
        </div>
    </div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico-->

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-horarios">

				<div class="flex-horarios">

					<div class="wraper-h">
						<h3 class="titulo-h">Escolha seus <span class="rosa-span">Horarios</span>
						</h3>
						<span class="line-h"></span>
					</div><!--wraper-h-->

					<div class="horarios-periodo flex" id="horario-consultar">

						<div class="manha select-periodo">
							<p class="color-p">Manha</p>
						</div><!--manha-->

						<div class="tarde">
							<p class="color-p">Tarde</p>
						</div><!--manha-->

						<div class="noite">
							<p class="color-p">Noite</p>
						</div><!--manha-->

					</div><!--horarios-periodo-->

					<div class="msg-tarifa">
						<p>Tarifa adicional R$15,00</p>
					</div><!--msg-tarifa-->

					<div class="horario-necess">
						<p class="color-p horario-total">Tempo estimado necessário &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-clock" aria-hidden="true"></i>&nbsp;&nbsp;<span class="tempo-estimado">2:00</span></p>
					</div><!--horarios-necess-->

					<div class="horario-single">
					    <div class="horario-manha"><div class="horarios"><span>07:00</span></div><div class="horarios"><span>08:00</span></div><div class="horarios"><span>09:00</span></div><div class="horarios"><span>10:00</span></div><div class="horarios"><span>11:00</span></div></div><!--horario-manha-->
					    <div class="horario-tarde"><div class="horarios"><span>13:00</span></div><div class="horarios"><span>14:00</span></div><div class="horarios"><span>15:00</span></div><div class="horarios"><span>16:00</span></div><div class="horarios"><span>17:00</span></div></div><!--horario-tarde-->
					    <div class="horario-noite"><div class="horarios"><span>18:00</span></div><div class="horarios"><span>19:00</span></div><div class="horarios"><span>20:00</span></div></div><!--horario-noite-->
					</div><!--horario-single-->



				</div><!--flex-horarios-->

<!--
					<div class="btn-chamada-wraper">
						<div class="btn-chamada"><a class="avancar-servico">Avançar</a></div>
					</div>
-->

					<div class="btn-chamada-wraper btn-avancar-1">
						<button class="btn-concluir">Concluir</button>
					</div><!--btn-chamada-wraper-->


			</div><!--wraper-horarios-->

		</div><!--wraper-modal-->

	</div><!--box-modal-wraper-->

	
	
</div><!--modal-agendamentos-->




			<div class="wraper-h">
					<h3 class="titulo-h">
					Faça seu <span class="rosa-span">Agendamento</span>
					</h3>
					<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="agenda">
				<div id="calendario" class="calendario"></div>
			</div><!--agenda-->
	

	<div class="box-modal" style="display: none;">

		<div class="box-modal-wraper fundo-box">

			<div class="close-btn"><i class="fa-solid fa-square-xmark"></i></div><!--close-btn-->

			<div class="sucess js-sucess-modal-agenda-servicos">
				<p class="txt-p">Texto exemplo</p>
			</div><!--error-->

			<div class="error js-error-modal-agenda-servicos">
				<p class="txt-p">Texto exemplo</p>
			</div><!--error-->

		<!--INICIO BOX AGENDA SERVIÇO NOVO SERVIÇO AGENDA PRINCIPAL-BOX-ESTILIZADO
	
		-->

		<div class="wraper-modal js-modal-agenda-servicos" style="display: ;">


			<div class="box-quantidade-pessoas">

				<div class="wraper-h">
					<h3 class="titulo-h">
					Quantas Pessoas Vão <span class="rosa-span">Aproveitar</span> o Serviço?</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-quantidade flex">

					<div class="single-quantidade primeiro-bloco qnt-clientes-select">
						<span class="color-p">
							<input type="hidden" value="qnt_cliente_1">1
						</span>
					</div><!--single-quantidade-->
					<div class="single-quantidade"><span class="color-p">
							<input type="hidden" value="qnt_cliente_2">2
						</span>
					</div><!--single-quantidade-->
					<div class="single-quantidade"><span class="color-p">
							<input type="hidden" value="qnt_cliente_3">3
						</span>
					</div><!--single-quantidade-->
					<div class="single-quantidade"><span class="color-p">
							<input type="hidden" value="qnt_cliente_4">4
						</span>
					</div><!--single-quantidade-->

				</div><!--wraper-quantidade-->

			</div><!--box-quantidade-pessoas-->


		<div class="wraper-servicos-selecao um-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para 1 Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure-pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        return $servico['nome_servico_id'] === $nomeServicoFiltro;
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-1" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						} 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-1" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-1" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'sobrancelhas';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = 1;
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-1" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'along';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-1" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para 1 Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select agenda-resumo-cliente-1">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
					</div>

					<div class="selecao-single-total pos-total-cliente-1 flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 0:00</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 00,00</span>
						</div>
						<input type="hidden" name="cliente_1" value="resumo-agenda-servico-cliente-1">
					</div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico--> 

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-servicos-selecao dois-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para o 2° Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure-pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        return $servico['nome_servico_id'] === $nomeServicoFiltro;
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-2" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						} 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-2" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-2" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

							<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'sobrancelhas';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = 1;
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-2" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?> 

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

					   <?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'along';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-2" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para o 2° Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select agenda-resumo-cliente-2">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						
					</div>

					<div class="selecao-single-total pos-total-cliente-2 flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 0:00</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 0,00</span>
						</div>
						<input type="hidden" name="cliente_2" value="resumo-agenda-servico-cliente-2">
					</div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico-->

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-servicos-selecao tres-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para o 3° Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure-pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        return $servico['nome_servico_id'] === $nomeServicoFiltro;
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-3" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						} 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-3" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-3" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

					    <?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'sobrancelhas';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = 1;
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-3" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

					    <?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'along';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-3" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para o 3° Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select agenda-resumo-cliente-3">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1" value="cliente_1">
					</div>



<!--
   		<div class="selecao-single flex">
            <div class="txt-p">
                <span class="p-single">Tarifa Especial</span>
            </div>
            <div class="duracao">
				<span class="color-p"></span>
			</div>
            <div class="preco-lixeira">
                <span class="preco-single">R$14,99</span>
            </div>
        </div>
-->
					<div class="selecao-single-total pos-total-cliente-3 flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i></span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p"></span>
						</div>
						<input type="hidden" name="cliente_3" value="resumo-agenda-servico-cliente-3">
					</div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico-->

			

		</div><!--wraper-servicos-selecao-->

		<div class="wraper-servicos-selecao quatro-cliente">


			<div class="wraper-h">
				<h3 class="titulo-h">
				Selecione o Pacote de <span class="rosa-span">Serviços</span> para  o 4° Cliente</h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			<div class="box-servico">

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure e Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure-pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        return $servico['nome_servico_id'] === $nomeServicoFiltro;
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-4" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						} 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Manicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

						<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'manicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-4" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Pedicure</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

							<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'pedicure';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-4" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>

					</div><!--box-de-servicos-->

				</div><!--box-servico-select-->

					<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Sombrancelhas</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

					    <?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'sobrancelhas';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = 1;
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-4" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>
					    

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

				<div class="box-servicos-select">

					<div class="txt-servicos flex">
							<h3 class="txt-p">
					Alongamentos e Serviços</h3>
					<div class="wraper-carrinho-single">
						<div class="wraper-carrinho-select">
							<span>0</span>
						</div><!--wraper-carrinho-select-->
						<div class="icone-arrow">
							<i class="fa-solid fa-square-caret-down"></i>
						</div><!--icone-arrow-->
					</div><!--wraper-carrinho-single-->
					</div><!--txt-servicos-->

					<div class="box-de-servicos">

					<?php

						try {

						    // Nome do serviço que queremos filtrar (manicure-pedicure, por exemplo)
						    $nomeServicoFiltro = 'along';

						    // Filtrar os serviços com base no valor de `nome_servico_id`
						    $servicosFiltrados = array_filter($servicos, function($servico) use ($nomeServicoFiltro) {
						        $nomeServicoId = $servico['nome_servico_id'];

						        // Verifica se o nome do serviço começa com o grupo desejado e não é uma exceção
        						return strpos($nomeServicoId, $nomeServicoFiltro) === 0 && $nomeServicoId !== 'manicure-pedicure';
						    });

						// Verificar se existem serviços filtrados
    					if (!empty($servicosFiltrados)) {

							//echo "<h2>Serviços do grupo: {$nomeServicoFiltro}</h2>";
					        foreach ($servicosFiltrados as $servico) {
					            // Extraindo os dados da tabela
					            $id = $servico['id'];
					            $foto = $servico['foto_servico'];
					            $duracao = $servico['duracao_servico'];
					            $preco = $servico['preco_servico'];
					            $nome = $servico['nome_servico'];
					            $descricao = $servico['descricao_servico'];
					            $nomeServicoId = $servico['nome_servico_id'];

						        echo <<<HTML
<div class="servico-single">
    <i class="select-icon fa-solid fa-square-check" style="display:none;"></i>

    <div class="over-back-img-servico"></div><!--back-img-servico-->
    <div class="img-servico" style="background-image:url('img/img-servicos/{$foto}');"></div>
    
    <div class="txt-box-servico">
        <input type="checkbox" id="agenda-{$nomeServicoId}-4" class="checkbox-servico" value="agenda-{$nomeServicoId}-{$id}" data-preco="{$preco}">
        <input type="hidden" name="duracao" value="{$duracao}">
        
        <p class="p-single">{$nome} <br> 
            <span style="font-size: 12px;">{$descricao}</span>
        </p>

        <span class="preco-txt">R\${$preco}</span>
    </div><!--txt-box-servico-->
</div><!--servico-single-->
HTML;
						    }
						}else {
					        echo "<p>Nenhum serviço encontrado para o grupo: {$grupoFiltro}</p>";
					    } 

						}catch (Exception $e) {
						    echo "Erro ao recuperar os serviços: " . $e->getMessage();
						}

						?>	

					</div><!--box-de-servicos-->
				   
				   
				</div><!--box-servico-select-->

			</div><!--box-servico-->


			<div class="resumo-servico">

				<div class="wraper-h">
					<h3 class="titulo-h">Resumo das <span class="rosa-span">Seleções</span> para o 4° Cliente</h3>
					<span class="line-h"></span>
				</div><!--wraper-h-->

				<div class="wraper-resumo box-servicos-select agenda-resumo-cliente-4">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>

<!--
   		<div class="selecao-single flex">
            <div class="txt-p">
                <span class="p-single">Tarifa Especial</span>
            </div>
            <div class="duracao">
				<span class="color-p"></span>
			</div>
            <div class="preco-lixeira">
                <span class="preco-single">R$14,99</span>
            </div>
        </div>
-->
					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i></span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p"></span>
						</div>
						<input type="hidden" name="cliente_4" value="resumo-agenda-servico-cliente-4">
					</div>

				</div><!--wraper-resumo-->

			</div><!--resumo-servico-->


		</div><!--wraper-servicos-selecao-->

		<div class="wraper-horarios">

				<div class="flex-horarios">

					<div class="wraper-h">
						<h3 class="titulo-h">Escolha seus <span class="rosa-span">Horarios</span>
						</h3>
						<span class="line-h"></span>
					</div><!--wraper-h-->

					<div class="horarios-periodo flex horarios-agenda" id="horario-agendamento">

						<div class="manha select-periodo">
							<p class="color-p">Manha</p>
						</div><!--manha-->

						<div class="tarde">
							<p class="color-p">Tarde</p>
						</div><!--manha-->

						<div class="noite">
							<p class="color-p">Noite</p>
						</div><!--manha-->

					</div><!--horarios-periodo-->

					<div class="msg-tarifa">
						<p>Tarifa adicional R$15,00</p>
					</div><!--msg-tarifa-->

					<div class="horario-necess js-tempo-servico">
						<p class="color-p horario-total">Tempo estimado necessário &nbsp&nbsp&nbsp<i class="fa-solid fa-clock" aria-hidden="true"></i>&nbsp&nbsp<span class="tempo-estimado">0:00</span></p>
					</div><!--horarios-necess-->

					<div class="horario-single">
					    <div class="horario-manha">
					        
					    </div><!--horario-manha-->
					    <div class="horario-tarde">
					        
					    </div><!--horario-tarde-->
					    <div class="horario-noite">
					        
					    </div><!--horario-noite-->
					</div><!--horario-single-->



				</div><!--flex-horarios-->

<!--
					<div class="btn-chamada-wraper">
						<div class="btn-chamada"><a class="avancar-servico">Avançar</a></div>
					</div>
-->

					<div class="btn-chamada-wraper btn-avancar-1">
						<button class="btn-avancar">Avançar</button>
					</div><!--btn-chamada-wraper-->


			</div><!--wraper-horarios-->

		</div><!--wraper-modal-->

		<div class="wraper-login login-agenda" style="display: none;">

			<div class="wraper-h">
				<h3 class="titulo-h">Identificação e <span class="rosa-span">Cadastro</span></h3>
				<span class="line-h"></span>
			</div><!--wraper-->

			<div class="form-telefone-login form-login-js">
				<form class="form-login-agenda">
				    <fieldset>
				      <legend class="color-p">Identifique-se com seu Número</legend>

				      <div class="wraper-form-single">
				        <input type="text" id="telefone-login-agenda" name="telefone-login-agenda" placeholder=" " required>
				        <label for="telefone">Número de Telefone</label>
				      </div>

				      <div class="wraper-form-single" style="margin-top: 35px;">
				        <input type="submit" name="acao-validar-telefone-login-agenda" value="Validar">
				      </div>

				    </fieldset>
				</form><!--form-login-agenda-->
				<form class="form-login-senha-agenda">

					  <div class="wraper-form-single senha-input-login-js">
				        <input type="text" id="senha-login-agenda" name="senha-login-agenda" placeholder=" " required>
				        <label for="nome">Sua Senha</label>
				      </div>

				      <div class="wraper-form-single">
				        <input type="submit" name="acao-validar-telefone-login-agenda" value="Validar">
				      </div>

				</form><!--form-senha-agenda-->
			</div><!--form-telefone-login-->

			 <form class="form-informacoes-cliente">
			 	<div class="wraper-h" style="margin: 10px 0 40px 0;">
					<h3 class="titulo-h">Seu <span class="rosa-span">Cadastro</span></h3>
					<span class="line-h"></span>
				</div><!--wraper-->
			    <fieldset>
			    
			      <legend class="color-p">Informações do Cadastro</legend>

			      <div class="wraper-form-single">
			        <input type="text" id="senha-cadastro-agenda" name="senha-cliente" placeholder=" " required>
			        <label for="nome">Sua Senha</label>
			      </div>

			      <div class="wraper-form-single">
			        <input type="text" id="nome-login-agenda" name="nome-cliente" placeholder=" " required>
			        <label for="nome">Nome Completo</label>
			      </div>

			      <div class="wraper-form-single">
			        <input type="email" id="email-login-agenda" name="email-cliente" placeholder=" " required>
			        <label for="nome">Seu melhor E-mail</label>
			      </div>

			      <div class="wraper-h" style="margin: 10px 0 40px 0;">
					 <h3 class="titulo-h">Endereço de <span class="rosa-span">Atendimento</span></h3>
					 <span class="line-h"></span>
				  </div><!--wraper-->

			      <div class="wraper-form-single">
			        <input type="text" id="cep-login-agenda" name="cep-login-agenda" placeholder=" ">
			        <label for="CEP">CEP</label>
			      </div>

			      <div class="wraper-form-single">
			        <select name="cidade" id="cidade-login-agenda">
			          <option value="Cidade" selected disabled>Cidade:</option>
			          <option value="Itupeva">Itupeva</option>
			          <option value="Jundiai">Jundiaí</option>
			        </select>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <input type="text" id="bairro-login-agenda" name="bairro-login-agenda" placeholder=" ">
			        <label for="bairro">Bairro</label>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <input type="text" id="rua-casa-login-agenda" name="rua-casa-login-agenda" placeholder=" ">
			        <label for="rua-casa">Rua</label>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <input type="text" id="n-casa-login-agenda" name="n-casa-login-agenda" placeholder=" ">
			        <label for="n-casa">Número</label>
			      </div>

			      <div class="wraper-form-single">
			        <input type="submit" name="acao-novo-cadastro" value="Confirmar" class="acao-novo-cadastro">
			      </div>

			    </fieldset>
			</form><!--form-informacoes-clientes-->

		</div><!--wraper-login-->

		<div class="wraper-pagamento js-box-pagamento-agenda" style="display: none;">

			<div class="wraper-h">
				<h3 class="titulo-h">Resumo dos <span class="rosa-span">Serviços</span> e opções de <span class="rosa-span">Pagamento</span></h3>
				<span class="line-h"></span>
			</div><!--wraper-->

		<div class="resumo-servico">

		<div class="wraper-resumo box-servicos-select">

			<div class="selecao-single-topo flex">
				<div class="txt-p" style="width:46%;"><span class="color-p">Data</span>
				</div> 
				<div class="duracao" style="width: 50%;">
					<span class="color-p">Horarios Selecionados</span>
				</div>
			</div>

			<div class="selecao-single flex">
	            <div class="txt-p" style="width: 46%;">
	                <span class="p-single">20/11/2024</span>
	            </div>
	            <div class="duracao" style="width: 50%;">
					<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 13:00 - 14:00 - 15:00 - 16:00</span>
				</div>
	        </div>

		</div><!--wraper-resumo box-servicos-select-->

		<!--INICIO RESUMO BOX-SERVICOS FINAL PAGAMENTO AGENDA-->

		<div class="wraper-resumo box-servicos-select ">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 1</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			                <i class="icone-lixeira fa-solid fa-trash-can"></i>
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

		<div class="wraper-resumo box-servicos-select ">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 2</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			                <i class="icone-lixeira fa-solid fa-trash-can"></i>
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

		<div class="wraper-resumo box-servicos-select ">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 3</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			                <i class="icone-lixeira fa-solid fa-trash-can"></i>
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

		<div class="wraper-resumo box-servicos-select ">

					<div class="selecao-single-topo flex">
						<div class="txt-p"><span class="color-p">Serviço 4</span>
						</div> 
						<div class="duracao">
							<span class="color-p">Duração</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-single color-p">Valor</span>
							<i class="fa-solid fa-cart-shopping"></i>
						</div>
						<input type="hidden" name="cliente_1">
					</div>


			   		<div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Limpeza Simples de Sobrancelhas</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> 0:40</span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$124,99</span>
			                <i class="icone-lixeira fa-solid fa-trash-can"></i>
			            </div>
			        </div>

			        <div class="selecao-single flex">
			            <div class="txt-p">
			                <span class="p-single">Tarifa Especial</span>
			            </div>
			            <div class="duracao">
							<span class="color-p"></span>
						</div>
			            <div class="preco-lixeira">
			                <span class="preco-single">R$14,99</span>
			            </div>
			        </div>

					<div class="selecao-single-total flex">
						<div class="txt-p"><span class="color-p">Total</span>
						</div> 
						<div class="duracao">
							<span class="color-p"><i class="fa-solid fa-clock"></i> 2:40</span>
						</div>
						<div class="preco-lixeira">
							<span class="preco-total color-p">R$ 139,98</span>
						</div>
					</div>

		</div><!--wraper-resumo-->

<!--
	SE TEM CREDITO DISPONIVEL
	-->
		<div class="wraper-resumo box-servicos-select">

			<div class="selecao-single-topo flex">
				<div class="txt-p"><span class="color-p">Crédito Disponível</span>
				</div> 
				<div class="duracao">
					<span class="color-p">Serviço Atual</span>
				</div>
				<div class="preco-lixeira">
					<span class="preco-single color-p">Total Descontado</span>
				</div>
				<input type="hidden" name="cliente_1">
			</div>

			<div class="selecao-single flex">
	            <div class="txt-p">
	                <span class="p-single">R$ 69,99</span>
	            </div>
	            <div class="duracao">
					<span class="color-p">R$ 139,98</span>
				</div>
	            <div class="preco-lixeira">
	                <span class="preco-single">R$ 70,97</span>
	            </div>
	        </div>

		</div><!--wraper-resumo-->


		<!--FINAL CREDITO DISPONIVEL-->

		<div class="editar-servico-btn js-btn-editar-servico-agenda">
			<div class="btn-chamada-wraper btn-edit-servico">

				<div class="btn-chamada btn-meus-agendamentos"><a href="">Editar Serviços</a></div>

			</div><!--btn-chamada-wraper-->
		</div><!--edit-btn-->

		</div><!--resumo-servico-->

			<!-- Opções de Pagamento stylo 1 -->
			
			 
			<div class="payment-summary">

			  <!-- Opções de Pagamento -->
			  <div class="payment-options">
			 
			    <label class="payment-card pix">
			      <input type="radio" name="payment-method" value="pix" checked>
			      <div class="card-info">
			        <span class="icon"><i class="fa-brands fa-pix"></i></span>
			        <span class="method-name">Pix</span>
			      </div>
			    </label>

			    <label class="payment-card credit-card">
			      <input type="radio" name="payment-method" value="cartao">
			      <div class="card-info">
			        <span class="icon"><i class="fa-solid fa-credit-card"></i></span>
			        <span class="method-name">Cartão de Crédito</span>
			      </div>
			    </label>

			    <label class="payment-card cash">
			      <input type="radio" name="payment-method" value="dinheiro">
			      <div class="card-info">
			        <span class="icon"><i class="fa-solid fa-brazilian-real-sign"></i></span>
			        <span class="method-name">Dinheiro (30% de sinal)</span>
			      </div>
			    </label>
			  </div>

			  	<div class="btn-chamada-wraper btn-confirm-pagamento">

					<div class="btn-chamada"><a href="#sessao-agenda">Realizar Pagamento</a></div>

				</div><!--btn-chamada-wraper-->

			</div>

		</div><!--wraper-pagamento-->
		
	</div><!--box-modal-->

	</div>


</section><!--agenda-->

<section id="depoimentos" class="depoimentos">

	<div class="container">

	<div class="wraper-h">
		<h3 class="titulo-h">O que nossas <span class="rosa-span">Clientes</span> dizem</h3>
		<span class="line-h"></span>
	</div><!--wraper-h-->

	<div class="box-flex depoimentos-box">

		<div class="single-box single-depoimento">
			<div class="img-depoimento">
				<img src="<?php echo INCLUDE_PATH;?>img/depoimentos/img-2.jpeg" alt="foto-depoimento">
			</div><!--img-depoimento-->
			<div class="wraper-depoimento">
				<p class="texto-depoimento">"O atendimento é impecável e os resultados são sempre incríveis! Me sinto renovada a cada visita."</p>
				<p class="nome-depoimento">Ana Paula</p>
				<p class="papel-depoimento">Cliente Fiel</p>
			</div><!--txt-depoimento-->
		</div><!--single-box single-depoimento-->

		<div class="single-box single-depoimento">
			<div class="img-depoimento">
				<img src="<?php echo INCLUDE_PATH;?>img/depoimentos/img-2.jpeg" alt="foto-depoimento">
			</div><!--img-depoimento-->
			<div class="wraper-depoimento">
				<p class="texto-depoimento">"O atendimento é impecável e os resultados são sempre incríveis! Me sinto renovada a cada visita.Me sinto renovada a cada visita"</p>
				<p class="nome-depoimento">Ana Paula</p>
				<p class="papel-depoimento">Apaixonada por Unhas</p>
			</div><!--txt-depoimento-->
		</div><!--single-box single-depoimento-->

		<div class="single-box single-depoimento">
			<div class="img-depoimento">
				<img src="<?php echo INCLUDE_PATH;?>img/depoimentos/img-2.jpeg" alt="foto-depoimento">
			</div><!--img-depoimento-->
			<div class="wraper-depoimento">
				<p class="texto-depoimento">"O atendimento é impecável e os resultados são sempre incríveis! Me sinto renovada a cada visita."</p>
				<p class="nome-depoimento">Ana Paula</p>
				<p class="papel-depoimento">Parceira de Beleza</p>
			</div><!--txt-depoimento-->
		</div><!--single-box single-depoimento-->

	</div><!--box-flex depoimentos-box-->

	<div class="meus-agendamentos btn-depoimento">
			<!--
			<div class="editar-servico-btn">
				<div class="btn-chamada-wraper btn-edit-servico">

					<div class="btn-edit-click"><a href="">Meus Agendamentos</a></div>

				</div>
			</div>
			-->
			<div class="btn-chamada-wraper" style="text-align: center;">

				<div class="btn-stylo btn-depoimento"><a>Enviar Depoimento</a></div>

			</div><!--btn-chamada-wraper-->
		</div><!--meus-agendamentos-->
		
	</div><!--container-->

</section><!--depoimentos-->

<div class="modal-box-stylo modal-depoimento" style="display: none;">

		<div class="box-modal-wraper fundo-box box-inicio-depoimento">

			<div class="close-btn"><i class="fa-solid fa-square-xmark"></i></div><!--close-btn-->

			<div class="sucess">
				<p class="txt-p">Texto exemplo</p>
			</div><!--error-->

			<div class="error">
				<p class="txt-p">Texto exemplo</p>
			</div><!--error-->

			<div class="login-agendamentos depoimentos-js-login" style="display: block;">

				<div class="wraper-h">
					<h3 class="titulo-h">Conte sua <span class="rosa-span">Experiência</span> Conosco</h3>
					<span class="line-h"></span>
				</div><!--wraper-->

				<form class="form-telefone-login form-login-depoimento">
				    <fieldset>
				      <legend class="color-p">Insira seu Número de Cadastro</legend>

				      <div class="wraper-form-single">
				        <input type="text" id="telefone" name="telefone" placeholder=" " required>
				        <label for="telefone">Número de Telefone</label>
				      </div>

				      <div class="wraper-form-single">
				        <input type="submit" name="acao-validar-telefone-depoimento" value="Validar">
				      </div>

				    </fieldset>
				</form><!--form-telefone-login-->

				<form class="form-informacoes-cliente form-preencher-depoimento">
			    <fieldset>
			      <legend class="color-p">Informações do Cadastro</legend>

			      <div class="wraper-form-single">
			        <input type="text" id="nome" name="nome-cliente" placeholder=" " required>
			        <label for="nome">Nome Completo</label>
			      </div>

			      <div class="wraper-form-single">
			        <p class="txt-p">Sua Melhor Foto</p>
			      </div>

			      <div class="wraper-form-single">
			        <input type="text" id="foto-depoimento" name="foto-depoimento" placeholder=" ">
			        <label for="foto-depoimento">Foto</label>
			      </div>

			      <div class="wraper-form-single">
			        <p class="txt-p">Compartilhe sua Experiência</p>
			      </div>

			      <div class="wraper-form-single" style="margin-top: 20px;">
			        <textarea id="txt-depoimento-form" name="bairro" placeholder=" "></textarea>
			        <label for="txt-depoimento-form">Depoimento</label>
			      </div>

			      <div class="wraper-form-single">
			        <select name="papel">
			          <option selected disabled>Escolha um Papel:</option>
			          <option value="cliente_fiel">Cliente Fiel</option>
			          <option value="">Apaixonada por Unhas</option>
			          <option value="">Amante da Beleza</option>
			          <option value="">Satisfeita e Feliz</option>
			          <option value="">Encantada</option>
			          <option value="">Parceira de Beleza</option>
			        </select>
			      </div>

			      <div class="wraper-form-single">
			        <input type="submit" name="acao-novo-depoimento" value="Enviar Depoimento" class="acao-novo-cadastro">
			      </div>

			    </fieldset>
			</form><!--form-informacoes-clientes-->

			</div><!--login-agendamentos-->

		</div>

</div><!--modal-agendamento modal-depoimento-->

<section class="contato" id="contato">

	<div class="bg-sobre-contato"></div>

	<div class="container">

		<div class="wraper-h">
			<h3 class="titulo-h">Perguntas e Duvidas <span class="rosa-span">Frequêntes</span></h3>
			<span class="line-h"></span>
		</div><!--wraper-h-->

		<div class="faq">

			<div class="faq-item">
		      <h3 class="faq-question color-p">Como posso agendar um horário? <span class="faq-icon">+</span></h3>
		      <p class="faq-answer">Você pode agendar seu horário diretamente pelo nosso site na seção "Agendamentos". Escolha o serviço, a opção de atendimento no local ou a domicílio, e finalize o agendamento.</p>
		    </div>
		    <div class="faq-item">
		      <h3 class="faq-question color-p">Vocês oferecem atendimento a domicílio? <span class="faq-icon">+</span></h3>
		      <p class="faq-answer">Sim! Oferecemos atendimento a domicílio com hora marcada pelo site. Basta selecionar a opção "Atendimento a Domicílio" durante o agendamento.</p>
		    </div>
		    <div class="faq-item">
		      <h3 class="faq-question color-p">Como funciona o pagamento online? <span class="faq-icon">+</span></h3>
		      <p class="faq-answer">Após escolher seu serviço e horário, você pode realizar o pagamento pelo site usando PIX, cartão de crédito ou débito, garantindo praticidade e segurança.</p>
		    </div>
		    <div class="faq-item">
		      <h3 class="faq-question color-p">Quais serviços vocês oferecem? <span class="faq-icon">+</span></h3>
		      <p class="faq-answer">Oferecemos manicure, pedicure, alongamento de unhas, esmaltação em gel, spa para pés e mãos, e nail art personalizada.</p>
		    </div>

		</div><!--faq-->

		<div class="container-contato">

			<div class="wraper-h">
				<h3 class="titulo-h">Contato Simples e <span class="rosa-span">Direto</span></h3>
				<span class="line-h"></span>
			</div><!--wraper-h-->

			 <div class="contact-container">
		      <h2 class="contact-title">Estamos prontos para atender você!</h2>
		      <p class="contact-description">Fale conosco e tire suas dúvidas.</p>
		      <div class="contact-cards">
		        <div class="contact-card">
		          <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
		          <p><strong>E-mail:</strong></p>
		          <a href="mailto:contato@seusite.com.br">contato@seusite.com.br</a>
		        </div>
		        <div class="contact-card">
		          <div class="contact-icon"><i class="fa-brands fa-whatsapp"></i></div>
		          <p><strong>WhatsApp:</strong></p>
		          <a href="https://wa.me/11934654813">(11) 93465-4813</a>
		        </div>
		      </div>
		      <p class="contact-note">🌸 "Porque sua beleza é nossa prioridade."</p>
		    </div>

		</div><!--container-contato-->

	</div><!--container-->

</section><!--contato-->

 <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h3>Paula Rosangela Nail Design</h3>
        <p class="footer-tagline">Cuidando de você, porque sua beleza é nossa prioridade.</p>
      </div>
      <div class="footer-links">
        <h4>Links Úteis</h4>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sessao-agenda">Agende Online</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
      <div class="footer-social">
        <h4>Siga-nos</h4>
        <div class="social-icons">
          <a href="https://instagram.com" target="_blank" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://facebook.com" target="_blank" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://wa.me/XXXXXXXXXXXXXX" target="_blank" class="social-icon"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Paula Rosangela Nail Design . Todos os direitos reservados.</p>
    </div>
  </footer>

<script src="<?php echo INCLUDE_PATH;?>js/jquery.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/jquery.ajaxform.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/form-agenda.js"></script>
<script src="https://kit.fontawesome.com/86e9924e5d.js" crossorigin="anonymous"></script>
<script src="<?php echo INCLUDE_PATH;?>js/slick.min.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/slide.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/menu.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/slideview.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/agenda.js"></script>
<!--<script src="<?php //echo INCLUDE_PATH;?>js/validacao-form.js"></script>-->
<script src="<?php echo INCLUDE_PATH;?>js/box-model.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/Identificacao.js"></script>
<!-- scripts particulas -->
<!--
<script src="<?php //echo INCLUDE_PATH;?>js/particles.js"></script>
<script src="<?php //echo INCLUDE_PATH;?>js/app.js"></script>
<script src="<?php //echo INCLUDE_PATH;?>js/lib/stats.js"></script>
<script>
	particlesJS.load('particles-js', 'particles.json', function() {
	  console.log('particles.js loaded - callback');
	});
</script>

-->
<script>
	
    

  

</script>
<!--final scripts particulas-->


</body>



</html>