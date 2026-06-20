// SaaS Funnel Labs — Main Script

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Submitting...';
        btn.disabled = true;
        
        // Placeholder — will integrate with backend later
        setTimeout(() => {
            btn.textContent = '✅ You\'re on the list!';
            form.querySelector('input').value = '';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }, 1000);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
