$('.button').on('click',function(){
  // クリックした要素にactiveクラスを付与
  $('.button').removeClass('active');
  // 要素からactiveクラスを消去
  $(this).addClass('active');
});