package honux.calendar;

import java.util.Scanner;

public class Sum {
	public static void main(String[] args) {
		//입력 : 키보드로 두 수의 입력을 받는다.
		Scanner sc=new Scanner(System.in);
		int a=sc.nextInt();
		int b=sc.nextInt();
		//출력 : 화면에 두 수의 합을 출력한다
		System.out.println("두 수의 합은 "+(a+b)+"입니다");
		System.out.printf("%d와 %d의 합은 %d입니다",a,b,a+b);
		sc.close();
	}
}
