document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
