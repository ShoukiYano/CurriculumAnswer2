package curriculum_B;

import java.util.Random;
import java.util.Scanner;

public class Qes6 {

	public static void main(String[] args) {

		/*
		 * 【概要】入力した商品の残り台数が出力される処理
		 * 【詳細】拡張for文で入力回数の縛りをなくし、Switch文と条件演算子で条件を付けて出力する
		 */

		// Scannerクラスのインスタンスを作成
		// 引数で標準入力System.inを指定する
		Scanner scanner = new Scanner(System.in);
		// 配列を作成し、中身を"、"区切りで格納する
		String[] products = scanner.next().split("、");
		// 実行後に閉じる
		scanner.close();

		for (String product : products) {
			//変数を作成し配列の要素を格納

			// 残り台数を表す乱数を生成
			Random random = new Random();
			// 乱数を変数に格納
			int stock = random.nextInt(11) + 0;

			switch (product) {

			// "パソコン"の場合
			case "パソコン":
				// パソコンの残り台数を出力
				System.out.println(product + "の残り台数は" + stock + "台です");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			// "冷蔵庫"の場合
			case "冷蔵庫":
				// 冷蔵庫の残り台数を出力
				System.out.println(product + "の残り台数は" + stock + "台です");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			// "扇風機"の場合
			case "扇風機":
				// 扇風機の残り台数を出力
				System.out.println(product + "の残り台数は" + stock + "台です");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			// "洗濯機"の場合
			case "洗濯機":
				// 洗濯機の残り台数を出力
				System.out.println(product + "の残り台数は" + stock + "台です");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			// "加湿器"の場合
			case "加湿器":
				// 加湿器の残り台数を出力
				System.out.println(product + "の残り台数は" + stock + "台です");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			// "テレビ"、"ディスプレイ"の場合
			case "テレビ":
			case "ディスプレイ":
				// "テレビ"の場合 テレビの残り台数を出力
				// "ディスプレイ"の場合 ディスプレイの残り台数を出力
				System.out.println(
						product == "テレビ" ? product + "の残り台数は" + stock + "台です"
								: product + "の残り台数は" + (11 - stock) + "台です");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			// それ以外の場合
			default:
				//「○○は指定の商品ではありません」と出力
				System.out.println("『" + product + "』" + "は指定の商品ではありません");
				// 改行する
				System.out.println();
				// 処理を抜ける
				break;

			}
		}
	}
}
