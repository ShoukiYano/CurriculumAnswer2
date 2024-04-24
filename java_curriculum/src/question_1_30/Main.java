package question_1_30;

public class Main {

	public static void main(String[] args) {
		
		// インスタンス化し引数を入力
		Person person1 = new Person("鈴木太郎", 20, 1.7, 60);
		
		// 出力内容   
	    System.out.println(person1.name);
	    System.out.println(person1.age);
	    System.out.println(person1.height);
	    
	    // メソッドの呼び出し
		person1.print();
	    
	    Person.personCount();
	    
	   
	}

}
