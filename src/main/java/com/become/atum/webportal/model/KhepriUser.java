package com.become.atum.webportal.model;

import java.io.Serializable;

import lombok.Data;

/**
 * KehpriUser Value Object
 *
 * @author sinope
 * @date 2020.04.06
 * @version 1.0
 */
@Data
public class KhepriUser implements Serializable {

    private static final long serialVersionUID = -2622389995110264847L;

    private String projectId;
    private String systemType;
    private String userId;
    private String userName;
    private String userGroupId;
    private String password;
    private String email;
    private String smsNo;
    private String employeeNo;
    private String company;
    private String department;
    private String enabled;
    private String usedLanguage;


    // 정수형 그룹 아이디
    private int groupId;

}
