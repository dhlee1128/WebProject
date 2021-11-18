package com.become.atum.webportal.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * <pre>
* <p>Title: CookieUtil</p>
* <p>Description: 쿠키 유틸</p>
 * </pre>
 *
 * @author: sinop틸
 * @date: 2019.05.22
 * @version: 0.1
 */
public class CookieUtil {
    private static final String ATUM_DOMAIN = "com.become.atum.khepri";

    /**
     * cookieName으로 Cookie의 생성유무를 체크하여 존재시 true, 미존재시 false를 리턴한다.
     * 
     * @param cookieName
     * @param request
     * @return
     */
    public static boolean isCookieExist(String cookieName, HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();

        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(cookieName)) {
                return true;
            }
        }

        return false;
    }

    /**
     * 쿠키생성 (유지기간 1년)
     * 
     * @param cookieName
     * @param cookieValue
     * @param respone
     */
    public static void setUserIdStored(String cookieName, String cookieValue, HttpServletResponse response) {
        Cookie cookie = new Cookie(cookieName, cookieValue);
        cookie.setMaxAge(365 * 24 * 60 * 60);
        cookie.setDomain(ATUM_DOMAIN);
        cookie.setPath("/");

        response.addCookie(cookie);
    }

    /**
     * 쿠키삭제
     * 
     * @param cookieName
     * @param respone
     * @param request
     * @return
     */
    public static void setUserIdDestored(String cookieName, HttpServletResponse response, HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();

        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(cookieName)) {
                Cookie deleteCookie = new Cookie(cookieName, null);
                deleteCookie.setDomain(ATUM_DOMAIN);
                deleteCookie.setMaxAge(0);
                response.addCookie(deleteCookie);

                break;
            }
        }
    }

    /**
     * 쿠키 값을 리턴한다.
     * 
     * @param cookieName
     * @param request
     * @return
     */
    public static String getCookie(String cookieName, HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();

        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(cookieName)) {
                return cookie.getValue();
            }
        }

        return null;
    }
}