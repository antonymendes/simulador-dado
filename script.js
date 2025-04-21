function rolarDado() {
  const numero = Math.floor(Math.random() * 6) + 1;
  document.getElementById('resultado').textContent = numero;
}
