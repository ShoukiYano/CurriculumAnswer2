$(function () {
    //変数「today」を宣言する
    //変数「week」を宣言する
    //変数「weekNum」を宣言する
    //変数「year」を宣言する
    //変数「month」を宣言する
    //変数「day」を宣言する
    //変数「weekDays」を宣言する

    /*-- -- -- -- -- -- --ここに[変数宣言] 記載-- -- -- -- -- -- --*/

    // 変数「today」を宣言する
    let today;

    // 変数「week」を宣言する
    let week;

    // 変数「weekNum」を宣言する
    let weekNum;

    // 変数「year」を宣言する
    let year;

    // 変数「month」を宣言する
    let month;

    // 変数「day」を宣言する
    let day;

    // 変数「weekDays」を宣言する
    let weekDays;


    /*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

    //日付情報を取得し、変数「today」に代入する
    //「["日","月","火","水","木","金","土"]」を「week」に代入する
    //「today」から「年」情報を取得し「year」に代入する
    //「today」から「月」情報を取得し「month」に代入する
    //「today」から「日」情報を取得し「day」に代入する
    //「today」から「曜日番号」情報を取得し「weekNum」に代入する
    //「weekDays」に「week[weekNum]」を代入する

    /*-- -- -- -- -- -- --ここに[日付情報の変数への代入処理] 記載-- -- -- -- -- -- --*/

    // 日付情報を取得し、変数「today」に代入する
    today = new Date();

    // 「["日","月","火","水","木","金","土"]」を「week」に代入する
    week = ["日", "月", "火", "水", "木", "金", "土"];

    // 「today」から「年」情報を取得し「year」に代入する
    year = today.getFullYear();

    // 「today」から「月」情報を取得し「month」に代入する
    month = today.getMonth() + 1; // 月は0から始まるため、1を足して正しい月を取得する

    // 「today」から「日」情報を取得し「day」に代入する
    day = today.getDate();

    // 「today」から「曜日番号」情報を取得し「weekNum」に代入する
    weekNum = today.getDay();

    // 「weekDays」に「week[weekNum]」を代入する
    weekDays = week[weekNum];

    /*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

    //dateTimeクラスのテキストを「2023年1月1日(曜日)」の形式でリアルタイムの日付に変更する

    /*-- -- -- -- -- -- --ここに[リアルタイムの日付の表示処理] 記載-- -- -- -- -- -- --*/

    // 日付
    today = new Date();

    // 曜日配列
    week = ["日", "月", "火", "水", "木", "金", "土"];

    // 年、月、日、曜日
    year = today.getFullYear();
    month = today.getMonth() + 1;
    day = today.getDate();
    let dayOfWeek = week[today.getDay()];

    // 日付をテキストにする
    let formattedDate = year + "年" + month + "月" + day + "日(" + dayOfWeek + ")";

    // テキストの更新
    let dateTimeElements = document.getElementsByClassName("dateTime");
    for (let i = 0; i < dateTimeElements.length; i++) {
        dateTimeElements[i].textContent = formattedDate;
    }

    /*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

});