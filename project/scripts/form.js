// Form Handling JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 1. Check for existing user in localStorage
    const savedName = localStorage.getItem('remis_username');
    if (savedName && feedbackDiv) {
        feedbackDiv.innerHTML = `<p>Welcome back, ${savedName}! We look forward to hearing from you again.</p>`;
        feedbackDiv.style.color = 'var(--accent-color)';
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission for demo purposes

            // 2. Get values
            const fname = document.getElementById('fname').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service-type').value;

            // 3. Simple Validation / Conditional Branching
            if (fname && email && service !== "") {
                // 4. Object creation
                const inquiry = {
                    name: fname,
                    email: email,
                    service: service,
                    date: new Date().toISOString()
                };

                // 5. Save to localStorage
                localStorage.setItem('remis_username', fname);
                localStorage.setItem('remis_last_inquiry', JSON.stringify(inquiry));

                // 6. Review Counter (Array/Object usage)
                let reviewCount = Number(localStorage.getItem('remis_review_count')) || 0;
                reviewCount++;
                localStorage.setItem('remis_review_count', reviewCount);

                // Feedback
                feedbackDiv.innerHTML = `<p>Thank you, ${fname}! Your inquiry about <strong>${service}</strong> has been received. (Count: ${reviewCount})</p>`;
                feedbackDiv.style.color = 'green';

                // Reset form
                form.reset();
            } else {
                feedbackDiv.innerHTML = `<p>Please fill out all required fields.</p>`;
                feedbackDiv.style.color = 'red';
            }
        });
    }
});
