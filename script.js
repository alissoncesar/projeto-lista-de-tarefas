document.querySelector("button").onclick= () => {
    document.body.classList.toggle("dark-mode")
}

const input = document.getElementById('meuInput');
const botao = document.getElementById('mostrarInput');

botao.addEventListener('click', () => {
  // Inverte o estado de exibição do input
  input.style.display = input.style.display === 'none' ? 'block' : 'none';
});