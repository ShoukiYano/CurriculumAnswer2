
//問1 Ajaxを使いボタンを押した際に"sample.txt"からデータを取得しテキストファイルに記載の
//「フロントエンド基礎お疲れ様！！次はフロントエンド模写だね！！引き続き頑張ろう！！」を画面に表示させてください。
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "sample.txt", true); // テキストファイルのURLを指定
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("result").textContent = xhr.responseText;
      }
    };
    xhr.send();
  } 
//問2 Ajaxを使いボタンを押した際に"addAPI.json"からtitleのデータを取得して取得したデータの内容として「Next → フロントエンド模写」と画面に表示してください。
  document.getElementById("loadData").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/addAPI.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("dataContainer").innerHTML = "Next → " + data.title;
        }
    };
    xhr.send();
});  
//問3 Ajaxを使いボタンを押した際に"profile.json"から'name','e-mail'のデータを取得して
//「会社名:Drive Line,メール:DriveLine@gmail.com」と画面に表示してください。
document.getElementById("msgData").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/profile.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("msg").innerHTML = "会社名: " + data.name + "<br>メール: " + data.email;
        }
    };
    xhr.send();
});

//※CORSエラーについて
//CORS、すなわちCross-Origin Resource Sharingは、異なるオリジンの間でのリソース共有を可能にするセキュリティの仕組みです。
//「CORSエラーとは何か」を確認しCORSエラーの回避方法として、VSCodeの拡張機能『live server』を使用しましょう。