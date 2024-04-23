// 【前提】
// ・関数の処理は下の「関数処理」以降に記載して下さい。
// ・関数の呼び出しは上の「関数呼び出し」に記載して下さい。
// ・変数の代入は必要なタイミングで問題ないですが、変数の宣言は関数の中で宣言するもの以外は
// 　一番上の「環境変数宣言」に記入して下さい。



// 問１
// function_01.html の id "box" の色を任意の色に変える関数 changeBgColor を作成して下さい。
// ※任意の色は変数に代入し引数として受け取る形にして下さい。

// 問２
// 2つの数値を引数として受け取り、その合計を返す関数 addNumbers を作成してください。
// また、返っててきた戻り値をコンソールに出力して下さい。

// 問３
// 2つの文字列を引数として受け取り、結合した文字列を返す関数 concatStrings を作成してください。
// また、返っててきた戻り値をコンソールに出力して下さい。

// 問４
// 数値を引数として受け取り、その数値が偶数なら true を、奇数なら false を返す関数 isEven を作成してください。
// また、返っててきた戻り値をコンソールに出力して下さい。

// 問５
// function_01.html の id "textBox" のなかに 任意の文字列 を pタグ で追加できる関数 addHtmlTag を作成して下さい。
// ※「id "textBox"」と「任意の文字列」は変数に代入してから引数として関数に渡して下さい。


btn.addEventListener('click', function(){

// 【環境変数宣言】
    const box = document.getElementById('box');
    const textBox = document.getElementById('textBox');

    let color;      // 問１
    let sumNum;     // 問２
    let conText;    // 問３
    let evenCheck;  // 問４
    let text;       // 問５


// 【関数呼び出し】
    // 問１
    color = "red";
    changeBgColor(color, box);

    // 問２
    sumNum = addNumbers(10, 10);
    console.log(sumNum);

    // 問３
    conText = concatStrings("Hello", "World.");
    console.log(conText);

    // 問４
    evenCheck = isEven(6);
    console.log(evenCheck);

    // 問５
    text = "Hello World."
    addHtmlText(text, textBox);

});

// 【関数処理】

// 問１
function changeBgColor(color, box){
    box.style.backgroundColor = color;
};

// 問２
function addNumbers(a, b){
    let sumNum = a + b;
    return sumNum;
}

// 問３
function concatStrings(c, d){
    let conText = c + d;
    return conText;
}

// 問４
function isEven(num){
    let evenCheck;
    if(num%2 == 0){
        evenCheck = true;
    }else{
        evenCheck = false
    }
    return evenCheck;
}

// 問５
function addHtmlText(x, y){
    let addText = document.createElement('p');
    addText.innerHTML = x;
    y.appendChild(addText);
}