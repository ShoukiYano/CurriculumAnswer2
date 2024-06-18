// ボタンとh1要素を取得
const button = document.getElementById('changeText');
const greeting = document.getElementById('greeting');

// ボタンのクリックイベントリスナーを設定
button.addEventListener('click', function() {
    // h1要素のテキストを変更
    greeting.textContent = 'こんにちは、宇宙！';
});
