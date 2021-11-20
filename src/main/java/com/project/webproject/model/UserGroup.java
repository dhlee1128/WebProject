package com.project.webproject.model;

import java.io.Serializable;

import lombok.Data;

@Data
public class UserGroup implements Serializable {

    private String userGroupId;
    private String userGroupName;

}
