package question_1_33;

class Main {
	public static void main(String[] argos) {
		
		// インスタンス化し引数入力とメソッドの呼び出し
		Person person1 = new Person("鈴木", "太郎", 20, 1.7, 60);
		person1.print();
		Person person2 = new Person("山田", "花子", 22, 1.5, 40);
		person2.print();
		
		// メソッドの呼び出し
		Person.printCount();
	}
}