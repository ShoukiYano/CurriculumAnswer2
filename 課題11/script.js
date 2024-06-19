const test = "課題11";
console.log(test);

/*
 * 押下されたボタンによって以下のように配列の中身を表示させてください。
 * 　1のボタン→一番目のデータです
 * 　2のボタン→次のデータです
 * 　3のボタン→最後のデータです
 * HTMLにはすでにボタンを用意してあるのでHTMLは書き換え不要です。
 * 用意されたpタグの下に文字を追加していってください。
 **/

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let target = document.getElementById('target');

const display = ["一番目のデータです", "次のデータです", "最後のデータです"];

btn1.addEventListener('click', function(){
    let p = document.createElement('p');
    p.textContent = display[0];
    target.appendChild(p);
})
btn2.addEventListener('click', function(){
    let p = document.createElement('p');
    p.textContent = display[1];
    target.appendChild(p);
})
btn3.addEventListener('click', function(){
    let p = document.createElement('p');
    p.textContent = display[2];
    target.appendChild(p);
})

