// 検索ボタン開閉---------------------------------------------------
let searchToggle = document.querySelector("#search_toggle");

// #search_toggle をクリックした時に、検索ボックスを表示/非表示する処理を追加。
searchToggle.addEventListener("click", () => {
  let searchBox = document.querySelector("#search_box");
  let searchContents = document.querySelector("#search_contents");

  // #search_box要素が持つ active クラスをトグルすることで、表示/非表示を切り替え。
  searchBox.classList.toggle("active");

  if (searchBox.classList.contains("active")) {
    // #search_box要素が active クラスを持っている場合の処理。
    searchBox.style.display = "block";
    searchToggle.textContent = "ー 検索";
    searchBox.style.height = searchContents.scrollHeight + "px";
    setTimeout(() => {
      searchBox.style.height = "auto";
    }, 500);
  } else {
    // #search_box要素が active クラスを持っていない場合の処理。
    searchToggle.textContent = "＋ 検索";
    searchBox.style.height = searchBox.offsetHeight + "px";

    setTimeout(() => {
      searchBox.style.height = "0";
      searchBox.style.display = "none";
    }, 500);
  }
});

// 検索機能--------------------------------------------------------
// 検索ボタンをクリックしたときの処理。
document.getElementById("search_button").addEventListener("click", () => {
  let customerName = document.getElementById("search_customer_name").value.trim();
  let freeWord = document.getElementById("free_word").value.trim().toLowerCase();
  let rows = document.getElementsByTagName("tr");

  // thタグと追加項目の2行を表示するため i = 2
  for (let i = 2; i < rows.length; i++) {
    if (i === 0) { // thタグは表示する
      rows[i].style.display = "";
      continue;
    }
    let customerNameCell = rows[i].getElementsByTagName("td")[1];
    let freeWordCells = rows[i].getElementsByTagName("td");

    // 顧客名に当てはまらない場合は非表示。
    if (customerName && !customerNameCell.textContent.includes(customerName)) {
      rows[i].style.display = "none";
      continue;
    }

    // フリーワードに当てはまらない場合は非表示。
    let matched = false;
    for (let j = 0; j < freeWordCells.length; j++) {
      if (freeWordCells[j].textContent.toLowerCase().indexOf(freeWord) !== -1) {
        matched = true;
        break;
      }
    }
    if (!matched && freeWord) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
    }
  }
});

// 顧客テーブルの追加削除ボタン、エラーチェック--------------------------
// 顧客情報を追加する処理
function customerTableAdd() {
  // フォームの値を配列に取得
  let values = ['customer_id', 'customer_name', 'customer_person', 'address', 'tel', 'fax', 'note'];
  let mapValues = values.map(id => document.getElementById(id).value);

  // エラーメッセージ表示用の要素とエラー数を初期化
  let errMsg = document.querySelector(".err-msg");
  let errCount = 0;

  // フォームに値が入力されているかチェック
  if (mapValues.every(v => !v)) {
    errMsg.innerHTML = "・値を入力してください。";
    errCount++;
  } else {
    errMsg.innerHTML = "";
    // 顧客ID、顧客名、担当者名、電話番号が必須項目であるかチェック
    if (!mapValues[0]) {
      errMsg.innerHTML += "・顧客IDは必須項目です。<br>";
      errCount++;
    }
    if (!mapValues[1]) {
      errMsg.innerHTML += "・顧客名は必須項目です。<br>";
      errCount++;
    }
    if (!mapValues[2]) {
      errMsg.innerHTML += "・担当者名は必須項目です。<br>";
      errCount++;
    }
    if (!mapValues[4]) {
      errMsg.innerHTML += "・電話番号は必須項目です。";
      errCount++;
    }
  }

  // エラーがある場合は処理を終了
  if (errCount > 0) {
    return;
  } else {
    valueClear(); // フォームの値をクリア
  }

  // テーブルに新規行を追加し、値をセット
  let table = document.getElementById('main_table');
  let row = table.insertRow(3);
  mapValues.forEach((value, index) => {
    let cell = row.insertCell(index);
    cell.innerHTML = value.replace(/\n/g, "<br>"); // /g フラグを追加してすべての改行を置換
    cell.style.borderBottom = 'dotted 2px black';
    cell.classList.add('word-wrap-break-word');
  });

  // 削除ボタンを作成し、行に追加
  let delButton = document.createElement('div');
  delButton.className = 'del-button';
  delButton.textContent = '削除';
  delButton.onclick = () => customerTableDel(row);
  let cell = row.insertCell(mapValues.length);
  cell.appendChild(delButton);
}

// テーブルから行を削除する処理
function customerTableDel(row) {
  row.parentNode.removeChild(row);
}

// フォームの値をクリアする処理
function valueClear() {
  document.querySelectorAll('input[type="text"], textarea').forEach(input => input.value = '');
}
