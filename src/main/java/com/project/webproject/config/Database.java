package com.project.webproject.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:application.properties")
public class Database {

    // Sta Server Information (mariadb)
    @Value("${mariadb.atum.staserver.host}")
    private String mariadbAtumStarserverHost;

    public String getMariadbAtumStarserverHost() {
      return mariadbAtumStarserverHost;
    }
}