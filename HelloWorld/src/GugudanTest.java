import java.util.Scanner;

public class GugudanTest {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		for (int i = 2; i <= num; i++) {
			for (int j = 1; j <= num; j++) {
				System.out.printf("%d * %d = %d\n",i,j,i * j);
			}
		}
	}
}
