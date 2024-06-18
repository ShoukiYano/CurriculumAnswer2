document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        alert(`あなたの評価は${rating}です。`);
        document.querySelectorAll('.star').forEach(s => {
            s.style.color = s.getAttribute('data-value') <= rating ? 'gold' : 'gray';
        });
    });
});
