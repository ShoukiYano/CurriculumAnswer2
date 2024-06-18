// 問題1: 以下の関数helloを完成させて、「Hello, World!」と表示させてください。
function hello() {
    console.log("Hello, World!"); // コンソールに文字列を表示する
}

hello(); // この行を実行すると「Hello, World!」が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題2: 引数nameを受け取り、「Hello, [name]!」と表示する関数helloを作成してください。
function hello1(name) {
    console.log("Hello, " + name + "!"); // 引数で受け取った名前を使って挨拶を表示する
}

hello1("Alice"); // 「Hello, Alice!」が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題3: 2つの数値を引数に取り、その和を戻り値として返す関数addを作成してください。
function add(a, b) {
    return a + b; // 2つの引数の和を返す
}

console.log(add(2, 3)); // 5が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題4: 引数で受け取った数値に10を加えて返す関数addTenを作成してください。
function addTen(number) {
    return number + 10; // 引数に10を加えた値を返す
}

console.log(addTen(5)); // 15が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題5: 2つの数値を引数に取り、その積と商を返す関数calculateを作成してください。
function calculate(a, b) {
    return [a * b, a / b]; // 積と商を配列として返す
}



const results = calculate(10, 2);
console.log("積: " + results[0] + ", 商: " + results[1]); // 「積: 20, 商: 5」が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題6: 引数に数値を受け取り、その数値に5を加えて返す関数addFiveを作成してください。
// 引数が与えられない場合は、0をデフォルトの値として使用します。
function addFive(number = 0) {
    return number + 5; // 引数に5を加えた値を返す
}

console.log(addFive(10)); // 15が表示される
console.log(addFive()); // 5が表示される（デフォルト引数が使われる）

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題7: 関数式を使用して、2つの数値の差を返す関数subtractを作成してください。
const subtract = function(a, b) {
    return a - b; // 2つの引数の差を返す
};

console.log(subtract(10, 3)); // 7が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題8: アロー関数を使用して、2つの数値の平均値を返す関数averageを作成してください。
const average = (a, b) => (a + b) / 2;

console.log(average(10, 20)); // 15が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題9: 引数で受け取った数値までの合計を返す関数sumを作成してください。
function sum(limit) {
    let total = 0;
    for (let i = 1; i <= limit; i++) {
        total += i;
    }
    return total;
}

console.log(sum(5)); // 1+2+3+4+5 = 15が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った数値が偶数か奇数かを判断し、その結果を文字列で返す関数checkEvenを作成してください。
function checkEven(number) {
    if (number % 2 === 0) {
        return '偶数';
    } else {
        return '奇数';
    }
}

console.log(checkEven(4)); // '偶数'が表示される
console.log(checkEven(5)); // '奇数'が表示される
