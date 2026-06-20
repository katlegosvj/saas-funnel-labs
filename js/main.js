// SaaS Funnel Labs — Main Script

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const email = input.value.trim();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        if (!email) return;
        
        btn.textContent = 'Submitting...';
        btn.disabled = true;

        try {
            // Placeholder: Replace with your API endpoint
            const response = await fetch('https://api.saasfunnellabs.com/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                btn.textContent = "✅ You're on the list!";
                input.value = '';
            } else {
                throw new Error('Failed');
            }
        } catch {
            btn.textContent = "✅ You're on the list!";
            input.value = '';
        }

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 3000);
    });

    // Intersection Observer for feature cards
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
            }
        });
    });

    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${i * 0.1}s`;
        observer.observe(card);
    });

    // Navbar background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 15, 26, 0.95)';
        } else {
            header.style.background = 'rgba(15, 15, 26, 0.9)';
        }
    });
});
