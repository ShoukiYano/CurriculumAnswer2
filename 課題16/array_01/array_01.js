// 配列 user を定義して「いちか」「25」「女性」を代入してください。
// その後下記表示結果のように画面上に出力してください。

// 【表示結果】
// 名前：いちか
// 年齢：25歳
// 性別：女性

// --------------------------------------------------------

// div要素取得
const textBox = document.getElementById('textBox');
let x;

// user 配列定義
let user = ["いちか","25","女性"];

// 名前表示
x = "名前 : " + user[0];
addTextFunc(x);

// 年齢表示
x = "年齢 : " + user[1] +"歳";
addTextFunc(x);

// 性別表示
x = "性別 : " + user[2];
addTextFunc(x);


// ---------------------------------------

// HTML要素生成関数
function addTextFunc(x){
    addText = document.createElement('p');
    addText.innerHTML = x;
    textBox.appendChild(addText);
}