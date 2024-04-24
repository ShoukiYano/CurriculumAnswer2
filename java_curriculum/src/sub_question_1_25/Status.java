package sub_question_1_25;

import java.util.Random;

public class Status extends Sub {
	
	public Status(){
		// スーパークラスの呼び出し
		super();
	}

	// ステータスを表示するメソッド
	public void display() {

		// 出力内容
		System.out.println("ステータス");

		// ステータス名の配列
		String[] statusName = { "HP", "MP", "攻撃力", "素早さ", "防御力" };

		for (int i = 0; i < statusName.length; i++) {

			// ランダムでステータス生成
			Random random = new Random();
			int status = random.nextInt(1000);

			// ステータスを格納
			setStatus(status);

			// ステータス名:ステータスを表示
			System.out.println(statusName[i] + ":" + getStatus());

		}

	}
}
