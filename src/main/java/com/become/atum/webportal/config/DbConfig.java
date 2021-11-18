package com.become.atum.webportal.config;
 
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

         final String CONST_ORACLE_CLASSNAME    = "oracle.jdbc.OracleDriver";
         final String CONST_ORACLE_STRING       = "jdbc:oracle:thin:@";
         final String CONST_ORACLE_PORT_SID     = ":1521:orcl";

         final String CONST_MSSQL_CLASSNAME    = "com.microdoft.sqlserver.jdbc.SQLServerDriver";
         final String CONST_MSSQL_STRING       = "jdbc:sqlserver://";
         final String CONST_MSSQL_PORT_SID     = ":1433/";
         final String CONST_MSSQL_PARAMETER    = "?";

         final String CONST_MARIADB_CLASSNAME   = "org.mariadb.jdbc.Driver";
         final String CONST_MARIADB_STRING      = "jdbc:mariadb://";
         final String CONST_MARIADB_PORT_SID    = ":3306/";
         final String CONST_MARIADB_PARAMETER   = "?characterEncoding=UTF-8&allowMultiQueries=true&serverTimezone=UTC";

         String databaseType = db.getKhepriDatabaseType();

         if ("oracle".equals(databaseType)) {
            hikariConfig.setDriverClassName(CONST_ORACLE_CLASSNAME);
            hikariConfig.setJdbcUrl(CONST_ORACLE_STRING+db.getKhepriDatabaseIp()+CONST_ORACLE_PORT_SID);

        } else if ("mssql".equals(databaseType)) {
            hikariConfig.setDriverClassName(CONST_MSSQL_CLASSNAME);
            hikariConfig.setJdbcUrl(CONST_MSSQL_STRING+db.getKhepriDatabaseIp()+CONST_MSSQL_PORT_SID+db.getKhepriDatabaseUsername()+CONST_MSSQL_PARAMETER);

        } else { // mariadb
            hikariConfig.setDriverClassName(CONST_MARIADB_CLASSNAME);
            hikariConfig.setJdbcUrl(CONST_MARIADB_STRING+db.getKhepriDatabaseIp()+CONST_MARIADB_PORT_SID+db.getKhepriDatabaseUsername()+CONST_MARIADB_PARAMETER);

        }    

        hikariConfig.setUsername(db.getKhepriDatabaseUsername());
        hikariConfig.setPassword(db.getKhepriDatabasePasswd());

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

