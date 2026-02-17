

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const savedName = localStorage.getItem('remis_username');
    if (savedName && feedbackDiv) {
        feedbackDiv.innerHTML = `<p>Welcome back, ${savedName}! We look forward to hearing from you again.</p>`;
        feedbackDiv.style.color = 'var(--accent-color)';
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();


            const fname = document.getElementById('fname').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service-type').value;

            if (fname && email && service !== "") {

                const inquiry = {
                    name: fname,
                    email: email,
                    service: service,
                    date: new Date().toISOString()
                };


                localStorage.setItem('remis_username', fname);
                localStorage.setItem('remis_last_inquiry', JSON.stringify(inquiry));


                let reviewCount = Number(localStorage.getItem('remis_review_count')) || 0;
                reviewCount++;
                localStorage.setItem('remis_review_count', reviewCount);


                feedbackDiv.innerHTML = `<p>Thank you, ${fname}! Your inquiry about <strong>${service}</strong> has been received. (Count: ${reviewCount})</p>`;
                feedbackDiv.style.color = 'green';


                form.reset();
            } else {
                feedbackDiv.innerHTML = `<p>Please fill out all required fields.</p>`;
                feedbackDiv.style.color = 'red';
            }
        });
    }
});
