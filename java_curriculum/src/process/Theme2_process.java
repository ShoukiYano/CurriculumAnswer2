package process;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Theme2_process {

	// 挨拶の言葉
	private String greeting;
	// 食べ物の名前
	private String food;
	// 食べ物の種類
	private String kind;

	
	public Theme2_process(String[] check) {

		// nullチェック
		for (int i = 0; i < check.length; i++) {

			if (check[i] == null) {

				// 処理を終了する
				System.exit(0);
			}
		}

		// フィールド変数に代入
		this.greeting = check[0];
		this.food = check[1];
		this.kind = check[2];
	}

	public void output() {

		// greeting = こんにちは： food = 寿司： kind = 和食
		System.out.println(
			  greeting + "！ここは日本です！\n"
			+ "この" + food + "はうまい\n"
			+ food + "は" + kind + "です"
		);
	}

	public void date() {

		// 現在日時を取得
		LocalDateTime importDate = LocalDateTime.now();
		// 表示形式を指定
		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		// 表示形式を変換
		String date = dateFormat.format(importDate);
		// 出力する
		System.out.println("今の現在日時は" + date + "です");
	}

}
