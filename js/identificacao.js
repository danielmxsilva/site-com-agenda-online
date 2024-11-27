$(document).ready(function(){
	validaTelefoneLogin();
  validaTelefoneConsulta();
  validaTelefoneDepoimento();
})

function validaTelefoneLogin(){
	$('.form-login-agenda').on('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário para fins de teste

    // Reposiciona o form-telefone-login no topo
    $('.form-login-agenda').css({
      position: 'static',
      transform: 'translate(0,0)',
      left: '0',
      top: '0',
      marginBottom: '20px'
    });

    // Exibe o form-informacoes-cliente com efeito de slide
    $('.form-informacoes-cliente').slideDown(300);
  });
}

function validaTelefoneConsulta(){
  $('.form-login-consulta').on('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário para fins de teste

    console.log("click form");
  });
}

function validaTelefoneDepoimento(){
  $('.form-login-depoimento').on('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário para fins de teste

    console.log("click form depoimento");
  });
}