package honux.calendar;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class ToDoList {
	public static void main(String[] args) throws ParseException {
		ToDoListMethod todo=new ToDoListMethod();
		Scanner sc=new Scanner(System.in);
		String cmd;
		while(true) {
			System.out.println("명령 (1, 2, 3, h, q)");
			System.out.print("CMD> ");
			
			cmd=sc.nextLine();
			
			if(cmd.equals("1")) {
				todo.cmdRegister();
			}else if(cmd.equals("2")) {
				todo.cmdSearch();
			}else if(cmd.equals("3")) {
				todo.cmdCal();
			}else if(cmd.equals("h")) {
				todo.printCMDMenu();
			}else if(cmd.equals("q")) {
				break;
			}
		}
		System.out.println("Thank you. Bye");
		sc.close();
	}
}
