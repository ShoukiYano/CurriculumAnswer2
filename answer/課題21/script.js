// ナビゲーションリンクのスムーズスクロール機能を実装するjQueryスクリプト
$(document).ready(function(){
    // すべてのリンクにスムーズスクロール機能を追加
    $("a").on('click', function(event) {
        // このリンクのハッシュ値が空でないことを確認し、デフォルトの動作を上書き
        if (this.hash !== "") {
            // リンクのデフォルトのクリック動作をキャンセル
            event.preventDefault();

            // ハッシュ値を変数に保存
            var hash = this.hash;

            // jQueryのanimateメソッドを使ってページ内を滑らかにスクロール
            // オプションの数値(800)は、指定したエリアにスクロールするのに要するミリ秒を指定
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // スクロール完了後にURLにハッシュ値を追加（デフォルトのクリック動作）
                window.location.hash = hash;
            });
        }
    });
});
