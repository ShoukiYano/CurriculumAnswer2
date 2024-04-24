package curriculum_B;

import java.util.Random;
import java.util.Scanner;

public class Qes1_3 {

	public static void main(String[] args) {

		/* 
		 * 1,2,3
		 * 【概要】ログイン時の入力チェックシステムを作成する処理
		 * 【詳細】コンソールにユーザー名を入力し条件を指定して出力する
		 * 正常にユーザー名を登録した場合にじゃんけんを実行する
		 */

		// Scannerクラスのインスタンスを作成
		// 引数で標準入力System.inを指定する
		Scanner scanner = new Scanner(System.in);
		// 変数を宣言し行を返す
		String name = scanner.nextLine();

		if (name.isEmpty() || name.length() <= 0) {
			// ユーザー名の文字数が0文字以下もしくはnull場合の出力
			System.out.println("名前を入力してください");
			// 処理を終了させる
			System.exit(0);

		} else if (!name.matches("^[A-Za-z0-9]+$")) {
			// ユーザー名が半角英数字以外の場合の出力
			System.out.println("半角英数字のみで名前を入力してください");
			// 処理を終了させる
			System.exit(0);

		} else if (name.length() > 10) {
			// ユーザー名の文字数が10文字を超えた場合の出力
			System.out.println("名前を10文字以内にしてください");
			// 処理を終了させる
			System.exit(0);

		} else {

			// それ以外の場合(正常な値の場合)の出力
			System.out.println("ユーザー名「" + name + "」を登録しました");
		}

		// じゃんけんの回数を格納する変数を作成し初期値0を代入
		int jankenNum = 0;

		// 変数を宣言し行を返す
		int hand = scanner.nextInt();

		// 勝敗の変数を作成
		boolean game = true;

		// whileで1回ごとに出力する処理
		while (game) {

			// 手の乱数を生成
			Random random = new Random();
			// 手の乱数を変数に格納
			int pc = random.nextInt(3) + 0;

			// じゃんけんの手の配列を作成
			String[] janken = { "グー", "チョキ", "パー" };

			// じゃんけんの回数をカウントする
			jankenNum++;

			// 自分の手を出力
			System.out.println(name + "の手は" + janken[hand]);
			// 相手の手を出力
			System.out.println("相手の手は" + janken[pc]);
			// 改行する
			System.out.println();

			if (hand == pc) {
				// あいこの場合は出力
				System.out.println("DRAW あいこ もう一回しましょう！");
				// 改行する
				System.out.println();

			} else if (hand == 1 && pc == 0) {

				// グーに負けた場合は出力			
				System.out.println("俺の勝ち！\r\n負けは次につながるチャンスです！\r\nネバーギブアップ！");
				// 改行する
				System.out.println();
			} else if (hand == 2 && pc == 1) {

				// チョキに負けた場合は出力
				System.out.println("俺の勝ち！\r\nたかがじゃんけん、そう思ってないですか？\r\nそれやったら次も、俺が勝ちますよ");
				// 改行する
				System.out.println();

			} else if (hand == 0 && pc == 2) {

				// パーに負けた場合は出力
				System.out.println("俺の勝ち！\r\nなんで負けたか、明日まで考えといてください。\r\nそしたら何かが見えてくるはずです");
				// 改行する
				System.out.println();

			} else {

				// それ以外(勝った場合)の場合は出力
				System.out.println("やるやん。\r\n次は俺にリベンジさせて");
				// 改行する
				System.out.println();
				// 勝つまでにかかった回数
				System.out.println("勝つまでにかかった合計回数は" + jankenNum + "回です");
				// 勝敗の変数にfalseを代入する
				game = false;
			}
		}
		// 実行後に閉じる
		scanner.close();
	}
}
