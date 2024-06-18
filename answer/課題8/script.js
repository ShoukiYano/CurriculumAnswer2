// 要素の取得
const greeting = document.getElementById('greeting');
const userNameInput = document.getElementById('userName');
const submitButton = document.getElementById('submitName');

// ボタンのクリックイベントリスナーを設定
submitButton.addEventListener('click', function() {
    // ユーザー名を入力フィールドから取得
    const userName = userNameInput.value;

    // ユーザー名が入力されていれば挨拶メッセージを更新
    if (userName) {
        greeting.textContent = `こんにちは、${userName}さん！`;
    } else {
        greeting.textContent = 'こんにちは、ゲスト！';
    }
});
