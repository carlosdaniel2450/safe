// Simulação de progresso (0 a 100%, 10% por módulo concluído)
let completedModules = 3; // Exemplo: 3 módulos concluídos (30%)
const totalModules = 10;

function updateProgress() {
    const progressPercent = (completedModules / totalModules) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent = `${progressPercent}% Concluído`;
}

function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    alert('🌸 Login bem-sucedido!');
    closePopup('login-popup');
}

function handleRegister(event) {
    event.preventDefault();
    alert('🌸 Registro bem-sucedido!');
    closePopup('register-popup');
}

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target.id);
    }
};

// Atualizar progresso ao carregar a página
updateProgress();

