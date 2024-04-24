package curriculum_New_question;
import java.util.Arrays;
import java.util.Random;

public class Curriculum_New_1_18 {

	// Q1：引数に文字列型と整数型をいれてコンソールに「Hello JavaSE 11」と出力するメソッドを作成してください。
	// メソッドを作成し引数に文字列型変数と整数型変数を入れる
	static void output(String str, int num) {
		// 出力内容を入れる
		System.out.println(str + " " + num);
	}

	// Q2：引数に整数を渡すと渡した値同士を乗算しコンソールに出力するメソッドを作成してください
	// メソッドを作成し引数に文字列型変数を入れる
	static void multiplication(int mulNum1, int mulNum2) {
		// 出力内容を入れる
		System.out.println(mulNum1 * mulNum2);
	}

	// Q3：引数として整数の配列を渡すと、受け取った値を順番にコンソールに出力するメソッドを作成してください
	// メソッドを作成し引数に配列を入れる
	static void array(int[] arr) {
		// 出力内容を入れる
		System.out.println(Arrays.toString(arr));
	}

	// Q4：Q2をオーバーロードして引数を小数2つに変更し、引数同士を和算しコンソールに出力してください。
	// メソッドを作成し引数に小数型変数を入れる
	static void multiplication(double mulDub1, double mulDub2) {
		// 出力内容を入れる
		System.out.println(mulDub1 + mulDub2);
	}

	// Q5：引数に整数を渡すと、1～100までのランダムな数字を引数の回数分格納して
	// 格納した値を順番にコンソールで出力後、格納した値を返すメソッドを作成してください。
	// ※0は出力＆格納しないようにしてください。
	static int[] random(int ranNum) {
		// 変数を宣言し初期化する
		int randomNum = 0;
		// 配列を作成する
		int[] nums = new int[ranNum];

		for (int i = 0; i < ranNum; i++) {
			// ランダムな数字を作成
			Random random = new Random();
			randomNum = random.nextInt(100) + 1;
			// 数字を配列に格納する
			nums[i] = randomNum;
		}
		
		// 出力内容を入れる
		System.out.println(Arrays.toString(nums));
		
		// 格納した値を返す
		return nums;

	}

	// Q6：引数にQ5で作成したメソッドの返り値を受け取り、受け取った配列の要素の平均値をコンソールに出力するメソッドを作成してください。
	// ※小数点以下も表示されるようにしてください。
	static double average(int[] nums) {
		// 変数を宣言し初期化する
		int sum = 0;

		for (int i = 0; i < nums.length; i++) {
			// 配列の合計値を変数に格納
			sum += nums[i];
		}
		// 変数を宣言し平均値を代入
		double average = sum / nums.length;
		// 平均値を出力
		System.out.println(average);
		// 出力した値を返す
		return average;
	}

	// Q7：引数にQ6で作成したメソッドの返り値を受け取り、受け取った値が50以上ならばtrueそれ以外はfalseを返しコンソールに出力してください
	static void judge(double average) {
		// 変数を宣言しtrueを代入
		boolean judge = true;

		if (average >= 50) {
			// 受け取った値が50以上の場合true
			judge = true;
		} else {
			// それ以外の場合false
			judge = false;
		}
		// 出力する
		System.out.println(judge);
	}

	public static void main(String[] args) {
		// 作成したメソッドをここで呼び出してください

		// Q1 メソッドの呼び出し
		output("Hello JavaSE", 11);

		// Q2 メソッドの呼び出し
		multiplication(3, 5);

		// Q3 配列へ要素を格納
		int[] arr = { 1, 2, 3, 4, 5 };
		// メソッドの呼び出し
		array(arr);

		// Q4 メソッドの呼び出し
		multiplication(2.5, 4.2);

		// Q5 メソッドを呼び出して変数に代入
		int[] random = random(5);

		// Q6 メソッドを呼び出して変数に代入
		double average = average(random);

		// Q7 メソッドの呼び出し
		judge(average);
	}

}
