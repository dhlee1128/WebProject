package com.become.atum.webportal.model;

import java.io.Serializable;

import lombok.Data;

/**
  * KhepriAuthority Value Object
  *
  * @author sinope
  * @date 2020.04.06
  * @version 1.0
*/
@Data
public class KhepriAuthority implements Serializable {

    private static final long serialVersionUID = -2622389995110264847L;

    private String authorityId;
    private String authorityName;
    private String menuId;
    private String description;

}
