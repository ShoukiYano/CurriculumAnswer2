// この関数は提供されたデータでテーブルに行を追加します
function addRowToTable(data) {
    // id 'dataTable'のテーブルからtbody要素を取得します
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    // 新しい行（tr要素）を作成します
    const newRow = document.createElement('tr');

    // 行にデータと削除ボタンを挿入します
    newRow.innerHTML = `
        <td>${data.input1}</td>
        <td>${data.input2}</td>
        <td>${data.input3}</td>
        <td><button class="delete-btn">削除</button></td>
    `;

    // 新しく作成した行をテーブルのtbodyに追加します
    tableBody.appendChild(newRow);

    // 削除ボタンにイベントリスナーを設定し、クリック時に行を削除します
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        this.closest('tr').remove();
    });
}

// フォームの送信イベントを監視します
document.getElementById('inputForm').addEventListener('submit', function(event) {
    // デフォルトのフォーム送信を防止します
    event.preventDefault();

    // フォームからデータを取得します
    const formData = {
        input1: document.getElementById('input1').value,
        input2: document.getElementById('input2').value,
        input3: document.getElementById('input3').value
    };

    // 取得したデータを使ってテーブルに行を追加します
    addRowToTable(formData);
    // フォームの入力フィールドをリセットします
    document.getElementById('inputForm').reset();
});
