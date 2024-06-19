const confirmation = "表示確認";
console.log(confirmation);

/*
 * 新しい変数を定義して代入することで、すでに記載されているconsole.logの結果が指示通りになるようしてください。
 * ただし、初期在庫(zaiko)が7以外の時も、解答を書き換えず指示通りの数になるようにしてください。
 * また、console.log()の中身を書き換えないでください。
 * 
 * 本来であれば在庫数に少数点やマイナスが発生することはありませんが、今後の課題で出ないプログラムに改良してもらう予定です。
 * したがって、今回の課題では小数点、負の数が出てもよしとします。
 **/
let zaiko = 7;

// 問1：今朝二つ2つ入荷しました。今朝の入荷後の在庫数を表示してください。

const arrival = 2;
const zaikoMorning = zaiko + arrival;

console.log(zaikoMorning);


//　問2：営業中に4つ売れました。閉店後の在庫数を表示してください。

const earn = 4;
const zaikoEvening = zaikoMorning - earn;

console.log(zaikoEvening);


//　問3：明日、別の店に半分在庫を移すことになりました。入荷はありません。明日の在庫数を表示してください。

const move = zaikoEvening / 2;
const zaikoTomorrow = zaikoEvening - move;

console.log(zaikoTomorrow);


/*
 * 新しい変数resultを定義し、文字列を結合させて以下の問いの通りに表示させてください。
 **/

// 問4:「明日の在庫は[zaikoTomorrow]個です。」という文字を表示してください。
// 例えば、初期値が5の場合は「今日の在庫は2.5個です。」と表示されます。

const result = "明日の在庫は" + zaikoTomorrow + "個です。"

console.log(result);