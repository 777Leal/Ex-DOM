// Acessar o campo de texto
const campoTexto = document.getElementById('campoTexto');

// Adicionar um evento para detectar quando uma tecla é pressionada
document.addEventListener('keydown', function(event) {
    // Exibir a tecla pressionada no console
    console.log(`Tecla pressionada: ${event.key}`);
});
