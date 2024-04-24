package question_1_26_28;

public class Sub {

	public Sub(String element) {

		// nullチェック
		if (element.isEmpty() || element == null) {

			// 処理を終了する
			System.exit(0);
		}
	}

	// メソッド作成
	public void input(String element) {

		// 入力値を配列にする
		String[] input = element.split(",");
		
		// ラベルの配列
		String[] label = { "動物名", "体長", "速度", "学名" };

		for (int i = 0; i < input.length; i++) {

			// input配列の要素から配列作成
			String[] inputArray = input[i].split(":");

			//出力内容
			System.out.println(
					label[0] + "：" + inputArray[0] + "\n"
				  + label[1] + "：" + inputArray[1] + "m\n"
				  + label[2] + "：" + inputArray[2] + "km/h\n"
				  + label[3] + "：" + this.getScholar(inputArray[0]) + "\n"
			);
		}
	}

	private String getScholar(String name) {

		// 学名
		String scholar = null;

		// 動物名と学名を一致させる処理
		switch (name) {

		case "ライオン":
			scholar = "パンテラ レオ";

			break;

		case "ゾウ":
			scholar = "ロキソドンタ・サイクロティス";

			break;

		case "パンダ":
			scholar = "アイルロポダ・メラノレウカ";

			break;

		case "チンパンジー":
			scholar = "パン・トゥログロディテス";

			break;

		case "シマウマ":
			scholar = "チャップマンシマウマ";

			break;

		case "インコ":
			scholar = "不明";

			break;

		default:
			break;
		}

		// 値を返す
		return scholar;
	}
}
