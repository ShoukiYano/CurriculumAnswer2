// ログイン画面
// 簡単なバリデーション　下記アカウント、パスワード固定とする。
// アカウント:ドライブライン　パスワード:driveLine123
// ログインボタンのクリックイベントを設定し、フォームの送信を防止する
document.querySelector('.login-button').addEventListener('click', function (event) {
    event.preventDefault();
    // アカウント名とパスワードの値を取得する
    let account = document.getElementById('account').value;
    let password = document.getElementById('password').value;
    // エラーメッセージの要素を取得する
    let errMsg = document.querySelector('.err-msg');

    // アカウント名とパスワードが両方とも正しくない場合
    if (account !== 'ドライブライン' && password !== 'driveLine123') {
        errMsg.innerHTML = "・アカウント名が違います。<br>・パスワードが違います。";
        // アカウント名が正しくない場合
    } else if (account !== 'ドライブライン') {
        errMsg.innerHTML = 'アカウント名が違います。';
        // パスワードが正しくない場合
    } else if (password !== 'driveLine123') {
        errMsg.innerHTML = 'パスワードが違います。';
        // アカウント名とパスワードが両方とも正しい場合、フォームを送信する
    } else {
        document.querySelector('form').submit();
    }
});
