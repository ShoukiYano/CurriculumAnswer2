//今回の問題で作成したJSを実行する際、2行目のボタン属性を使用しボタンを押した際に今回の問題で作成したJSが実行されるようにすること。
function OnButtonClick() {
//問1 Promisesを使用し2秒間タイマーをセットし開始時に'Promiseタイマー開始'、終了時に'Promiseタイマー終了'とコンソールに出力してください。
new Promise((resolve) => {
    console.log('Promiseタイマー開始');
    setTimeout(() => {
      console.log('Promiseタイマー終了');
      resolve();
    }, 2000);
  });

  
//問2 Promiseを使用して0~1までのランダム変数を作成しそのランダム変数が0.5以上の場合は成功、0.5以下の場合はエラーとしてコンソールに出力してください。
new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum >= 0.5) {
      console.log(`成功: ${randomNum}`);
      resolve(randomNum);
    } else {
      console.log(`エラー: ${randomNum}`);
      reject(new Error(`エラー: ${randomNum}`));
    }
  });


//問3 Promiseを使用し3秒後に"データを取得しました"を画面上に表示してください。※その際エラー処理も行ってください。
new Promise((resolve, reject) => {
    setTimeout(() => {
      // 成功した場合のみ「データを取得しました」を出力することを想定
      const success = true; // ここで成功か失敗を制御
      if (success) {
        document.getElementById('output').textContent = "データを取得しました";
        resolve();
      } else {
        reject(new Error("データ取得に失敗しました"));
      }
    }, 3000);
  }).catch(error => {
    document.getElementById('output').textContent = error.message;
  });


//問4 asyncを使用してコンソールに'DriveLine'と出力してください。
async function asyncPrint() {
    console.log('DriveLine');
  }
  asyncPrint();


//問5 awaitを使用しコンソールに'エンジニア'と出力してください。
(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('エンジニア');
  })();


//問6 asyncとawaitを使用し5秒間のタイマーを画面上に出力してください。その際5秒間のカウントダウンも画面上に表示させてください。
(async () => {
    const outputElement = document.getElementById('output');
    for (let i = 5; i >= 0; i--) {
      outputElement.textContent = `カウントダウン: ${i}`;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    outputElement.textContent = '完了しました';
  })();


//問7 asyncとawait式を用いて3秒遅延、その後5秒遅延するコードを記述しそれぞれ遅延した秒数を画面に表示させてください。
//(その際画面に表示する秒数はミリ秒ではなく正しい秒数形式で出力してください)

// 遅延を行う非同期関数
function delay(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// 遅延処理を行い、その後に経過時間を画面に表示する非同期関数
async function performDelays() {
  console.log('3秒遅延開始...');
  await delay(3);
  console.log('遅延時間: 3秒');

  console.log('5秒遅延開始...');
  await delay(5);
  console.log('遅延時間: 5秒');
}

// 非同期関数を呼び出し
performDelays();

}