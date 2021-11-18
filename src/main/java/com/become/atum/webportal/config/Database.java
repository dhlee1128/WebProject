package com.become.atum.webportal.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:application.properties")
public class Database {
    // Database Informartion
    @Value("${khepri.database.type}") 
    private String khepriDatabaseType;
    @Value("${khepri.database.ip}")
    private String khepriDatabaseIp;
    @Value("${khepri.database.username}")
    private String khepriDatabaseUsername;
    @Value("${khepri.database.password}")
    private String khepriDatabasePasswd;

    // Sta Server Information (mariadb)
    @Value("${mariadb.atum.staserver.host}")
    private String mariadbAtumStarserverHost;
    @Value("${mariadb.khpi.staserver.host}")
    private String mariadbKhpiStarserverHost;
    @Value("${mariadb.prj.staserver.host}")
    private String mariadbPrjStarserverHost;

    // Sta Server Information (mariadb)
    @Value("${oracle.atum.staserver.host}")
    private String oracleAtumStarserverHost;
    @Value("${oracle.khpi.staserver.host}")
    private String oracleKhpiStarserverHost;
    @Value("${oracle.prj.staserver.host}")
    private String oraclePrjStarserverHost;

    // Sta Server Information (mariadb)
    @Value("${mssql.atum.staserver.host}")
    private String mssqlAtumStarserverHost;
    @Value("${mssql.khpi.staserver.host}")
    private String mssqlKhpiStarserverHost;
    @Value("${mssql.prj.staserver.host}")
    private String mssqlPrjStarserverHost;

    public String getKhepriDatabaseType() {
      return khepriDatabaseType;
    }

    public String getKhepriDatabaseIp() {
      return khepriDatabaseIp;
    }
  
    public String getKhepriDatabaseUsername() {
      return khepriDatabaseUsername;
    }
  
    public String getKhepriDatabasePasswd() {
      return khepriDatabasePasswd;
    }

    public String getMariadbAtumStarserverHost() {
      return mariadbAtumStarserverHost;
    }

    public String getMariadbKhpiStarserverHost() {
      return mariadbKhpiStarserverHost;
    }
  
    public String getMariadbPrjStarserverHost() {
      return mariadbPrjStarserverHost;
    }

    
    public String getOracleAtumStarserverHost() {
      return oracleAtumStarserverHost;
    }

    public String getOracleKhpiStarserverHost() {
      return oracleKhpiStarserverHost;
    }
  
    public String getOraclePrjStarserverHost() {
      return oraclePrjStarserverHost;
    }

    public String getMssqlAtumStarserverHost() {
      return oracleAtumStarserverHost;
    }

    public String getMssqlKhpiStarserverHost() {
      return oracleKhpiStarserverHost;
    }
  
    public String getMssqlPrjStarserverHost() {
      return oraclePrjStarserverHost;
    }

}