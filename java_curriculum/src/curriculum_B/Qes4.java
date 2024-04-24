package curriculum_B;

public class Qes4 {

	public static void main(String[] args) {

		/*
		 * 【概要】見本の通りに出力する処理
		 * 【詳細】for文で計算式を繰り返し、見本のようにコンソールに出力する
		 */

		// for文を作成し、変数を宣言し初期値と条件式を入力
		for (int i = 1; i <= 9; i++) {
			// for文を作成し、変数を宣言し初期値と条件式を入力
			for (int j = 1; j <= 9; j++) {

				if (j <= 8) {
					// jが8以下の場合の処理
					// 0埋めして出力
					System.out.print(String.format("%02d", i) + "*" + String.format("%02d", j) + "="
							+ String.format("%02d", i * j) + "||");
				} else {
					// それ以外場合の処理
					// 0埋めして出力
					System.out.print(String.format("%02d", i) + "*" + String.format("%02d", j) + "="
							+ String.format("%02d", i * j));
				}
			}
			// 改行する
			System.out.println();
		}

	}

}