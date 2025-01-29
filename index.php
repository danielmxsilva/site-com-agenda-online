<?php include('config.php');

	 // Recuperar os serviços da tabela `tb_servico`
	try {
	    $servicos = Painel::selectAll('tb_servico');
	} catch (Exception $e) {
	    die("Erro ao recuperar os serviços: " . $e->getMessage());
	}

	try {
		$infoTarifaAdicional = Painel::select('tb_tarifas', 'id = ?', [1]);			
	} catch (Exception $e) {
		die("Erro ao recuperar dados do banco (tarifas Adicionais)" . $e->getMessage());
	}

	try {
		$infoTarifaNoturna = Painel::select('tb_tarifas', 'id = ?', [2]);			
	} catch (Exception $e) {
		die("Erro ao recuperar dados do banco (tarifas Adicionais)" . $e->getMessage());
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
	<!--
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
-->
<!-- End Meta Pixel Code -->
	 
</head>



<!--
<div id="preloader">
    <div class="spinner"></div>
    <div id="preloader-text">Carregando agora</div>
</div>
-->

<body>


	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMK87QLZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<?php
		$url = isset($_GET['url']) ? $_GET['url'] : 'page-off';

		if(file_exists('pages/'.$url.'.php')){
			include('pages/'.$url.'.php');
		}else{
			include('pages/page-off.php');
		}
			
		
?>

<script>
    const includePathPainel = "<?php echo INCLUDE_PATH_PAINEL; ?>";
</script>

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
<script src="<?php echo INCLUDE_PATH;?>js/identificacao.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/cadastro.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/resumo-servicos.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/usuario.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/consultar.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/cupom.js"></script>
<script src="<?php echo INCLUDE_PATH;?>js/credito.js"></script>
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

	// Fecha o menu ao clicar em qualquer item dentro dele
	const menuLinks = document.querySelectorAll('.menu-dropdown a');
	menuLinks.forEach(link => {
	    link.addEventListener('click', function () {
	        const menu = document.querySelector('.menu-dropdown');
	        menu.classList.remove('active');
	    });
	});


	function togglePasswordVisibility() {
	    const passwordInput = document.getElementById("senha-login-agenda");
	    const toggleIcon = document.querySelector(".toggle-password i");

	    // Alterna o tipo do input
	    const isPassword = passwordInput.type === "password";
	    passwordInput.type = isPassword ? "text" : "password";

	    // Alterna o ícone
	    toggleIcon.className = isPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
	}
	//<i class="fa-solid fa-eye"></i> = aberto
	//<i class="fa-solid fa-eye-slash"></i> = fechado
</script>
	
    

  

</script>
<!--final scripts particulas-->


</body>



</html>