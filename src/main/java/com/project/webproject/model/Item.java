package com.project.webproject.model;

import lombok.Data;

@Data
public class Item {

  private String projectId;
  private String itemId;
  private String ruleId;
  private String tableId;
  private String functionId;
  private String upItemId;
  private String upItemNm;
  private String superItemId;
  private String superItemNm;
  private String rawId;
  private String itemLevel;
  private String version;
  private String lockStatus;
  private String lockUser;
  private String workStatus;
  private String workStatusNm;
  private String createDate;
  private String createUser;
  private String userId;
  private String groupYn;
  private String messageId;

  private String mappingItemId;
  private String mappingYn;
  private String menuNm;
  private String message;
  private String ruleType;
  private int position;
  private String positionList;

  private String groupFlag;
  private String groupLevel;
  private String parentRawId;
  private String lastEventUser;
  private String lastEventTime;
  private String lastEventComment;
  private String imageData = "";
  private byte[] imageDBData = new byte[0];
  private String description;
  private String queryRuleValue;
  private String deleteType;
  private String updateType;

}