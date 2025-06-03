document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
    
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value;
    if (!subject) {
        document.getElementById('subject-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate human check
    const human = document.getElementById('human').checked;
    if (!human) {
        alert('Por favor, confirme que você é humano.');
        isValid = false;
    }
    
    if (isValid) {
        alert('Mensagem enviada com sucesso! A equipe FIAP entrará em contato em breve.');
        this.reset();
    }
});