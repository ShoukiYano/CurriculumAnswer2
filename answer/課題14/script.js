let count = 0;

document.getElementById('increment').addEventListener('click', function() {
    count++;
    document.getElementById('count').textContent = count;
});

document.getElementById('decrement').addEventListener('click', function() {
    count--;
    document.getElementById('count').textContent = count;
});
