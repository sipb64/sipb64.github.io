// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Ici, vous pouvez ajouter le code pour envoyer un e-mail
        // Par exemple, en utilisant une API d'envoi d'e-mails ou en envoyant les données à votre serveur
        console.log('Envoi du formulaire :', { name, email, message });

        // Réinitialiser le formulaire après l'envoi
        form.reset();
        alert('Votre message a été envoyé !');
    });
});