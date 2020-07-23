// イベントリスナ（DOM読み込み）
window.addEventListener('load', function() {

    // 変数定義（DOM取得）
    var target = document.querySelector("#profile img");

    // 関数定義
    function hakken () {

        // 配列
        var serif = ["隠しボタンを見つけてくれてありがとう。私の名前は“Atama”です。",
                     "何かご用はありませんか？", 
                     "私を閉じますか？", 
                     "本当に閉じますか？",
                     "もう少しあなたとお話ししたいです。それでも閉じますか？",
                     "……わかりました。ごきげんよう。"];
        var len = serif.length; //（配列数）

        // 制御構造（反復）
        for (var i =0; i < len; i++) {
            window.alert(serif[i]); 
        }
    }

    // イベントリスナ（クリック）
    target.addEventListener("click", hakken, false);
    
});
