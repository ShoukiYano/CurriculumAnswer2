document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // フォームの送信を防ぐ

    // 入力値を取得
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const agree = document.getElementById('agree').checked;

    // 入力値の検証
    if (!agree) {
        alert('');
        return;
    }

    // 入力値の検証
    if (!name || !email || !message) {
        alert('全ての項目を入力してください。');
        return;
    }



    // メールアドレスの形式を検証
    if (!validateEmail(email)) {
        alert('有効なメールアドレスを入力してください。');
        return;
    }



    // ここで、入力値をサーバーに送信する処理を書く
    fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('お問い合わせありがとうございます。');
            location.reload();
            return;
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('送信に失敗しました。');
            location.reload();
            return;
        });

    // フォームの入力値をクリア
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('contact-form').reset();
    alert('');
    location.reload();
    return;
});

// メールアドレスの形式を検証する関数
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

