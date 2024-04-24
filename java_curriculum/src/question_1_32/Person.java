package question_1_32;

class Person {
	// インスタンスフィールドを定義
	public String name;
	public int age;
	public double height;
	public double weight;
	
	// static変数を定義
	static int count = 0;

	// コンストラクタを定義しインスタンスフィールドに値をセット
	Person(String name, int age, double height, double weight) {
		
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
		// カウントする
		count++;
	}

	public double bmi() {
		// BMIを算出して値を返す
		return this.weight / this.height / this.height;
	}

	public void print() {
		// 出力内容
		System.out.println("名前は" + this.name + "です");
		System.out.println("年は" + this.age + "です");
	}
	
	// クラスメソッドを定義
	static void printCount() {
		
		// 出力内容
		System.out.println("合計" + count + "人です");
	}

}