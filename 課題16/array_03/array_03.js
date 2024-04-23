// 問１
// 以下のような連想配列 human を作成してください。

// name: "はるか", age: 24, address: "東京"

let human = { name: "はるか", age: 24, address: "東京" }



// 問２
// はるか の年齢を下記表示結果のように画面上に表示してください。

// 【表示結果】
// はるかの年齢は24歳です。

const textBox = document.getElementById('textBox');
let x;

x = human['name'] + "の年齢は" + human['age']+ "歳です。";
addTextFunc(x);



// 問３
// 多次元配列 humans を作成してください。

// [
//    name: "はるか", age: 24, address: "東京"
//    name: "なつお", age: 30, address: "大阪"
//    name: "あきこ", age: 21, address: "福岡"
//    name: "ふゆみ", age: 28, address: "北海道"
// ]


let humans = [
    {name: "はるか", age: 24, address: "東京"},
    {name: "なつお", age: 30, address: "大阪"},
    {name: "あきこ", age: 21, address: "福岡"},
    {name: "ふゆみ", age: 28, address: "北海道"}
]



// 問４
// ふゆみ の 名前、年齢、住所 を下記表示結果のように画面上に表示してください。

// 【表示結果】
// ふゆみは北海道在住の28歳です。

let indexNum = 3;

x = humans[indexNum]['name'] + "は" + humans[indexNum]['address'] + "在住の" + humans[indexNum]['age']+ "歳です。";
addTextFunc(x);



// 問５
// 「name: "なつお", age: 30, address: "大阪"」を
// 「name: "なつき", age: 26, address: "東京"」に変更してください。

humans[1] = {name: "なつき", age: 26, address: "東京"};



// 問６
// なつき の 名前、年齢、住所 を下記表示結果のように画面上に表示してください。

// 【表示結果】
// なつきは東京在住の26歳です。

indexNum = 1;

x = humans[indexNum]['name'] + "は" + humans[indexNum]['address'] + "在住の" + humans[indexNum]['age']+ "歳です。";
addTextFunc(x);



// ---------------------------------------

// HTML要素生成関数
function addTextFunc(x){
    addText = document.createElement('p');
    addText.innerHTML = x;
    textBox.appendChild(addText);
}