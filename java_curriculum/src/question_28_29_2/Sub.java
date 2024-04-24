package question_28_29_2;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class Sub {

	public Sub(String nums, String order) {

		// nullチェック
		if (nums.isEmpty() || order.isEmpty()) {

			// 処理を終了する
			System.exit(0);
		}
	}

	public void output(String nums, String order) {
		// 入力値を配列にする
		String[] numbers = nums.split(",");

		// Integer型配列を作成する
		Integer[] num = new Integer[numbers.length];

		for (int i = 0; i < numbers.length; i++) {
			// 配列型を変換する
			num[i] = Integer.parseInt(numbers[i]);
		}

		if (order.equals("昇順")) {
			// 昇順に並び替え
			Arrays.sort(num);

		} else if (order.equals("降順")) {
			// 降順に並び替え
			Arrays.sort(num, Collections.reverseOrder());
		}

		// データの格納
		String[] data = { "北海道:札幌市:83424", "青森県:青森市:9646", "岩手県:盛岡市:15275", "宮城県:仙台市:7282", "秋田県:秋田市:11638",
				"山形県:山形市:9323", "福島県:福島市:13784", "茨城県:水戸市:6097", "栃木県:宇都宮市:6408", "群馬県:前橋市:6362", "埼玉県:さいたま市:3798" };

		// Mapの作成
		Map<Integer, String> map = new HashMap<>();

		for (int i = 0; i < num.length; i++) {
			// キーと値の紐づけ
			map.put(num[i], data[num[i]]);
			
			// 値を格納した配列を作成する 
			String[] content = map.get(num[i]).split(":");

			// 出力内容
			System.out.println(
					"都道府県名：" + content[0] + "\n"
				  + "県庁所在地：" + content[1] + "\n"
				  + "面積：" + Double.parseDouble(content[2]) + "km2\n"
			);

		}
	}
}
