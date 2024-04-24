package question_1_30;

public class Person {
	
	// インスタンスフィールドを定義
	String name;
	int age;
	double height;
	double weight;
	
	// static変数を定義
	static int count;

	// コンストラクタを定義しインスタンスフィールドに値をセット
	Person(String name, int age, double height, double weight){
		
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
		
		// カウントする
		count++;
	}

	public double bmi(){
		
		// BMIを算出して値を返す
		return this.weight / this.height / this.height;
		
	}
	
	 void print(){
		
		// 出力内容
		System.out.println("名前は" + this.name + "です");
	    System.out.println("年は" + this.age + "です");
	    System.out.println("BMIは" + String.format("%.2f",this.bmi()) + "です");
	}
	
	public static void personCount() {
		
		// 出力内容
		System.out.println("合計" + count + "人です");

	}
	
	
}

