document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || "####";
    const messageElement = document.getElementById('message');
    const descriptionElement = document.getElementById('description');
    const noButton = document.getElementById('noButton');

    messageElement.textContent = `Oi, ${name}`;

    noButton.addEventListener('mouseover', function() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        let newTop, newLeft;

        do {
            newTop = Math.random() * (containerRect.height - noButtonRect.height);
            newLeft = Math.random() * (containerRect.width - noButtonRect.width);
        } while (Math.abs(newTop - noButtonRect.top) < 50 || Math.abs(newLeft - noButtonRect.left) < 50);

        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });

    document.getElementById('yesButton').addEventListener('click', function() {
        alert('Fico muito feliz em saber disso! :)');
    });
});


