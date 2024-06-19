const confirmation = "表示確認";
console.log(confirmation);

/*
 * 課題6の改良を行ってもらいます。
 * 小数点を出ないようにしてください、問題文に指示があるのでそれに従ってください。
 * 
 * 添付テキストファイルにヒントが記載してあるので、分からなければそちらも参照してください。
 **/
let zaiko = 7;


const arrival = 2;
const zaikoMorning = zaiko + arrival;

console.log(zaikoMorning);


const earn = 4;
const zaikoEvening = zaikoMorning - earn;

console.log(zaikoEvening);


/* 
 * 問：
 * 明日、別の店に半分在庫を移すことになりました。小数点が出た場合、切り捨てた個数を別の店舗に移します。
 * 営業終了時点の在庫が0の場合、他店から2つ貰って、それ以外の在庫移動はなしとします。
 * 明日の在庫数を表示してください。
 **/

let move = Math.floor(zaikoEvening / -2);

if(zaikoEvening == 0){
    move = 2;
}

const zaikoTomorrow = zaikoEvening + move;

console.log(zaikoTomorrow);

const result = "明日の在庫は" + zaikoTomorrow + "個です。"

console.log(result);