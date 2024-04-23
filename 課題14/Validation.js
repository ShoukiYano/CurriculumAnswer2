
// 問２
// 送信ボタンを押した時に入力した値を下記表示形式で画面に出力させてください。

// 【表示形式】
// ユーザー名「〇〇」を登録しました！


// 問３
// 送信ボタンを押した時に下記バリデーション処理を行ってください。

// バリデーション１
// ・NULLチェック
// ・入力値がなかった場合にエラー表示
// 　エラー内容：「値を入力してください。」

// バリデーション２
// ・10文字以上の入力の場合にエラー表示
// 　エラー内容：「10文字以内で入力してください。」


// 表示用 p 要素取得
const displayText = document.getElementById("displayText");

function linkClick(){
    // 表示リセット
    displayText.textContent = "";
    // 入力値取得
    const text = document.getElementById('inputText').value;

    // バリデーション　null, 空白 チェック
    if(!text || text == ""){
        alert("値を入力してください。");
        return;
    }
    // バリデーション　文字数チェック
    if(text.length >10){
        alert("10文字以内で入力してください。");
        return;
    }
    // 表示形式
    const userInput = "ユーザー名「" + text + "」を登録しました！";
    // 表示
    displayText.textContent = userInput;
}