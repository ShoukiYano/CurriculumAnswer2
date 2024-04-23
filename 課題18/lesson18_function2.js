//問1 CallBack関数を使用し'Drive'の後に'Line'をコンソールに出力してください。
function wrapper() {
  drive();
  console.log('line');
}

function drive() {
  console.log('Drive');
}

wrapper(drive);

//問2 CallBack関数を引数の中に直接記述し'将来の夢は'の後に'エンジニア'とコンソールに出力してください。
function wrapper2(callback) {
  console.log('将来の夢は');
  callback();
}

function engineer() {
  console.log('エンジニア');
}

wrapper2(engineer);

//問3 allow関数を用いてそれぞれの金額の平均をコンソールに算出してください。※金額はそれぞれ120, 160, 170とする
const average = () => {
  const numbers = [120, 160, 170];
  const sum = numbers.reduce((sum, num) => sum + num);
  return sum / numbers.length;
}

console.log(average());

//問4 以下の問題はallow関数を用いたコードです。しかしながらallow関数の性質上このまま実行をした場合にエラーとなってしまいます。
//そのためallow関数ではなく正しい記述をしエラーを修正してください。尚なぜエラーになっていたのかをコメントアウトに記入すること。
/***********************************************************************************************/

//(問題1) 「コンソールに'red','yellow','blue'と出力されること」

window.color = 'red';

function ColorOnConsole() {
  console.log(this.color);
}

ColorOnConsole();

let obj1 = {
  color: 'yellow',
  func: ColorOnConsole
};

let obj2 = {
  color: 'blue',
  func: ColorOnConsole
};
obj1.func();

obj2.func();

//「this, augments, superへのバインドがないので、メソッドとして使用することができない。参考文献: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions」←ここになぜ正しく実装されていなかったかの理由を記載すること

/***********************************************************************************************/
//(問題2)「コンソールに'碇シンジと出力されること'」
class Info {
  constructor(firstName, familyName) {
    this.firstName = firstName;
    this.familyName = familyName;
  }
}

let getInfo = new Info('碇', 'シンジ');

console.log(getInfo.firstName, getInfo.familyName);

//「アロー関数はコンストラクターとして使用することはできません。 new をつけて呼び出すと TypeError が発生します。 new.target キーワードにアクセスすることもできません。参考文献: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions」←ここになぜ正しく実装されていなかったかの理由を記載すること

/***********************************************************************************************/
// (問題3)「コンソールに1,2,3,4,5,と出力されること」

function sampleFunc(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

sampleFunc(1, 2, 3, 4, 5);

// //「this, augments, superへのバインドがないので、メソッドとして使用することができない。参考文献: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions」←ここになぜ正しく実装されていなかったかの理由を記載すること
// /***********************************************************************************************

