// Generated by CoffeeScript 1.9.2
(function() {
  var setNomes;

  document.getElementById('mailBtn').addEventListener('click', function() {
    var data;
    data = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      mensagem: document.getElementById('mensagem').value
    };
    return $.ajax({
      type: 'POST',
      url: 'http://crissonhos-paflopes.rhcloud.com/',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(data),
      success: function(data, textStatus, jqXHR) {
        return console.log(textStatus);
      }
    });
  });

  setNomes = function(nome) {
    return function() {
      if (this.value.toLowerCase() === nome.toLowerCase()) {
        return this.value = '';
      }
    };
  };

  document.getElementById('nome').addEventListener('focus', setNomes('nome'));

  document.getElementById('email').addEventListener('focus', setNomes('email'));

  document.getElementById('telefone').addEventListener('focus', setNomes('telefone'));

  document.getElementById('mensagem').addEventListener('focus', setNomes('Sua Mensagem'));

}).call(this);
