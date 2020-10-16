package honux.calendar;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.Scanner;

public class FileIO {
	/*
	 * java file IO
	 * 가능하면 데이터베이스 사용
	 * 인터페이스를 학습하고 Serializable 사용
	 * java json을 검색해 보고 json 방식으로 저장
	 */
	private static Scanner sc;
	private static File file = new File("schedule.txt");
	private static void registerSchedule(){
		try {
			System.out.print("[일정 등록]\n날짜입력(ex.2020-09-26)\n> ");
			String date=sc.next();
			System.out.print("일정입력\n> ");
			String schedule=sc.next();
			String s="";
			StringBuffer sb=new StringBuffer();
			BufferedReader br=new BufferedReader(new FileReader(file));
			BufferedWriter bw;
			if(getSchedule(date)==null) {
				bw =new BufferedWriter(new FileWriter(file,true));
				sb.append(date+", "+schedule+"\n");
				bw.write(sb.toString());
				bw.close();
			}else {
				while((s=br.readLine())!=null) {
					if(s.split(",")[0].equals(date)) {
						sb.append(date+", "+s.split(", ")[1]+" "+schedule+"\n");
					}else {
						sb.append(s+"\n");
					}
				}bw=new BufferedWriter(new FileWriter(file));
				bw.write(sb.toString());
				bw.close();
			}
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	private static void searchSchedule() {
		try {
			System.out.print("[일정 검색]\n날짜입력(ex.2020-09-26)\n> ");
			String date=sc.next();
			String schedule=getSchedule(date);
			if(schedule==null) {
				System.out.println("해당 날짜의 일정이 없습니다.");
			}else {
				System.out.println(schedule);
			}
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	private static String getSchedule(String date) throws Exception {
		BufferedReader br=new BufferedReader(new FileReader(file));
		String s="";
		while((s=br.readLine())!=null) {
			if(s.split(", ")[0].equals(date)) {
				br.close();
				return s.split(", ")[1];
			}
		}
		br.close();
		return null;
	}
	public static void main(String[] args) throws Exception {
		sc = new Scanner(System.in);
		int num;
		while (true) {
			System.out.println("1.일정등록 2.일정검색 3.종료");
			System.out.print("> ");
			num = sc.nextInt();
			if(num==1) {
				registerSchedule();
			}else if(num==2) {
				searchSchedule();
			}else if(num==3) {
				break;
			}else {
				System.out.println("잘못된 입력");
			}
		}
		sc.close();
	}
}
