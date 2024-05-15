document.addEventListener('DOMContentLoaded', (event) => {
    const messageElement = document.getElementById('message');
    const numberElement = document.getElementById('number');
    const endMessageElement = document.getElementById('end-message');
    let remainingNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let count = 0
        ;

    document.addEventListener('keydown', (event) => {
        if (['z', 'x', 'c'].includes(event.key) && remainingNumbers.length > 0
           ) {
            const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
            const number = remainingNumbers.splice(randomIndex, 1)[0];
            numberElement.textContent = number;
            count++;

            if (remainingNumbers.length === 0) {
                messageElement.textContent = '';
            }

            if (count === 8) {
                endMessageElement.textContent = '終了';
            }
        }
    });
});
