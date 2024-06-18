document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.addEventListener('click', function() {
            this.remove();
        });
        document.getElementById('task-list').appendChild(listItem);
        document.getElementById('new-task').value = '';
    }
});
