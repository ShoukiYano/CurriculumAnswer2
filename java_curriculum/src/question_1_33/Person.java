package question_1_33;

class Person {
	// インスタンスフィールドを定義
	public static int count = 0;
	public String firstName;
	public String lastName;
	public int age;
	public double height, weight;

	// コンストラクタを定義しインスタンスフィールドに値をセット
	Person(String firstName, String lastName, int age, double height, double weight) {
		// カウントする
		Person.count++;
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.height = height;
		this.weight = weight;
	}

	public String fullName() {
		// フルネームを返す
		return this.firstName + this.lastName;
	}

	public void print() {
		// 出力内容
		System.out.println("名前は" + this.fullName() + "です");
		System.out.println("年は" + this.age + "です");
	}

	public double bmi() {
		// BMIを算出して値を返す
		return this.weight / this.height / this.height;
	}

	public static void printCount() {
		// 出力内容
		System.out.println("合計" + Person.count + "人です");
	}
}