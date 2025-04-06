document.addEventListener('DOMContentLoaded', function() {
    // Get all conversion forms
    const conversionForms = document.querySelectorAll('.conversion-form');

    conversionForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get the specific convert button for this form
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            const fileInput = form.querySelector('input[type="file"]');

            // Validate if a file is selected
            if (!fileInput.files.length) {
                showAlert('error', 'Please select a file first');
                return;
            }

            try {
                // Show loading state
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Converting...';
                submitButton.disabled = true;

                // Get form data
                const formData = new FormData(form);
                const conversionType = form.getAttribute('data-conversion-type');

                const response = await fetch(`/convert/${conversionType}`, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (response.ok) {
                    showAlert('success', 'Conversion successful! Downloading file...');
                    window.location.href = result.download_url;
                } else {
                    showAlert('error', result.error || 'Conversion failed. Please try again.');
                }
            } catch (error) {
                showAlert('error', 'An unexpected error occurred. Please try again.');
            } finally {
                // Always reset the form and button state
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                form.reset();
                
                // Clear the file input value
                if (fileInput) {
                    fileInput.value = '';
                }
            }
        });

        // Add file input change listener to update UI
        const fileInput = form.querySelector('input[type="file"]');
        if (fileInput) {
            fileInput.addEventListener('change', function() {
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.disabled = !this.files.length;
            });
        }
    });

    function showAlert(type, message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;

        const alertContainer = document.querySelector('.alert-container');
        if (alertContainer) {
            // Clear any existing alerts
            alertContainer.innerHTML = '';
            alertContainer.appendChild(alertDiv);

            // Remove alert after 5 seconds
            setTimeout(() => {
                alertDiv.remove();
            }, 5000);
        }
    }
}); 