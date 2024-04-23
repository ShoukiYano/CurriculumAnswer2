// 問１
// 配列 users を定義して、「たろう」「じろう」「さぶろう」を代入してください。
// その後、「じろう」を画面上に表示させてください。

// 【表示結果】
// 名前：じろう

const textBox = document.getElementById('textBox');
let x;

let users = new Array(1);
users = ["たろう", "じろう", "さぶろう"];

x = "名前 : " + users[1];
addTextFunc(x);



// 問２
// 配列 users の「じろう」を「にろう」に変更してください。
// その後、「じろう」を画面上に表示させてください。

// 【表示結果】
// 名前：にろう

users[1] = "にろう";

x = "名前 : " + users[1];
addTextFunc(x);



// 問３
// 配列 users の末尾に「しろう」を追加してください。
// その後、配列 users を画面上に表示させてください。

// 【表示結果】
// users配列：たろう,にろう,さぶろう,しろう

users.push("しろう");

x = "users配列 : " + users;
addTextFunc(x);



// 問４
// 配列 users の「にろう」を削除してください。
// その後、配列 users を画面上に表示させてください。

// 【表示結果】
// users配列：たろう,,さぶろう,しろう

delete users[1];

x = "users配列 : " + users;
addTextFunc(x);



// 問５
// 配列 users を初期化して、「いちこ」「にこ」「さつき」「よつこ」「いつき」を代入してください。
// その後、配列 users を画面上に表示させてください。

// 【表示結果】
// users配列：いちこ,にこ,さつき,よつこ,いつき

users = [];
users = ["いちこ","にこ","さつき","よつこ","いつき"];

x = "users配列 : " + users;
addTextFunc(x);



// ---------------------------------------

// HTML要素生成関数
function addTextFunc(x){
    addText = document.createElement('p');
    addText.innerHTML = x;
    textBox.appendChild(addText);
}