$(function(){
  // クリックイベントを指定
  $('#btn').on("click",function(){
  // テキストボックスの値を取得
  let v = $('#text').val();
  // 値が”赤”ならカラーは赤
  if(v == "赤") {
    $('#box').css('background-color','red');
  } 
  // 値が”青”ならカラーは青
    else if(v == "青") {
    $('#box').css('background-color','blue');
  }
  // 値がそれ以外ならカラーは緑
   else {
    $('#box').css('background-color','green');
  }
  });
});