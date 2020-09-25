package honux.calendar;

import java.util.Scanner;

public class ToDoList {
	public static void printMenu() {
		System.out.println("+------------------+");
		System.out.println("| 1. 일정 등록");
		System.out.println("| 2. 일정 검색");
		System.out.println("| 3. 달력 보기");
		System.out.println("| h. 도움말 q. 종료");
		System.out.println("+------------------+");
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		while(true) {
			printMenu();
			System.out.println("명령 (1, 2, 3, h, q)");
			break;
		}
	}
}
