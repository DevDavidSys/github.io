document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const elements = document.querySelectorAll('[data-lang]');
    const languageText = {
        pt: '🌐 ',
        en: '🌐 ',
        fr: '🌐 ',
        es: '🌐 '
    };

    // Atualiza o texto do idioma atual
    document.getElementById('current-language').textContent = languageText[selectedLanguage];

    // Alterna a visibilidade dos elementos com base no idioma selecionado
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === selectedLanguage) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

// Inicializar o site em Português
window.onload = function() {
    document.getElementById('language-select').value = 'pt';
    document.getElementById('language-select').dispatchEvent(new Event('change'));
};