(function () {
  'use strict';

  document.getElementById('mailBtn').addEventListener('click', function () {
    var data = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      mensagem: document.getElementById('mensagem').value
    };

    $.ajax({
      type: 'POST',
      url: 'http://crissonhos-paflopes.rhcloud.com/',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(data),
      success: (function (dados) {
        return function (ignored) {
          alert(
              "Email enviado com sucesso!\n" +
              "Nome: ".concat(dados.nome).concat("\n") +
              "Email: ".concat(dados.email).concat("\n") +
              "Telefone: ".concat(dados.telefone).concat("\n")
          );
        }
      }(data)),
      error: function() {
        alert("Oooops! Alguma coisa deu errado.")
      }
    });
  });

  var setNomes = function (nome) {
    return function () {
      if (this.value.toLocaleLowerCase() === nome.toLowerCase()) {
        this.value = '';
      }
    };
  };

  document.getElementById('nome').addEventListener('focus', setNomes('nome'));
  document.getElementById('email').addEventListener('focus', setNomes('email'));
  document.getElementById('telefone').addEventListener('focus', setNomes('telefone'));
  document.getElementById('mensagem').addEventListener('focus', setNomes('Sua Mensagem'));
}());
