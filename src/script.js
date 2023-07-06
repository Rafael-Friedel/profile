function exibirTexto() {
  let texto = document.getElementById('textoContratacao');
  texto.innerHTML = 'Me contrata aí, parca!';
  texto.style.display = 'block';
}

function chamarUsuario() {
  let texto = document.getElementById('textoContratacao');
  texto.innerHTML = 'Volta aqui, precisa ler isso.';
}

function ocultarTextoTitle() {
  let texto = document.getElementById('textoContratacao');
  texto.style.display = 'none';
}
