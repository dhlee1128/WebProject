package com.become.atum.webportal.model;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

/**
  * JqGrid 모델 객체
  *
  * @author sinope
  * @date 2020.04.06
  * @version 1.0
*/
@Data
public class JqGrid implements Serializable {
    private static final long serialVersionUID = 1L;
    private List<List<String>> header;
    private List<List<String>> data;
}
