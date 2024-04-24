package basicClass;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Animal {
		
		public static void main(String[] args) {
			// Q1：Dogクラスを呼び出して変数に代入し、動物の名前をコンソールに出力してください。
			
			// インスタンスを作成
			Dog ani = new Dog();
			// 変数宣言し値を代入
			String name = ani.animalName;
			// 出力する
			System.out.println(name);
			
			// Q2：Dogクラスを呼び出して変数に代入し、動物の数をコンソールに出力してください。
			
			// インスタンスを作成
			Dog aniNum = new Dog(3);
			// 変数宣言し値を代入
			int nums = aniNum.animalNum;
			// 出力する
			System.out.println(nums);
	
			
			// 現在の日時を「yyyy-MM-dd H:m:s」形式で変数に代入して、コンソールに出力してください
			
			// 現在日時を取得
			LocalDateTime importDate = LocalDateTime.now();
			// 表示形式を指定
			DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			// 表示形式を変換
			String date = dateFormat.format(importDate); 
			// 出力する
			System.out.println(date);
			
		}
		
	}