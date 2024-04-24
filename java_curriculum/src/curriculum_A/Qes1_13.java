package curriculum_A;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Qes1_13 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		/*1
		[概要]ローカル変数を宣言する処理
		[詳細]ローカル変数を宣言する
		*/
//		変数byteNumを宣言
		byte byteNum;
//		変数shortNumを宣言
		short shortNum;
//		変数intNumを宣言
		int intNum;
//		変数longNumを宣言
		long longNum;
//		変数floatNumを宣言
		float floatNum;
//		変数doubleNumを宣言
		double doubleNum;
//		変数letterを宣言
		char letter;
//		変数lettersを宣言
		String letters;
//		変数isBooleanを宣言
		boolean isBoolean;	
		
		
		/*2
		[概要]ローカル変数をを初期化する処理
		[詳細]ローカル変数に初期値を代入する
		*/
//		変数byteNumの初期値を設定
		byteNum = 0;
//		変数shortNumの初期値を設定
		shortNum = 0;
//		変数intNumの初期値を設定
		intNum = 0;
//		変数longNumの初期値を設定
		longNum = 0L;
//		変数floatNumの初期値を設定
		floatNum = 0.0f;
//		変数doubleNumの初期値を設定
		doubleNum = 0.0d;
//		変数letterの初期値を設定
		letter = '\u0000';
//		変数lettersの初期値を設定
		letters = null;
//		変数isBooleanの初期値を設定
		isBoolean = false;		
		
		
		/*3
		[概要]初期化した変数に値を代入する処理
		[詳細]初期化した変数に値を代入する
		*/
//		変数byteNumに10を代入
		byteNum = 10;
//		変数shortNumに100を代入
		shortNum = 100;
//		変数intNumに1000を代入
		intNum = 1000;
//		変数longNumに10000を代入
		longNum = 10000L;
//		変数floatNumに9.5fを代入
		floatNum = 9.5f;
//		変数doubleNumに10.5を代入
		doubleNum = 10.5;
//		変数letterに"a"を代入
		letter = 'a';
//		変数lettersに"ハロー"を代入
		letters = "ハロー";
//		変数isBooleanにtrueを代入
		isBoolean = true;
		
		
		/*4
		[概要]コンソールに出力する処理
		[詳細]値を代入した変数を用いて出力する
		*/
//		11110を出力
		System.out.println(byteNum + shortNum + intNum + longNum);
//		20を出力
		System.out.println(byteNum + byteNum);
//		a ハロー trueを出力
		System.out.println(letter + " " + letters + " "  + isBoolean);
//		数字を全て足す
		System.out.println(Math.round(byteNum + shortNum + intNum + longNum + floatNum + doubleNum));
//		小数点以外の数字を全てかける
		System.out.println(byteNum * shortNum * intNum * longNum);
//		10.5割る100をする
		System.out.println(doubleNum / shortNum);
//		10引く100をする
		System.out.println(byteNum - shortNum);
//		改行する
		System.out.println();
		
		
		/*5
		[概要]「ハローJAVA43」と表示させる処理
		[詳細]プログラムを修正し「ハローJAVA43」と表示する
		*/
//		int型の変数num,num1を宣言
		int num,num1 = 20;
//		numに20,num1に23を代入
		num = 20;
		num1 =23;
//		ハローJAVA43を出力
		System.out.println("ハローJAVA" + (num + num1));
//		改行する
		System.out.println();
		
		
		/*6
		[概要] formatの通り表示させる処理
		[詳細]『』で囲われた人の情報をローカル変数に代入して出力する
		*/
//		変数nameを宣言し"山田太郎"を代入
		String name = "山田太郎";
//		変数ageを宣言し18を代入
		byte age = 18;
//		変数heightを宣言し170.5fを代入
		float height = 170.5f;
//		変数weightを宣言し62.2fを代入
		float weight = 62.2f;
//		変数foodを宣言し"寿司"を代入
		String food = "寿司";
		
//		「初めまして山田太郎です」を出力
		System.out.println("初めまして" + name + "です");
//		「年齢は18歳です」を出力
		System.out.println("年齢は" + age + "歳です");
//		「身長は170.5cmです」を出力
		System.out.println("身長は" + height + "cmです");
//		「体重は62.2kgです」を出力
		System.out.println("体重は" + weight + "kgです");
//		「好きな食べ物は寿司です」を出力
		System.out.println("好きな食べ物は" + food + "です");
//		改行する
		System.out.println();
		
		
		/*7
		[概要] BMIを出力させる処理
		[詳細]BMIを変数に代入して出力する
		*/
//		変数bmiを宣言
		float bmi;
//		変数bmiにBMIを算出する計算式を代入
		bmi = weight / ((height/100) * (height/100));
//		変数beforeBmiを宣言し四捨五入する変数bmiを代入
		BigDecimal beforeBmi = new BigDecimal(bmi);
// 		setScaleメソッドで小数第2位を四捨五入する
		BigDecimal afterBmi = beforeBmi.setScale(1, RoundingMode.HALF_UP);
//		「BMIは〇〇です」を出力
		System.out.println("BMIは" + afterBmi + "です");
//		改行する
		System.out.println();
		
		
		/*8
		[概要] 自己紹介を出力させる処理
		[詳細] 6で宣言した変数に再代入して出力する
		*/
//		変数nameに"鈴木一郎"を代入
		name = "鈴木一郎";
//		変数ageに24を代入
		age = 24;
//		変数heightに168.5fを代入
		height = 168.5f;
//		変数weightに64.2fを代入
		weight = 64.2f;
//		変数foodに"オムライス"を代入
		food = "オムライス";
//		変数bmiに再代入
		bmi = weight / ((height/100) * (height/100));
// 		変数beforeBmiに四捨五入する変数bmiを代入
		 beforeBmi = new BigDecimal(bmi);
// 		setScaleメソッドで小数第2位を四捨五入する
		afterBmi = beforeBmi.setScale(1, RoundingMode.HALF_UP);
		
		
//		「初めまして鈴木一郎です」を出力
		System.out.println("初めまして" + name + "です");
//		「年齢は24歳です」を出力
		System.out.println("年齢は" + age + "歳です");
//		「身長は168.5cmです」を出力
		System.out.println("身長は" + height + "cmです");
//		「体重は64.2kgです」を出力
		System.out.println("体重は" + weight + "kgです");
//		「好きな食べ物はオムライスです」を出力
		System.out.println("好きな食べ物は" + food + "です");
//		「BMIは22.6です」を出力
		System.out.println("BMIは" + afterBmi + "です");
//		改行する
		System.out.println();
		
		
		/*9
		[概要] 自己紹介を出力させる処理
		[詳細] 8で使用した変数【年齢・身長・体重】の数値を和算で自己代入して出力する
		*/
		
//		変数nameに"鈴木一郎"を代入
		name = "鈴木一郎";
//		変数ageに24を代入
		age += age;
//		変数heightに168.5fを代入
		height += height;
//		変数weightに64.2fを代入
		weight += weight;
//		変数foodに"オムライス"を代入
		food = "オムライス";
//		変数bmiを代入
		bmi = weight / ((height/100) * (height/100));
// 		変数beforeBmiに変数bmiを再代入
		beforeBmi = new BigDecimal(bmi);
// 		setScaleメソッドで小数第3位を四捨五入する
		afterBmi = beforeBmi.setScale(2, RoundingMode.HALF_UP);
		
//		「初めまして鈴木一郎です」を出力
		System.out.println("初めまして" + name + "です");
//		「年齢は48歳です」を出力
		System.out.println("年齢は" + age + "歳です");
//		「身長は337.0cmです」を出力
		System.out.println("身長は" + height + "cmです");
//		「体重は128.4kgです」を出力
		System.out.println("体重は" + weight + "kgです");
//		「好きな食べ物はオムライスです」を出力
		System.out.println("好きな食べ物は" + food + "です");
//		「BMIは11.31です」を出力
		System.out.println("BMIは" + afterBmi + "です");
//		改行する
		System.out.println();
		
		
		/*10
		[概要]条件を満たせばtrueを出力する処理
		[詳細]8で使用した年齢が25歳以上ならtrueを出力する
		*/
//		変数ageに24を代入
		age = 24;
//		ageが25歳以上ならtrueを出力
		System.out.println(25 <= age); 
//		改行する
		System.out.println();
		
		
		/*11
		[概要]【年齢・身長・体重】を文字列型で出力する処理
		[詳細] 8で使用した【年齢・身長・体重】を文字列型に変換し繋げて出力する
		*/
		
//		変数ageに24を再代入
		age = 24;
//		変数heightに168.5fを再代入
		height = 168.5f;
//		変数weightに64.2fを再代入
		weight = 64.2f;
//		年齢を文字列型に変換
		String ageStr = String.valueOf(age);
//		身長を文字列型に変換
		String heightStr = String.valueOf(height);
//		体重を文字列型に変換
		String weightStr = String.valueOf(weight);
//      文字列型に変換した【年齢・身長・体重】を繋げて出力
		System.out.println(ageStr + heightStr + weightStr);
//		改行する
		System.out.println();
		
		
		/*12
		[概要]【年齢・身長】を整型で出力する処理
		[詳細] 11で使用した【年齢・身長】を整数型に変換し出力する
		*/
//		年齢を整数型に変換
		int ageInt = Integer.parseInt(ageStr);
//		整数型に変換した年齢を出力
		System.out.println(ageInt);
//		身長をfloat型に変換
		float heightFloat = Float.parseFloat(heightStr);
//		float型に変換した身長を整数型に変換
		int heightInt = (int)heightFloat;
//		整数型に変換した身長を出力
		System.out.println(heightInt);
//		改行する
		System.out.println();
		
		
		/*13
		[概要]条件を満たせばtrueを出力する処理
		[詳細]12で使用した【年齢が25もしくは身長が160以上】ならtrueを出力する
		*/
//		【年齢が25もしくは身長が160以上】ならtrueを出力
		System.out.println(ageInt == 25 || heightInt >= 160 ); 
	}
}
