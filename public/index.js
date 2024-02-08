import Budget from "../data/budget.js";

window.addEventListener('load', () => {
    const slots = document.querySelectorAll('.slot');
    let timer;

    function activateSlot(slot) {
        const activeSlot = document.querySelector('.slot.active');
        if (activeSlot) {
            activeSlot.classList.remove('active');
        }
        slot.classList.add('active');
    }

    function startTimer() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // Trocar para o próximo slot quando o temporizador expirar
            const activeSlot = document.querySelector('.slot.active');
            const nextSlot = activeSlot ? activeSlot.nextElementSibling : null;
            if (nextSlot) {
                activateSlot(nextSlot);
            } else {
                // Se chegarmos ao último slot, voltar ao primeiro
                activateSlot(slots[0]);
            }
            startTimer(); // Reiniciar o temporizador
        }, 2000); // Tempo em milissegundos (por exemplo, 3 segundos)
    }

    // Ativar o slot 2 como destaque inicial
    const initialActiveSlot = document.querySelector('#slot-2');
    if (initialActiveSlot) {
        activateSlot(initialActiveSlot);
    }

    // Adicionar ouvinte de mouseover a cada slot
    slots.forEach(slot => {
        slot.addEventListener('mouseover', () => {
            clearTimeout(timer); // Limpar temporizador quando o mouse está sobre um slot
            activateSlot(slot);
        });
        
        slot.addEventListener('mouseout', () => {
            startTimer();
        })
    });

    // Iniciar o temporizador no carregamento da página
    setTimeout(()=> {startTimer();}, 3000);
});