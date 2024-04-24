package curriculum_B;

public class Qes5 {

	public static void main(String[] args) {

		/*
		 * 【概要】見本の通りに出力する処理
		 * 【詳細】for文で計算式を繰り返し、見本のようにコンソールに出力する
		 */

		// for文を作成し、変数を宣言し初期値と条件式を入力
		for (int i = 1; i <= 9; i++) {
			// for文を作成し、変数を宣言し初期値と条件式を入力
			for (int j = 1; j <= 20; j++) {

				if (j <= 19) {
					// jが19以下の場合の処理
					// 0埋めして出力
					System.out.print(String.format("%03d", j) + "*" + String.format("%03d", i) + "="
							+ String.format("%03d", j * i) + "||");
				} else {
					// それ以外場合の処理
					// 0埋めして出力
					System.out.print(String.format("%03d", j) + "*" + String.format("%03d", i) + "="
							+ String.format("%03d", j * i));
				}
			}
			// 改行する
			System.out.println();
		}

	}

}
