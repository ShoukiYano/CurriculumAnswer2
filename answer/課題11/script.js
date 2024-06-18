// 問題: 引数で受け取った配列の要素をすべて合計し、その結果を返す関数sumArrayを作成してください。whileループを使用してください。
function sumArray1(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
}

console.log(sumArray1([1, 2, 3])); // 6が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った文字列を反転して返す関数reverseStringを作成してください。do-whileループを使用してください。
function reverseString(str) {
    let reversed = '';
    let i = str.length - 1;
    do {
        reversed += str[i];
        i--;
    } while (i >= 0);
    return reversed;
}

console.log(reverseString("hello")); // "olleh"が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った文字列の配列を一つの文字列に結合して返す関数concatStringsを作成してください。forループを使用してください。
function concatStrings(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

console.log(concatStrings(['Hello', ' ', 'World', '!'])); // 'Hello World!'が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列の各要素をコンソールに出力する関数printArrayを作成してください。forEachを使用してください。
function printArray(array) {
    array.forEach(function(element) {
        console.log(element);
    });
}

printArray([1, 2, 3]); // 1, 2, 3が順に表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列の要素をすべて合計し、その結果を返す関数sumArrayを作成してください。for...ofループを使用してください。
function sumArray2(array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}

console.log(sumArray2([1, 2, 3])); // 6が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列の各要素を2倍にして新しい配列を返す関数doubleArrayを作成してください。mapを使用してください。
function doubleArray(array) {
    return array.map(function(element) {
        return element * 2;
    });
}

console.log(doubleArray([1, 2, 3])); // [2, 4, 6]が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列から偶数のみを含む新しい配列を返す関数filterEvenNumbersを作成してください。filterを使用してください。
function filterEvenNumbers(array) {
    return array.filter(function(element) {
        return element % 2 === 0;
    });
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列の要素をすべて合計し、その結果を返す関数sumArrayを作成してください。reduceを使用してください。
function sumArray3(array) {
    return array.reduce((sum, element) => sum + element, 0);
}

console.log(sumArray3([1, 2, 3])); // 6が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列から特定の条件を満たす最初の要素を返す関数findFirstを作成してください。findを使用してください。
function findFirst(array, test) {
    return array.find(test);
}

console.log(findFirst([1, 2, 3, 4, 5], element => element > 3)); // 4が表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 問題: 引数で受け取った配列の全ての要素が特定の条件を満たしているかどうかを確認する関数areAllValidを作成してください。everyを使用してください。
function areAllValid(array, test) {
    return array.every(test);
}

console.log(areAllValid([1, 2, 3, 4, 5], element => element < 6)); // trueが表示される
console.log(areAllValid([1, 2, 3, 4, 5], element => element > 3)); // falseが表示される

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿