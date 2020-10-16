import java.util.Scanner;

public class GugudanTest2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String number=sc.nextLine();
		int x=Integer.parseInt(number.split(",")[0]);
		int y=Integer.parseInt(number.split(",")[1]);
		for(int i=2;i<=x;i++) {
			for(int j=1;j<=y;j++) {
				System.out.printf("%d * %d = %d\n", i,j,i*j);
			}
		}sc.close();
	}
}
