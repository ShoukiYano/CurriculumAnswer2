$("#btn-fade").click(function(){
  // 画像のフェードインとフェードアウトを交互に行う
  $(".img-fade").fadeToggle("slow");
});

$("#btn-fade").click(function () {
  // ”フェードアウト”をクリックしたら”フェードイン”を表示
  if ($(this).text() === "フェードアウト") {
    $(this).text("フェードイン");
  } else {
    $(this).text("フェードアウト");
  }
});
