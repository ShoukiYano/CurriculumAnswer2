document.getElementById('submit-answers').addEventListener('click', function() {
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    const answer3 = document.getElementById('question3').value;

    let score = 0;
    if (answer1 === '東京') score++;
    if (answer2 === 'エベレスト') score++;
    if (answer3 === 'イヌ') score++;

    document.getElementById('result').textContent = `あなたの正解数は${score}です。`;
});
