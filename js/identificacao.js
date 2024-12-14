$(document).ready(function(){
	validaTelefoneLogin();
  validaTelefoneConsulta();
  validaTelefoneDepoimento();
})

function validaTelefoneLogin(){
	 
    const mask = (value) => {
        value = value.replace(/\D/g, ""); // Remove tudo que não é número
        value = value.substring(0, 11); // Limita a 11 números
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses no DDD
        value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Adiciona o traço
        return value;
    };

    $('[name="telefone-login-agenda"]').on("input", function () {
        const maskedValue = mask($(this).val());
        $(this).val(maskedValue);
    });

    $(".form-telefone-login").on("submit", function(event) {
        event.preventDefault();

      const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
      const phoneInput = $('[name="telefone-login-agenda"]').val();
      // Regex para validar número de telefone no formato BR
      
     

        if (phoneRegex.test(phoneInput)) {
            //alert("Número válido: " + iti.getNumber());
            $(".js-sucess-modal-agenda-servicos").fadeIn();
            $('.js-sucess-modal-agenda-servicos .txt-p').text('Numero Inválido');
        } else {
            //$("#phone-error").text("Número de telefone inválido!").show();
            $(".js-error-modal-agenda-servicos").fadeIn();
            $('.js-error-modal-agenda-servicos .txt-p').text('Numero Inválido');
        }
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