const test = "表示テスト";
console.log(test);

function log(a){
    console.log(a)
}

/*
 * 問1
 * for文を使って、1-150までの数字が順に並んだ配列を作成して
 * それを変数arrayに代入してください。
 **/

let array = [];

for (i = 0; i < 150; i++) {
    array[i] = i + 1;
}

//確認用
log(array);

/* 
 * 問2
 * start時からend時までをinterval分単位で選択できるドロップダウンリストを作成してください。
 * 適宜HTMLを変更しても構いませんが、変数start, end, intervalが変更されても
 * ちゃんとしたものが作成されるようにしてください。
 * 初期値では以下のようになります。
 * 7:00
 * 7:10
 * 7:20
 * 7:30
 * 7:40
 * 7:50
 * 8:00
 * 8:10
 *  ：
 *  ：
 *  ：
 *  ：
 * 11:50
 * 12:00
 * */
const start = 7;
const end = 12;
const interval = 10

const target = document.getElementById('target');

let minute;

for (i = start; i < end; i++) {
    for (j = 0; j < 60; j = j + interval) {
        let time = document.createElement('option');
        if (j < 10) {
            minute = "0" + j;
        } else {
            minute = j;
        }
        time.textContent = i + ":" + minute;
        target.appendChild(time);
    }
}

let time = document.createElement('option');
time.textContent = end + ":00";
target.appendChild(time);



/*
 * 問3
 * numsの中の数を奇数と偶数に分けて
 * 奇数だけの配列array1と偶数だけの配列array2を作成してください。
 **/

const nums = [1, 2, 3, 4, 7, 10, 14, 23, 45, 31, 56, 84, 82, 18, 62];

let array1=[];
let array2=[];

for (num of nums) {
    if (num % 2 == 1) {
        array1.push(num);
    } else {
        array2.push(num);
    }
}

//確認
log(array1);
log(array2);

/*
 * 問4
 * 名前と年齢と性別のデータが入った多次元配列peopleがあります。forEachを使って
 * 男性のみの多次元配列males, 女性のみの多次元配列femalesを作成してください。
 **/

const people = [
    ["山田", 24, "男性"],
    ["佐藤", 18, "女性"],
    ["坂本", 21, "男性"],
    ["田中", 19, "男性"],
    ["鈴木", 28, "女性"],
    ["宮崎", 27, "男性"],
    ["本田", 20, "男性"],
    ["西村", 19, "女性"],
    ["加藤", 21, "女性"],
    ["清水", 23, "男性"],
    ["森田", 29, "女性"],
    ["福島", 30, "男性"],
    ["島田", 25, "男性"],
    ["松本", 31, "男性"],
    ["三村", 25, "女性"],
    ["竹田", 22, "男性"],
    ["大谷", 25, "男性"],
    ["柳田", 32, "女性"]
]

let males=[],
females=[];

people.forEach(function(el){
    if (el[2]=="男性"){
        males.push(el);
    }
    if (el[2]=="女性"){
        females.push(el);
    }
});

log(males);
log(females);

/*
 * 問5
 * 問4の多次元配列people作成し
 * 25歳以上の人のみの多次元配列over25、25歳未満の人のみの多次元配列under25を作成してください。
 * */

let over25=[],
under25=[];

people.forEach(function(el){
    if (el[1] >= 25){
        over25.push(el);
    }
    if (el[1] < 25){
        under25.push(el);
    }
});

log(over25);
log(under25);

