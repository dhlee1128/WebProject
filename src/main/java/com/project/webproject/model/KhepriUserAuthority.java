package com.project.webproject.model;

import java.io.Serializable;

import lombok.Data;

/**
 * KhepriUserAuthority Value Object
 *
 * @author sinope
 * @date 2020.04.06
 * @version 1.0
 */
@Data
public class KhepriUserAuthority implements Serializable {

    private static final long serialVersionUID = -2622389995110264847L;

    private String projectId;
    private String systemType;
    private String userId;
    private String uiId;
    private String menuId;
    private String accessFLAG;
    private String authorityId;
    private String authorityName;
 
}
