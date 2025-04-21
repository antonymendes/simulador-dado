function rolarDado() {
  const numero = Math.floor(Math.random() * 6) + 1;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = numero;
  resultadoDiv.style.fontSize = "6rem"; // Só aumenta o número, não o texto inicial
}
