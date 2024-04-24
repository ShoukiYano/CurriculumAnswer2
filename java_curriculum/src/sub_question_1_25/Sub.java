package sub_question_1_25;

public class Sub {

	// 名前
	private String name;

	// ステータス
	private int status;

	public Sub(String name) {
		// nullチェック
		if (name.isEmpty()) {

			// 処理を終了する
			System.exit(0);
		}

	}

	public Sub() {

	}

	// 名前を取得
	public String getName() {

		// 戻り値
		return this.name;

	}

	// 名前を格納
	public void setName(String name) {

		// フィールド変数に代入
		this.name = name;
	}

	// ステータスを格納
	public int getStatus() {

		// 戻り値
		return status;
	}

	// ステータスを取得
	public void setStatus(int status) {

		// フィールド変数に代入
		this.status = status;
	}

}
