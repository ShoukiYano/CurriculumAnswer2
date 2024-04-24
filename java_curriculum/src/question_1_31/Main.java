package question_1_31;

class Main {
	public static void main(String[] argos) {

		// インスタンス化し引数入力とメソッドの呼び出し
		Person person1 = new Person("鈴木", "太郎", 20, 1.7, 60);
		person1.print();
		Person person2 = new Person("山田", "花子", 22, 1.5, 40);
		person2.print();

		// メソッドの呼び出し
		Person.printCount();

		// インスタンス化
		Car car = new Car();
		Bicycle bicycle = new Bicycle();

		// ownerの値を設定する
		car.setOwner(person1.fullName());
		bicycle.setOwner(person2.fullName());

		// ownerの値を出力する
		System.out.println(car.getOwner());
		System.out.println(bicycle.getOwner());

		// 乗り物の購入者
		person1.buy(car);
		person2.buy(bicycle);

	}
}