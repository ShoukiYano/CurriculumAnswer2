package question_1_23;

public class Animal {
		
		// フィールド変数 
		// 動物名
		private String name;
		// 体長
		private double length;
		// 速度
		private int speed;
		

		// 動物名を格納
		public void setName(String name) {
			
			// フィールド変数に代入
			this.name = name;
		}
		
		// 動物名を取得
		public String getName() {
			
			// 戻り値
			return this.name;
		}
		
		// 体長を格納
		public void setLength(double length) {
			
			// フィールド変数に代入
			this.length = length;
		}
		
		// 体長を取得
		public  double getLength() {
			
			// 戻り値
			return this.length;
		}
		
		// 速度を格納
		public void setSpeed(int speed) {
			
			// フィールド変数に代入
			this.speed = speed;
		}
		
		// 速度を取得
		public int getSpeed() {
			
			// 戻り値
			return this.speed;
		}
	
}
