
// 問１
// 下記の配列を作成して、下記表示結果のように配列の合計の値を画面に表示させてください。
// ※for~of文を使ってください。

// 【配列】
// [1,2,3,4,5,6,7,8,9,10]

// 【表示結果】
// 配列numberの合計値 : 55


const textBox = document.getElementById('textBox');
let addText;
let x;

let number = [2,4,6,8,10,12,14,16,18,20];
let sum = 0;

for(const num of number){
    sum += num;
}

x = "配列numberの合計値 : " + sum;
addTextFunc(x, 'p', textBox);



// 問２
// 下記の連想配列を作成して、下記表示結果のように画面に表示させてください。
// ※for~in文を使ってください。

// 【連想配列】
// [数学: 80, 国語: 45, 英語: 75, 科学: 80, 社会: 35]

// 【表示結果】
// 数学 : 80点
// 国語 : 45点
// 英語 : 75点
// 科学 : 80点
// 社会 : 35点
// 平均 : 63点

let schoolTest = {'数学': 80, '国語': 45, '英語': 75, '科学': 80, '社会': 35}
let total = 0;
let count = 0;
let ave = 0;

for(key in schoolTest){
    x = key + " : " + schoolTest[key] + "点"
    addTextFunc(x, 'p', textBox);
    total += schoolTest[key];
    count ++;
}

ave = total / count;
x = "平均 : " + ave + "点";
addTextFunc(x, 'p', textBox);



// 問３
// 下記の多次元配列を作成して、下記表示結果のようなテーブルを画面に表示させてください。
// ※forEach文を使ってください。

// 【多次元配列】
// [
//    name: "はるか", age: 24, address: "東京"
//    name: "なつお", age: 30, address: "大阪"
//    name: "あきこ", age: 21, address: "福岡"
//    name: "ふゆみ", age: 28, address: "北海道"
// ]

// 【表示結果】
// | name  | age | address |
// | はるか | 24  |   東京   |
// | なつお | 30  |   大阪   |
// | あきこ | 21  |   福岡   |
// | ふゆみ | 28  |  北海道  |

const table = document.getElementById('table');

let humans = [
    {name: "はるか", age: 24, address: "東京"},
    {name: "なつお", age: 30, address: "大阪"},
    {name: "あきこ", age: 21, address: "福岡"},
    {name: "ふゆみ", age: 28, address: "北海道"}
]


let name;
let age;
let address;
let i = 1;

// thタグ作成
addTextFunc("", 'tr', table);
let tr = table.querySelector(`tr:nth-child(${i})`);

for(key in humans[0]){
    addTextFunc(key, 'th', tr)
}

// tdタグ作成
humans.forEach(function(element){

    i++
    name = element['name'];
    age = element['age'];
    address = element['address'];

    addTextFunc("", 'tr', table);
    tr = table.querySelector(`tr:nth-child(${i})`);

    addTextFunc(name, 'td', tr);
    addTextFunc(age, 'td', tr);
    addTextFunc(address, 'td', tr);
})

// ---------------------------------------

// HTML要素生成関数
function addTextFunc(x, y, z){
    addText = document.createElement(y);
    addText.innerHTML = x;
    z.appendChild(addText);
}