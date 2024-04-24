package question_1_31;

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

	public void buy(Car car) {
		// 値を設定
		car.setOwner(this.fullName());
		// 出力内容
		System.out.println(car.getOwner() + "が購入しました");
	}

	public void buy(Bicycle bicycle) {
		// 値を設定
		bicycle.setOwner(this.fullName());
		// 出力内容
		System.out.println(bicycle.getOwner() + "が購入しました");
	}
}