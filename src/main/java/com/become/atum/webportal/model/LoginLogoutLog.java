package com.become.atum.webportal.model;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

/**
 * <pre>
* <p>Title: LoginLogoutLog </p>
* <p>Description: 로그인/로그아웃 로그 Value Object(VO)</p>
 * </pre>
 *
 * @author: sinope
 * @date: 2019.06.04
 * @version: 0.1
 */
@Data
public class LoginLogoutLog implements Serializable {
  private static final long serialVersionUID = 1L;

  private Date lgnDtm;
  private String userid;
  private String ipAdr;
  private String succYn;
  private String lgnFailCd;
  private String lgnFailCnts;
  private Date logoutDate;
  private String edIpAdr;
  private String subSysCd = "WPS";
  private String username;
  private String clientid;
  private String clienttype;
  private String projectId;

}