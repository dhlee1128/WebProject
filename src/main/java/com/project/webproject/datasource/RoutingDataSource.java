package com.project.webproject.datasource;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

public class RoutingDataSource extends AbstractRoutingDataSource {

  @Override
  protected Object determineCurrentLookupKey() {
    return CustomerContextHolder.getProjectID() != null ? CustomerContextHolder.getProjectID() : "DEFAULT";
  }

}
