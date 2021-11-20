package com.project.webproject.util;

import java.io.IOException;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * <pre>
* <p>Title: HttpUtil</p>
* <p>Description: HTTP 유틸리티 클래스</p>
 * </pre>
 *
 * @author: sinope
 * @date: 2019.05.28
 * @version: 0.1
 */
public class HttpUtil {

	/**
	 * 클라이언트의 IP Address를 가져오는 함수(웹서버 뒷단에 WAS가 있을 경우를 대비함)
	 * @param request
	 * @return
	 */
	public static String getClientIPAddress(javax.servlet.http.HttpServletRequest request) {
		String ipAddress = request.getHeader("X-Forwarded-For");
		try {
			if (ipAddress == null || ipAddress.length() == 0 || ipAddress.toLowerCase().equals("unknown")) {
				ipAddress = request.getHeader("HTTP_X_FORWARDED_FOR");
			}
			if (ipAddress == null || ipAddress.length() == 0 || ipAddress.toLowerCase().equals("unknown")) {
				ipAddress = request.getHeader("REMOTE_ADDR");
			}
			if (ipAddress == null || ipAddress.length() == 0 || ipAddress.toLowerCase().equals("unknown")) {
				ipAddress = request.getHeader("Proxy-Client-IP");
			}
			if (ipAddress == null || ipAddress.length() == 0 || ipAddress.toLowerCase().equals("unknown")) {
				ipAddress = request.getHeader("WL-Proxy-Client-IP");  // 웹로직
			}
			if (ipAddress == null || ipAddress.length() == 0 || ipAddress.toLowerCase().equals("unknown")) {
				ipAddress = request.getRemoteAddr();
			}
			if("0:0:0:0:0:0:0:1".equals(ipAddress) || "127.0.0.1".equals(ipAddress)) { //localhost
				ipAddress = InetAddress.getLocalHost().getHostAddress();
			}
		}
		catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return ipAddress;
	}

	/**
	 * 클라이언트의 OS 타입을 반환한다.
	 * @param request
	 * @return
	 */
	public static String getOSType(javax.servlet.http.HttpServletRequest request) {
		String userAgent = request.getHeader("User-Agent");
		String os = "";
		if (userAgent.toLowerCase().indexOf("windows") >= 0) {
			os = "Windows";
		}
		else if (userAgent.toLowerCase().indexOf("mac") >= 0) {
			os = "Mac";
		}
		else if (userAgent.toLowerCase().indexOf("x11") >= 0) {
			os = "Unix";
		}

		return os;
	}

	/**
	 * 서버의 맥주소를 반환한다.
	 * @param ip
	 * @return
	 */
	public static String getServerMacAddress(String ip) {
		String macAddr = "";
		try {
			InetAddress address = InetAddress.getByName(ip);

			/*
			 * Get NetworkInterface for the current host and then read
			 * the hardware address.
			 */
			NetworkInterface ni = NetworkInterface.getByInetAddress(address);
			if (ni != null) {
				byte[] mac = ni.getHardwareAddress();
				if (mac != null) {
					/*
					 * Extract each array of mac address and convert it
					 * to hexa with the following format
					 */
					StringBuilder sb = new StringBuilder();
					for (int i = 0; i < mac.length; i++) {
						sb.append(String.format("%02X%s", mac[i], (i < mac.length - 1) ? "-" : ""));
					}
					macAddr = sb.toString();
				}
				else {
					System.out.println("Address doesn't exist or is not accessible.");
				}
			}
			else {
				System.out.println("Network Interface for the specified address is not found.");
			}
		}
		catch (UnknownHostException e) {
			e.printStackTrace();
		}
		catch (SocketException e) {
			e.printStackTrace();
		}

		return macAddr;

	}
	
	/**
	 * 입력된 IP의 ARP (Address Resolution Protocal)정보를 반환한다.
	 * @param ip
	 * @return
	 * @throws IOException
	 */
	public static String getARPTable(String ip){
		String systemInput = "";
		String mac = "";
		Process process = null;
		try {
			//to renew the system table before querying 
			process = Runtime.getRuntime().exec("arp -a" + ip);
			Scanner s = new Scanner(process.getInputStream()).useDelimiter("\\A");
			systemInput = s.next();
			Pattern pattern = Pattern.compile("\\s{0,}([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})");
			Matcher matcher = pattern.matcher(systemInput);
			if (matcher.find()) {
				mac = mac + matcher.group().replaceAll("\\s", "");
			}
			else {
				System.out.println("No string found");
			}
			s.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			if (process != null) {
				process.destroy();
			}
		}
		return mac;
	}

	/**
	 * 클라이언트의 맥주소를 반환한다.
	 * @param ip
	 * @return
	 */
	public static String getClientMacAddress(String ip) {
		String macAddr = "";
		return macAddr;

	}

	/**
	 * 문자열에서  패턴에 맞는 문자열 즉 맥주소를 추출한다.
	 * @param text 검사할 문자열
	 * @return 맥 주소
	 */
	public static String parseMacAddress(String text) {
		String result = "";
		String[] list = text.split("\\p{XDigit}{2}(-\\p{XDigit}{2}){5}");
		int index = 0;
		for (String str : list) {
			if (str.length() < text.length()) {
				index = str.length();
				result = text.substring(index, index + 17);
				if (!result.equals("00-00-00-00-00-00")) {
					break;
				}
				text = text.substring(index + 17);

		   }
		}
		return result;
	}

	/**
	 * Ping 체크 한다.
	 * @param ip
	 * @param timeout
	 * @return true: 접근가능, false: 접근불가능
	 * @throws Exception
	 */
	public static boolean pingCheck(String ip, int timeout) throws Exception {
		//입력된 호스명으로 IP 어드레스를 던진다.
		InetAddress target = InetAddress.getByName(ip);
		//주어진 밀리세컨드 내에 원격호스트에 접근 가능 하면 true, 아니면 false를 던진다.(밀리세컨드 (ms) = 1/1000초)
		return target.isReachable(timeout);
	}


/* 	public static void main(String[] args) {
		// mac어드레스정보를 가져와야할 ip어드레스
		String ipStr = "192.168.0.66";
		
		String mac = getARPTable(ipStr);
		System.out.println(mac);


	} */
}