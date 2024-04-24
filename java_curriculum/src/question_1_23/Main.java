package question_1_23;

public class Main {

	
	/*
 	
 	下記がコンソールに出力されるように作成してください
 	※thisとsetterとgetterとフィールドを使ってください
 	
  	動物名：ライオン
	体長：2.1m
	速度：80km/h
 	
	 */
	
	public static void main(String[] args) {
		
		// インスタンス化
		Animal animal = new Animal();
		
		// 動物名を格納
		animal.setName("ライオン");
		// 体長名を格納
		animal.setLength(2.1);
		// 速度名を格納
		animal.setSpeed(80);
		
		// 出力内容 動物名：ライオン 体長：2.1m 速度：80km/h
		System.out.println(
				"動物名：" + animal.getName() + "\n"
			  + "体長：" + animal.getLength() + "m" + "\n"
			  + "速度：" + animal.getSpeed() + "km/h"
				);

	}

}
