document.getElementById('mailBtn').addEventListener 'click', () ->
  data =
    nome: document.getElementById('nome').value
    email: document.getElementById('email').value
    telefone: document.getElementById('telefone').value
    mensagem: document.getElementById('mensagem').value

  $.ajax
    type: 'POST'
    url: 'http://crissonhos-paflopes.rhcloud.com/'
    contentType: 'application/json'
    dataType: 'json'
    data: JSON.stringify(data)
    success: (data, textStatus, jqXHR) ->
      console.log textStatus

setNomes = (nome) ->
  () ->
    if this.value.toLowerCase() is nome.toLowerCase()
      this.value = ''

document.getElementById('nome').addEventListener 'focus', setNomes('nome')
document.getElementById('email').addEventListener 'focus', setNomes('email')
document.getElementById('telefone').addEventListener 'focus', setNomes('telefone')
document.getElementById('mensagem').addEventListener 'focus', setNomes('Sua Mensagem')
