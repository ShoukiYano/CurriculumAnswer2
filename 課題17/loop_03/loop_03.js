
// 問１
// 下記配列の中身を3桁になるように0パッティングして 001 ~ 015 の順番にjson形式で画面に表示してください。
// // ※for ~of文を使って回答してください。

let userId = [1,5,6,3,4,2,7,9,8,10,11,14,12,15,13];

// 【表示結果】
// ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015"]

const textBox = document.getElementById('textBox');
let userIdSort = [];
let userIdText = [];
let x;
const htmlTagP ='p';
const htmlTagOption = 'option';

// userId ソート
let f = function (a, b){
    return a - b;
}
userIdSort = userId.sort(f);
console.log(userIdSort);

// 0パッティングして代入
let i = 0;
for (const id of userIdSort){
    userIdText[i] = ('000' + id).slice(-3);
    i ++;
}

// json形式に変換
let jsonText = JSON.stringify(userIdText);

// 画面表示
x = jsonText;
addTextFunc(x, htmlTagP, textBox);



// 問２
// array_04.htmlの class "text" の値を取得し、カンマ区切りで画面に表示してください。
// ※for 文を使って回答してください。

// 【表示結果】
// りんご,みかん,もも,パイナップル,キウイ,メロン,ぶどう,バナナ,グレープフルーツ,なし

let inputVal = document.getElementsByClassName('text');
let inputText;

for (i = 0; i < inputVal.length; i++){
    // 最初の一回 カンマ区切りで追加
    if(!inputText){
        inputText = inputVal[i].value + ",";
        continue;
    }
    // 2回目以降のカンマ区切りで追加
    inputText += inputVal[i].value + ",";
}

// 最後にカンマが付いていれば削除
if(inputText.slice(-1) == ","){
    inputText = inputText.slice(0,-1);                  
}

// 画面表示
x = inputText;
addTextFunc(x, htmlTagP, textBox);



// 問３
// 問２でカンマ区切りで表示した文字をカンマ区切りで配列に格納し、
// 配列分値のあるドロップダウンリストを作成してください。
// ※for Eachメソッドを使って回答してください。

const pulldown = document.getElementById('pulldown');

let pulldownText = inputText.split(',');

// const pulldown = document.getElementById('pulldown');

// let pulldownText = inputText.split(',');

// pulldownText.forEach(function(x){
//     addTextFunc(x, htmlTagOption, pulldown);
// });



// ---------------------------------------

// HTML要素生成関数
function addTextFunc(x, y, z){
    addText = document.createElement(y);
    addText.innerHTML = x;
    z.appendChild(addText);
}








