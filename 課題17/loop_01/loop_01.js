
// 問１
// 1~10 までの整数をfor文を使用して画面に表示させてください。

const textBox = document.getElementById('textBox');
let addText;

for(i = 1; i <= 10; i++){
    addTextFunc(i);
}


// 問２
// 21~30 までの整数をwhile文を使用して画面に表示させてください。

let j = 21;

while(j <= 30){
    addTextFunc(j);
    j ++;
}



// 問３
// 1以上の任意の整数が7で割り切れる数字になるまで "画面に表示" と "1加算" を、do~while文を使用して繰り返してください。

let k = 100;
let num = 0;

do{
    addTextFunc(k);
    num = k;
    k ++;
}while(num % 7);



// ---------------------------------------

// HTML要素生成関数
function addTextFunc(x){
    addText = document.createElement('p');
    addText.innerHTML = x;
    textBox.appendChild(addText);
}