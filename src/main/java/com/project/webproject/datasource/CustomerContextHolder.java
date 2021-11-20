package com.project.webproject.datasource;

public class CustomerContextHolder {

  private static final ThreadLocal<String> contextHolder = new ThreadLocal<String>();

  public static void setProjectID(String projectID) {
    contextHolder.set(projectID);
  }

  public static String getProjectID() {
    return (String) contextHolder.get();
  }

  public static void clear() {
    contextHolder.remove();
  }
}
