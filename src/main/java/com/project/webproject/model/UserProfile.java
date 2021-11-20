package com.project.webproject.model;

import java.io.Serializable;

import lombok.Data;

@Data
public class UserProfile implements Serializable {

    private String userId;
    private String userName;
    private String userPassword;
    private String userGroupId;

}
