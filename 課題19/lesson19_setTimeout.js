//問1 setTimeoutを使用し1秒後に画面上に "(自分の名前)"" 例)新上が と表示させてください。
const timeoutId = setTimeout(function() {
  const myName = document.getElementById("name");
    myName.textContent = "新上が";
  }, 1000);

//問2 setTimeoutを使用しalertで10秒後に"プログラムの終了"と表示してください。
  const time = setTimeout(function() {
    alert("プログラムの終了");
  }, 10000);

//問3 setTimeoutを使用し1秒後に1から6までの数字を1秒ごとに「LEVEL UP ⚪︎した！」と画面上に表示させてください。
const upView = document.getElementById("Up");
let count = 1;
const yuId = setTimeout (function countUp() {
  upView.textContent = "LEVEL UP " + count + " した！";
  count++;
  if (count <= 6) {
    setTimeout(countUp, 1000);
  }
},1000);

//問4 setTimeoutを使用し"勇者の剣", "勇者の盾", "ポーション" + "を手に入れた！"のメッセージを順番に2秒ごとに画面上に表示させてください。
const itemView = document.getElementById("item");
const messages = ["勇者の剣", "勇者の盾", "ポーション"];
let index = 0;

const itemId = setTimeout (function displayMessage() {
  itemView.textContent = messages[index] + "を手に入れた！";
  index++;

  if (index < messages.length) {
    setTimeout(displayMessage, 2000);
  }
},1000);

//問5 setTimeoutを使用し10から1までの数字をカウントダウンして、各数字を1秒ごとにコンソールに表示させてください
//なお、10秒後コンソールに「プログラムの終了。」と出力してください。
let countdown = 10;

function startCountdown() {
  console.log(countdown);
  countdown--;

  if (countdown >= 1) {
    setTimeout(startCountdown, 1000);
  }
}

const Scd = setTimeout(function() {
  clearTimeout(Scd);
  console.log('プログラムの終了。')
}, 10000);

startCountdown();

