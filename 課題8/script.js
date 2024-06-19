const confirmation = "表示確認";
console.log(confirmation);

/*
 * 課題7の改良を行ってもらいます。
 * 朝→夜→明日の順でボタンをクリックして、その時点での在庫数をページ上に表示してください。
 * 元々『課題8』となっているh1タグ（id = "output"）の内容を変更する形で出力してください。
 * 
 * step1:
 * id が output であるHTMLタグの内容を変更する関数を作成してください。
 * 変更する内容は引数で受け取ってください。
 * 
 * step2:
 * 在庫数を表示するconsole.logを問1で作成した関数に変更してください。
 * 
 * step3:
 * それぞれの在庫計算と出力の処理を、ボタンが押されたときの処理に変更してください。
 * 
 * step4:
 * スコープを意識して変数宣言の方法や位置を変更してください。必要がない場合は飛ばしてもOKです。
 * 
 **/

function changeText(content) {
    const output = document.getElementById('output');
    output.innerText = content;
}

const morning = document.getElementById('morning');
const evening = document.getElementById('evening');
const tomorrow = document.getElementById('tomorrow');



let zaiko = 7;
let zaikoMorning;
let zaikoEvening;
let zaikoTomorrow;


morning.addEventListener('click', function () {
    const arrival = 2;
    zaikoMorning = zaiko + arrival;


    changeText(zaikoMorning);
})


evening.addEventListener('click', function () {
    const earn = 4;
    zaikoEvening = zaikoMorning - earn;

    changeText(zaikoEvening);
})

tomorrow.addEventListener('click', function () {
    let move = Math.floor(zaikoEvening / -2);
    if (zaikoEvening == 0) {
        move = 2;
    }

    zaikoTomorrow = zaikoEvening + move;

    changeText(zaikoTomorrow);
})

const result = "明日の在庫は" + zaikoTomorrow + "個です。"

console.log(result);