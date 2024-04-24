package question_1_32;

class Main {
	public static void main(String[] argos) {
		
		// インスタンス化し引数入力とメソッドの呼び出し
		Person person1 = new Person("鈴木太郎", 20, 1.7, 60);
		person1.print();
		Person person2 = new Person("山田花子", 22, 1.5, 40);
		person2.print();
		
		// 出力内容
		System.out.println("合計" + Person.count + "人です");
		
		// メソッドの呼び出し
		Person.printCount();
	}
}