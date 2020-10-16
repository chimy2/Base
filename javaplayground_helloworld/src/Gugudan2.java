
public class Gugudan2 {
	public static int[] calculate(int times) {
		int[] result = new int[9];
		for (int i = 0; i < result.length; i++) {
			result[i] = times * (i + 1);
		}
		return result;
	}
	public static void print(int[] result) {
		for(int i=0;i<result.length;i++) {
			System.out.println(result[i]);
		}
	}
	public static void main(String[] args) {
		// 배열을 이용하여 구구단 구현
		int[] result = new int[9];
		for (int i = 1; i <= result.length; i++) {
			result[i - 1] = 2 * i;
		}
		for (int i = 0; i < result.length; i++) {
			System.out.println(result[i]);
		}

		int[] times = new int[9];
		for (int i = 0; i < times.length; i++) {
			times[i] = 3 * (i + 1);
		}
		for (int i = 0; i < times.length; i++) {
			System.out.println(times[i]);
		}

		int[] times2 = new int[9];
		for (int i = 0; i < times2.length; i++) {
			times2[i] = 4 * (i + 1);
		}
		for (int i = 0; i < times2.length; i++) {
			System.out.println(times2[i]);
		}
		
		// 메소드로 구구단 구현
		int[] result2=calculate(2);
		for(int i=0;i<result2.length;i++) {
			System.out.println(result2[i]);
		}
		result2=calculate(3);
		for(int i=0;i<result2.length;i++) {
			System.out.println(result2[i]);
		}
		result2=calculate(4);
		for(int i=0;i<result2.length;i++) {
			System.out.println(result2[i]);
		}
		result2=calculate(5);
		print(result2);
		result2=calculate(6);
		print(result2);
		
		for(int i=2;i<=9;i++) {
			int[] result3=calculate(i);
			print(result3);
		}
	}
}
