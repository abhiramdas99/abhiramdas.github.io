const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formData = new FormData(form);

    try {
        const response = await fetch('./email_config/send_email.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();

        responseDiv.textContent = 'Message sent successfully.';

        form.reset();
    } catch (error) {
        responseDiv.textContent = 'There was an error sending the message.';
        console.error(error);
    }

    setTimeout(() => {
        responseDiv.textContent = '';
    }, 4000);
});