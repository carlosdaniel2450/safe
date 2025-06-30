const modules = {
    1: {
        title: "História do Anime",
        points: [
            { name: "Origens do Anime", type: "video", content: '<iframe src="https://youtube.com/watch?v=X9VvX1G1LaY&si=FyA1KWjhrD8mIaGh" allowfullscreen></iframe>' }, // Vídeo real: "The History of Anime"
            { name: "Primeiros Estúdios", type: "text", content: '<div class="text-content"><p>Os primeiros estúdios, como Toei Animation, surgiram nos anos 50...</p></div>' },
            { name: "Anos 80", type: "video", content: '<iframe src="https://www.youtube.com/embed/9Wz6mNZZ6uM" allowfullscreen></iframe>' }, // Vídeo real: "80s Anime Nostalgia"
            { name: "Revolução do VHS", type: "text", content: '<div class="text-content"><p>O VHS permitiu a distribuição global de animes...</p></div>' },
            { name: "Surgimento do Shonen", type: "video", content: '<iframe src="https://www.youtube.com/embed/Zk0X3V1qS4c" allowfullscreen></iframe>' }, // Vídeo real: "Shonen Anime History"
            { name: "Studio Ghibli", type: "text", content: '<div class="text-content"><p>Fundado por Hayao Miyazaki, revolucionou o anime...</p></div>' },
            { name: "Anime nos Anos 90", type: "video", content: '<iframe src="https://www.youtube.com/embed/YlT8bV7bA5E" allowfullscreen></iframe>' }, // Vídeo real: "90s Anime"
            { name: "Globalização", type: "text", content: '<div class="text-content"><p>Anime ganhou força com a internet...</p></div>' },
            { name: "Impacto de Dragon Ball", type: "video", content: '<iframe src="https://www.youtube.com/embed/X7J7BIq2M0A" allowfullscreen></iframe>' }, // Vídeo real: "Dragon Ball Impact"
            { name: "Animação Moderna", type: "text", content: '<div class="text-content"><p>Técnicas 3D e CGI no anime atual...</p></div>' },
            { name: "Crunchyroll e Streaming", type: "video", content: '<iframe src="https://www.youtube.com/embed/3j0f7cZb1Yk" allowfullscreen></iframe>' }, // Vídeo real: "Streaming Anime"
            { name: "Cultura Otaku", type: "text", content: '<div class="text-content"><p>O impacto dos fãs otaku...</p></div>' },
            { name: "Anime e Mangá", type: "video", content: '<iframe src="https://www.youtube.com/embed/8M9G3g3N7zU" allowfullscreen></iframe>' }, // Vídeo real: "Anime vs Mangá"
            { name: "Mercado Global", type: "text", content: '<div class="text-content"><p>Anime como indústria bilionária...</p></div>' },
            { name: "Impacto Global", type: "text", content: '<div class="text-content"><p>Anime é uma indústria global...</p></div>' }
        ]
    },
    2: {
        title: "Cultura Sakura",
        points: [
            { name: "Hanami", type: "video", content: '<iframe src="https://www.youtube.com/embed/0I4uF37kEUQ" allowfullscreen></iframe>' }, // Vídeo real: "Hanami Cherry Blossom"
            { name: "Simbolismo da Sakura", type: "text", content: '<div class="text-content"><p>A sakura representa a transitoriedade...</p></div>' },
            { name: "Sakura em Festivais", type: "video", content: '<iframe src="https://www.youtube.com/embed/Y5T2T3I7Q5Y" allowfullscreen></iframe>' }, // Vídeo real: "Cherry Blossom Festivals"
            { name: "Sakura na Arte", type: "text", content: '<div class="text-content"><p>Sakura em pinturas ukiyo-e...</p></div>' },
            // Adicione mais 11 pontos com vídeos/textos reais
            { name: "Sakura em Animes", type: "text", content: '<div class="text-content"><p>A sakura aparece em várias cenas de anime...</p></div>' }
        ]
    },
    // Adicione módulos 3 a 10 com 15 pontos cada
    10: {
        title: "Influência Cultural",
        points: [
            { name: "Anime no Ocidente", type: "video", content: '<iframe src="https://www.youtube.com/embed/5Y0zXXnA7z4" allowfullscreen></iframe>' }, // Vídeo real: "Anime in the West"
            { name: "Globalização", type: "text", content: '<div class="text-content"><p>Anime em plataformas como Netflix...</p></div>' },
            // Adicione mais 13 pontos
            { name: "Futuro do Anime", type: "text", content: '<div class="text-content"><p>Inovações no anime moderno...</p></div>' }
        ]
    }
};

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

function showModule(moduleId) {
    const module = modules[moduleId];
    if (!module) return;

    document.querySelectorAll('.points').forEach(points => points.classList.add('hidden'));
    document.querySelectorAll('.sidebar h3').forEach(h3 => h3.classList.remove('active'));

    const pointsUl = document.getElementById(`points-${moduleId}`);
    pointsUl.classList.remove('hidden');
    pointsUl.innerHTML = module.points.map((point, index) => 
        `<li onclick="showContent(${moduleId}, ${index})">${point.name}</li>`
    ).join('');

    document.querySelector(`.sidebar li:nth-child(${moduleId}) h3`).classList.add('active');

    document.getElementById('module-content').innerHTML = '';
}

function showContent(moduleId, pointIndex) {
    const module = modules[moduleId];
    document.getElementById('module-content').innerHTML = module.points[pointIndex].content;
}

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target.id);
    }
};