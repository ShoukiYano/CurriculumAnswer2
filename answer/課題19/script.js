document.getElementById('filter-input').addEventListener('input', function(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('#filter-list li').forEach(function(item) {
        if (item.textContent.toLowerCase().indexOf(text) != -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
