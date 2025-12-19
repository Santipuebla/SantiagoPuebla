document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto Typing
    const typingElement = document.getElementById("typing-text");
    const textToType = "FULL STACK DEVELOPER";
    let charIndex = 0;

    if (typingElement) {
        function typeWriter() {
            if (charIndex < textToType.length) {
                typingElement.innerHTML += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // 2. Botón con Auto-Scroll
    const btn = document.getElementById('btn-deploy');
    const content = document.getElementById('stack-content');

    if (btn && content) {
        btn.addEventListener('click', () => {
            content.classList.toggle('hidden');
            btn.textContent = content.classList.contains('hidden') ? "EXPLORAR SISTEMAS" : "CERRAR TERMINAL";
            
            // Si abrimos la terminal, bajamos el scroll suavemente
            if (!content.classList.contains('hidden')) {
                setTimeout(() => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        });
    }
});