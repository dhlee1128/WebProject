package com.project.webproject.config;
 
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionManager;
import org.springframework.transaction.annotation.TransactionManagementConfigurer;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;


@Configuration
public class DbConfig implements TransactionManagementConfigurer {

    @Autowired
    private Database db;
    
    @Bean
    public DataSource dataSource() {
         HikariConfig hikariConfig =new HikariConfig();

         final String CONST_MARIADB_CLASSNAME   = "org.mariadb.jdbc.Driver";
         final String CONST_MARIADB_STRING      = "jdbc:mariadb://";
         final String CONST_MARIADB_PORT_SID    = ":3306/";
         final String CONST_MARIADB_PARAMETER   = "?characterEncoding=UTF-8&allowMultiQueries=true&serverTimezone=UTC";

        hikariConfig.setDriverClassName(CONST_MARIADB_CLASSNAME);
        hikariConfig.setJdbcUrl(CONST_MARIADB_STRING+"localhost"+CONST_MARIADB_PORT_SID+"DEVELOPMENT"+CONST_MARIADB_PARAMETER);
        hikariConfig.setUsername("DEVELOP");
        hikariConfig.setPassword("DEVELOP");

         HikariDataSource dataSource=new HikariDataSource(hikariConfig);
         return dataSource;
    }

    @Bean
    public DataSourceTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }
    @Override
    public TransactionManager annotationDrivenTransactionManager() {
        return transactionManager();
    }
 
}

