package execution;

import process.Theme2_process;

/*

下記がコンソールに出力されるように作成してください

	こんにちは！ここは日本です！
	この寿司はうまい
	寿司は和食です
	今の現在日時は2023/03/09 10:23:39です

【条件】
	・JavaProjectを新規作成し、実行用のpackageと処理用のpackageを作成してください。
	・適切なファイルにフィールドで変数を必要な数作ってください。
	・thisを使って作成してください。
	・日時は今日の日付を取得してください。
	
*/

public class Theme2 {

	public static void main(String[] args) {

		// greeting = こんにちは： food = 寿司： kind = 和食
		String[] check = { "こんにちは", "寿司", "和食" };
		Theme2_process theme = new Theme2_process(check);

		// 定型文の出力
		theme.output();
		
		// 現在日時の出力
		theme.date();

	}
}
