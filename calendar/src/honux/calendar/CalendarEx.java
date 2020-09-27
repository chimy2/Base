package honux.calendar;

import java.time.LocalDate;
import java.util.Scanner;

public class CalendarEx {
	private static final int[] MAX_DAYS= {31,28,31,30,31,30,31,31,30,31,30,31};
	public int getMaxDaysOfMonth(int month) {
		if(month==2) return 28;
		else if(month==4||month==6||month==9||month==11) return 30;
		return 31;
	}
	public int getMaxDaysOfMonth2(int month) {
		switch(month) {
		case 2: return 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
		default: return 31;
		}
	}
	public int getMaxDaysOfMonth3(int month) {
		return MAX_DAYS[month-1];
	}
	public void printSampleCalendar() {
		System.out.println("일   월   화   수   목   금   토\n--------------------\n"
				+ " 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n"
				+ "15 16 17 18 19 20 21\n22 23 24 25 26 27 28");
	}
	public static void main(String[] args) {
		
		System.out.println("일   월   화   수   목   금   토");
		System.out.println("--------------------");
		for(int i=1;i<=28;i++) {
			if(i<10)System.out.print(" ");
			System.out.print(i+" ");
			if(i%7==0)System.out.println();
		}
		
		//숫자를 입력받아 해달하는 달의 최대 일수를 출력하는 프로그램
		Scanner sc=new Scanner(System.in);
		CalendarEx ex=new CalendarEx();
		int month=sc.nextInt();
		int day=LocalDate.of(2020, month, 1).lengthOfMonth();
		int day2=ex.getMaxDaysOfMonth3(month);
		
		System.out.printf("2020년 %d월은 %d일까지 있습니다.\n",month,day);
		System.out.printf("%d월은 %d일까지 있습니다.\n",month,day2);
		
		ex.printSampleCalendar();
		
		//반복하여 마지막 날짜 출력하기
		System.out.println("반복 횟수를 입력하세요.");
		int repeat=sc.nextInt();
		for(int i=0;i<repeat;i++) {
			System.out.println("달을 입력하세요.");
			int month2=sc.nextInt();
			if(month2==-1) {
				break;
			}
			if(month2>12||month2<1) {
				continue;
			}
			int day3=ex.getMaxDaysOfMonth(month2);
			System.out.printf("%d월은 %d일까지 있습니다.\n",month2,day3);
		}System.out.println("byebye");
		
		
		sc.close();
		
	}
}
