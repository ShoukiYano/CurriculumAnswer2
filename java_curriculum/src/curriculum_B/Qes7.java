package curriculum_B;

import java.util.Scanner;

public class Qes7 {

	public static void main(String[] args) {

		/*
		 * 【概要】N人の生徒の成績を入力し管理する処理
		 * 【詳細】N人の生徒の成績を入力し、各生徒の科目平均点、全体の科目平均点、各教科の平均点を出力する
		 */

		// Scannerクラスのインスタンスを作成
		// 引数で標準入力System.inを指定する
		Scanner scanner = new Scanner(System.in);

		// 「生徒の人数を入力してください(2以上):」と出力する
		System.out.print("生徒の人数を入力してください(2以上):");
		// 変数を宣言し数値を返す
		int students = scanner.nextInt();

		// 科目を格納する配列を作成
		String[] subjects = { "英語", "数学", "理科", "社会" };

		// 多次元配列を作成
		int[][] scores;
		scores = new int[students][subjects.length];

		for (int i = 0; i < students; i++) {

			for (int j = 0; j < subjects.length; j++) {

				// 点数の入力欄を出力する
				System.out.print((i + 1) + "人目の" + subjects[j] + "の点数を入力してください:");
				// 変数を宣言し数値を返す
				int score = scanner.nextInt();
				// 配列に変数の数値を格納
				scores[i][j] = score;
			}
			// 改行する
			System.out.println();
		}

		// 実行後に閉じる
		scanner.close();

		for (int i = 0; i < students; i++) {
			// 生徒の合計点を表す変数を作成
			double stuSum = 0d;
			// 生徒の平均点を表す変数を作成
			double stuAv = 0d;

			for (int j = 0; j < subjects.length; j++) {

				// 生徒ごとの合計点を算出する計算式を作成
				stuSum += scores[i][j];

			}
			// 生徒ごとの平均点を算出する計算式を作成
			stuAv = stuSum / subjects.length;
			// 変数を宣言し平均点を小数第2位までの表示にして格納
			String studentAv = String.format("%.2f", stuAv);
			// 生徒ごとの平均点を出力する
			System.out.println((i + 1) + "人目の平均点は" + studentAv + "点です。");
		}

		// 改行する
		System.out.println();

		// 配列を作成
		double[] allAv;
		allAv = new double[subjects.length];

		for (int i = 0; i < subjects.length; i++) {
			// 科目の合計点を表す変数を作成
			double subSum = 0d;
			// 科目の平均点を表す変数を作成
			double subAv = 0d;

			for (int j = 0; j < students; j++) {

				// 科目ごとの合計点を算出する計算式を作成
				subSum += scores[j][i];

			}
			// 科目ごとの平均点を算出する計算式を作成
			subAv = subSum / students;
			// 変数を宣言し平均点を小数第2位までの表示にして格納
			String subjectAv = String.format("%.2f", subAv);
			// 科目ごとの平均点を出力する
			System.out.println(subjects[i] + "の平均点は" + subjectAv + "点です。");

			// 配列に変数の数値を格納
			allAv[i] = subAv;
		}

		// 変数を宣言し初期化する
		double total = 0;

		for (int i = 0; i < allAv.length; i++) {

			// 科目ごとの平均点を格納した配列の要素を合計する
			total += allAv[i];

		}

		// 全体の平均を求める式を作成
		double all = total / allAv.length;
		// 変数を宣言し平均点を小数第2位までの表示にして格納
		String avarage = String.format("%.2f", all);
		// 全体の平均点を出力する
		System.out.println("全体の平均点は" + avarage + "点です。");

	}

}
