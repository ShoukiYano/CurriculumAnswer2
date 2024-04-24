package main_question_1_25;

import java.util.Scanner;

import sub_question_1_25.Status;

/*

名前を入力したら下記がコンソールに出力されるように作ってください
	条件：数値は毎回変わるように作ってください
	 	 サブクラスを使用してください
		 スーパークラスを使用してください
		 getterとsetterを使用してください
		 packageを2つ作ってメインと処理を分けてください
		 命名する場合は規則にのっとってください
		 コンストラクタを使用してください

	こんにちは 「 名前 」 さん
	ステータス
	HP：849
	MP：862
	攻撃力：375
	素早さ：937
	防御力：24

	さあ冒険に出かけよう！

*/

public class Main {

	public static void main(String[] args) {

		// Scannerインスタンス作成
		Scanner scanner = new Scanner(System.in);
		String name = scanner.nextLine();
		// 実行後に閉じる
		scanner.close();

		// サブクラスの呼び出し
		Status status = new Status();
		
		// 名前を格納
		status.setName(name);

		// 名前を出力
		System.out.println("こんにちは 「" + status.getName() + "」さん");

		// displayメソッドの呼び出し
		status.display();

		// メッセージ出力
		System.out.println("\nさあ冒険に出かけよう！");
	}

}
