package honux.calendar;

import java.time.LocalDate;
import java.time.Year;
import java.util.Calendar;
import java.util.Scanner;

public class CalendarEx2 {
	/*
	 * 월을 입력하면 해당 월의 달력 출력
	 * -1을 입력 받기 전까지 반복 입력
	 * 프롬프트 출력
	 */
	private final static String PROMPT="cal> " ;
	public static void printCalendar(int month) {
		LocalDate ld=LocalDate.of(Year.now().getValue(), month, 1);
		System.out.println(month+"월 달력");
		System.out.println("일   월   화   수   목   금   토");
		System.out.println("--------------------");
		int start=ld.getDayOfWeek().getValue()%7;
		for(int i=0;i<start+ld.lengthOfMonth();i++) {
			if(i<start) {
				System.out.print("   ");
			}else {
				if(i<start+9) System.out.print(" ");
				System.out.printf("%d ",i-start+1);
			}if((i+1)%7==0) {
				System.out.println();
			}
		}System.out.println();
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int month=0;
		while(true) {
			System.out.println("월을 입력해주세요.(종료 : -1)");
			System.out.print(PROMPT);
			month=sc.nextInt();
			if(month==-1) {
				break;
			}
			if(month>12||month<1) {
				System.out.println("잘못된 입력입니다.");
				continue;
			}
			printCalendar(month);
		}
		System.out.println("프로그램 종료");
		
	}
}
