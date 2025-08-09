
// Form validation and enhancement
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');

    // Form submission handler
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic form validation
        if (validateForm()) {
            // Simulate form submission
            const submitButton = document.getElementById('submit');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('¡Gracias por tu feedback! Tu encuesta ha sido enviada exitosamente.');
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        }
    });

    // Form validation function
    function validateForm() {
        let isValid = true;
        const requiredFields = ['name', 'email', 'number'];

        requiredFields.forEach(fieldName => {
            const field = form.elements[fieldName];
            const errorDiv = document.getElementById(fieldName + '-error') ||
                document.getElementById(fieldName.replace('number', 'age') + '-error');

            if (!field.value.trim()) {
                showError(errorDiv, 'Este campo es requerido');
                isValid = false;
            } else if (fieldName === 'email' && !isValidEmail(field.value)) {
                showError(errorDiv, 'Por favor ingresa un email válido');
                isValid = false;
            } else if (fieldName === 'number' && (field.value < 10 || field.value > 120)) {
                showError(errorDiv, 'La edad debe estar entre 10 y 120 años');
                isValid = false;
            } else {
                clearError(errorDiv);
            }
        });

        return isValid;
    }

    function showError(errorDiv, message) {
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.color = '#dc3545';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '0.25rem';
        }
    }

    function clearError(errorDiv) {
        if (errorDiv) {
            errorDiv.textContent = '';
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Real-time validation
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateForm);
    });
});
