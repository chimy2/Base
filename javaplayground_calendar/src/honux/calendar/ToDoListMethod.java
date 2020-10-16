package honux.calendar;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Scanner;

public class ToDoListMethod {

	private int[] day= {31,28,31,30,31,30,31,31,30,31,30,31};
	private int[] day2= {31,29,31,30,31,30,31,31,30,31,30,31};
	private HashMap<Date, String> planMap;
	private Scanner sc;
	public ToDoListMethod(){
		planMap=new HashMap<Date, String>();
		sc=new Scanner(System.in);
	}
	/**
	 * 
	 * @param date ex : "2020-09-26"
	 * @param plan
	 * @throws ParseException 
	 */
	public void registerPlan(String strDate, String plan) throws ParseException {
		Date date=new SimpleDateFormat("yyyy-MM-dd").parse(strDate);
		planMap.put(date,plan);
	}
	public String searchPlan(String strDate) throws ParseException {
		Date date=new SimpleDateFormat("yyyy-MM-dd").parse(strDate);
		String plan="등록된 일정이 없습니다.";
		if(planMap.containsKey(date))planMap.get(date);
		return plan;
	}
	public void cmdCal() {
		System.out.println("연도를 입력하세요(exit : -1)");
		System.out.print("YEAR> ");
		int year=sc.nextInt();
		if(year==-1) {
			return;
		}
		System.out.println("월을 입력하세요.(exit : -1)");
		System.out.print("MONTH> ");
		int month=sc.nextInt();
		if(month==-1) {
			return;
		}else if(month>12||month<1) {
			System.out.println("잘못된 입력입니다.");
			return;
		}getCal(year, month);
	}
	public void printCMDMenu() {
		System.out.println("+------------------+");
		System.out.println("| 1. 일정 등록");
		System.out.println("| 2. 일정 검색");
		System.out.println("| 3. 달력 보기");
		System.out.println("| h. 도움말 q. 종료");
		System.out.println("+------------------+");
	}
	public void getCal(int year, int month) {
		int year_before=1970;
		int year_cha=year-year_before;
		int month_before=1;
		int day_week=4;// 
		System.out.printf("   <<%5d년%5d월 >>\n",year,month);
		System.out.printf("%3s%3s%3s%3s%3s%3s%3s\n","SU","MO","TU","WE","TH","FR","SA");
		System.out.println("----------------------");
		for(int i=year_before;(year_cha>0)?i<year:i>year+1;i=(year_cha>0)?i+1:i-1) {
			if(year_cha>0) {
				day_week+=(i%4==0)?366:365;
			}else {
				day_week-=(i%4==0)?366:365;
			}
		}for(int i=(year_cha>=0)?month_before:12;
		(year_cha>=0)?i<month:i>=month;
		i=(year_cha>=0)?i+1:i-1) {
			if(year_cha>0) {
				day_week+=year%4==0?day2[i-1]:day[i-1];
			}else {
				day_week-=year%4==0?day2[i-1]:day[i-1];
			}
		}if(day_week<0) day_week=7+day_week%7;
		for(int i=1;i<=(year%4==0?day2[month-1]:day[month-1])+day_week%7;i++) {
			if(i>day_week%7) {
				System.out.printf("%3d",i-day_week%7);
			}else System.out.print("   ");
			if(i%7==0&&i-day_week%7>0)System.out.println();
		}System.out.println("\n");
	}
	public void cmdRegister() throws ParseException {
		System.out.println("[새 일정 등록]");
		System.out.println("날짜를 입력해주세요.(yyyy-MM-dd)");
		String date=sc.nextLine();
		System.out.println("일정을 입력해주세요.");
		String text=sc.nextLine();
		registerPlan(date, text);
	}
	public void cmdSearch() {
		System.out.println("[일정 검색]");
		System.out.println("날짜를 입력해주세요.(yyyy-MM-dd)");
		String date=sc.next();
		String plan="";
		try {
			plan=this.searchPlan(date);
		} catch (ParseException e) {
			e.printStackTrace();
			System.out.println("일정 검색 중 오류가 발생했습니다.");
		}
		System.out.println(plan);
	}
}
