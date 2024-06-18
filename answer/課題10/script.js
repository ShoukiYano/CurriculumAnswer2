document.getElementById('task1').addEventListener('click', () => {
    const array = [1, 2, 3, 4, 5];
    document.getElementById('result1').textContent = `合計: ${executeTask1(array)}`;
});

document.getElementById('task2').addEventListener('click', () => {
    const str = "JavaScript";
    document.getElementById('result2').textContent = `逆順: ${executeTask2(str)}`;
});

document.getElementById('task3').addEventListener('click', () => {
    const str = "Hello World";
    document.getElementById('result3').textContent = `文字列の長さ: ${executeTask3(str)}`;
});

document.getElementById('task4').addEventListener('click', () => {
    const text = "hello world";
    document.getElementById('result4').textContent = `大文字: ${executeTask4(text)}`;
});

document.getElementById('task5').addEventListener('click', () => {
    const numbers = [1, 2, 3, 4, 5];
    document.getElementById('result5').textContent = executeTask5(numbers).join(', ');
});

// 問題1: 数字の配列の合計を計算する
function executeTask1(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// 問題2: 文字列を逆順に表示する
function executeTask2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 問題3: 文字列の長さを表示する
function executeTask3(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        length++;
    }
    return length;
}

// 問題4: テキストを大文字に変換する
function executeTask4(text) {
    let upperText = '';
    for (let i = 0; i < text.length; i++) {
        upperText += text[i].toUpperCase();
    }
    return upperText;
}

// 問題5: 数字が偶数か奇数かを判定する
function executeTask5(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            results.push(`${numbers[i]}は偶数です`);
        } else {
            results.push(`${numbers[i]}は奇数です`);
        }
    }
    return results;
}
