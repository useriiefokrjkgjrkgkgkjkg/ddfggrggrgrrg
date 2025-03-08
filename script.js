document.addEventListener('DOMContentLoaded', () => {
    const sparklesContainer = document.querySelector('.sparkles');
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '2px';
        sparkle.style.height = '2px';
        sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        
        // Случайная начальная позиция
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        
        sparklesContainer.appendChild(sparkle);
        
        sparkle.animate([
            { transform: 'scale(0) rotate(0deg)', opacity: 0 },
            { transform: 'scale(1) rotate(180deg)', opacity: 1 },
            { transform: 'scale(0) rotate(360deg)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => sparkle.remove();
    }
    
    // Создаем блестки периодически
    setInterval(createSparkle, 50);

    // Анимация цветов при наведении
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach(flower => {
        flower.addEventListener('mouseover', () => {
            // Создаем дополнительные блестки вокруг цветка
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const rect = flower.getBoundingClientRect();
                    const sparkle = document.createElement('div');
                    sparkle.style.position = 'absolute';
                    sparkle.style.width = '3px';
                    sparkle.style.height = '3px';
                    sparkle.style.backgroundColor = `hsl(${Math.random() * 60 + 330}, 100%, 80%)`;
                    sparkle.style.borderRadius = '50%';
                    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                    sparkle.style.zIndex = '1000';
                    document.body.appendChild(sparkle);
                    
                    sparkle.animate([
                        { transform: 'scale(1) translate(0, 0)', opacity: 1 },
                        { transform: `scale(0) translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`, opacity: 0 }
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    }).onfinish = () => sparkle.remove();
                }, i * 100);
            }
        });
    });

    // Создаем падающие лепестки
    function createPetal() {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.position = 'fixed';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-20px';
        petal.style.fontSize = '20px';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        petal.style.opacity = '0.6';
        petal.style.pointerEvents = 'none';
        
        document.body.appendChild(petal);
        
        const animation = petal.animate([
            { transform: `translateY(0) rotate(${Math.random() * 360}deg)`, opacity: 0.6 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 3000,
            easing: 'linear'
        });
        
        animation.onfinish = () => petal.remove();
    }

    // Создаем новый лепесток каждые 2 секунды
    setInterval(createPetal, 2000);
}); 