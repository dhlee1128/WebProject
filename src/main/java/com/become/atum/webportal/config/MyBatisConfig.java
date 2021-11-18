package com.become.atum.webportal.config;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import com.become.atum.webportal.datasource.RoutingDataSource;
import com.become.atum.webportal.model.Project;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@Import(DbConfig.class)
@MapperScan(basePackages = {"com.become.atum.webportal.dao"})


public class MyBatisConfig {
    
    @Autowired
    private DbConfig dbConfig;

    @Autowired
    private Database db;

   @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {

                        
       String databaseType = db.getKhepriDatabaseType();

       SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
       sqlSessionFactoryBean.setDataSource(dbConfig.dataSource());
       sqlSessionFactoryBean.setConfigLocation(
                new PathMatchingResourcePatternResolver().getResource("classpath:mybatis/mybatis-config.xml"));



       sqlSessionFactoryBean.setMapperLocations(
                    new PathMatchingResourcePatternResolver().getResources("classpath:mapper/"+databaseType+"/**/*.xml"));
    
       sqlSessionFactoryBean.setTypeAliasesPackage("com.become.atum.webportal.model");

        return sqlSessionFactoryBean.getObject();

    }
  /*
  @Bean(name = "routingDataSource")
  public DataSource routingDataSource() {
    Map<Object, Object> projectMap = getTargetDataSourceLists();
    RoutingDataSource routingDataSource = new RoutingDataSource();
    routingDataSource.setTargetDataSources(projectMap);
    return routingDataSource;
  }

  @Bean
  public JdbcTemplate jdbcTemplate(DataSource dataSource) {
    return new JdbcTemplate(routingDataSource());
  }

  /**
   * DB 접속과 관련한 (ProjectID : ConnectionString) 형태의 맵을 리턴한다.
   * 
   * @author khk
   * @since 2019-04-12
   * /
  private Map<Object, Object> getTargetDataSourceLists() {

    final String CONST_ORACLESTRING = "jdbc:log4jdbc:oracle:thin:@";
    final String CONST_COLON = ":";
    final String CONST_DEFAULT = "DEFAULT";

    Map<Object, Object> targetDataSourceMap = new LinkedHashMap<Object, Object>();
    DataSource defaultDataSource = null;

    final String CONST_ORACLE_CLASSNAME    = "oracle.jdbc.OracleDriver";
    final String CONST_ORACLE_STRING       = "jdbc:oracle:thin:@";
    final String CONST_ORACLE_PORT_SID     = ":1521:orcl";

    Map<String, String> propertiesMap = new HashMap<String, String>();
    propertiesMap.put("spring.datasource.hikari.driver-class-name",CONST_ORACLE_CLASSNAME);
    propertiesMap.put("spring.datasource.hikari.jdbc-url", CONST_ORACLE_STRING+db.getKhepriDatabaseIp()+CONST_ORACLE_PORT_SID);
    propertiesMap.put("spring.datasource.hikari.username", db.getKhepriDatabaseUsername());
    propertiesMap.put("spring.datasource.hikari.password", db.getKhepriDatabasePasswd());

    _jdbcProperties = propertiesMap;
    defaultDataSource = getDefaultDataSource();

    targetDataSourceMap.put(CONST_DEFAULT, defaultDataSource);

    // DEFAULT로 접속한 개발용 DB의 PROJECT Table 내에 있는 프로젝트 리스트를 불러온다.
    List<Project> projectList = getProjectList(defaultDataSource);

    // DB에서 불러온 Project 정보에 대한 리스트를 targetDataSourceMap에 추가한다.
    for (Project pjt : projectList) {

      String projectID = pjt.getProjectId();
      String IP = pjt.getIp();
      String Port = pjt.getPort();
      String SID = pjt.getSid();
      String DBID = pjt.getDbId();
      String DBPassword = pjt.getDbPassword();

      String DBUrl = CONST_ORACLESTRING + IP + CONST_COLON + Port + CONST_COLON + SID;

      SimpleDriverDataSource driver = new SimpleDriverDataSource(new net.sf.log4jdbc.sql.jdbcapi.DriverSpy(), DBUrl,
          DBID, DBPassword);

      targetDataSourceMap.put(projectID, driver);
    }

    return targetDataSourceMap;
  }

  private DataSource getDefaultDataSource() {

    // properties 파일에서 읽어온 설정 값을 가져온다.

    final String CONST_URL = "url";
    final String CONST_USER = "user";
    final String CONST_PASSWORD = "password";

    String defaultURL = null;
    String defaultUserName = null;
    String defaultPassword = null;

    Map<String, String> propertiesMap = _jdbcProperties;
    DataSource datasource = null;

    // properties 파일에서 읽어온 DEFAULT 설정 값에서 url, username, password 를 불러온 뒤, DEFAULT란
    // 이름으로 targetDataSourceMap에 추가한다.
    for (String propertyKey : propertiesMap.keySet()) {
      if (propertyKey.toLowerCase().contains(CONST_URL)) {
        defaultURL = propertiesMap.get(propertyKey);
      } else if (propertyKey.toLowerCase().contains(CONST_USER)) {
        defaultUserName = propertiesMap.get(propertyKey);
      } else if (propertyKey.toLowerCase().contains(CONST_PASSWORD)) {
        defaultPassword = propertiesMap.get(propertyKey);
      }
    }

    datasource = (DataSource) new SimpleDriverDataSource(new net.sf.log4jdbc.sql.jdbcapi.DriverSpy(), defaultURL,
        defaultUserName, defaultPassword);
    // datasource = (DataSource) new SimpleDriverDataSource(new
    // oracle.jdbc.driver.OracleDriver(), defaultURL, defaultUserName,
    // defaultPassword);
    return datasource;
  }

  /**
   * Project 리스트를 가져온다.
   * 
   * @author khk
   * @since 2019-04-12
   * /
  public List<Project> getProjectList(DataSource dataSource) {

    final String CONST_PROJECTID = "PROJECTID";
    final String CONST_IP = "IP";
    final String CONST_PORT = "PORT";
    final String CONST_SID = "SID";
    final String CONST_DBID = "DBID";
    final String CONST_DBPASSWORD = "DBPASSWORD";
    final String CONST_GET_PROJECT_QUERY = "SELECT * FROM PROJECT";

    List<Project> projectList = new ArrayList<Project>();
    ResultSet rs = null;
    try {
      rs = dataSource.getConnection().prepareStatement(CONST_GET_PROJECT_QUERY).executeQuery();
      while (rs.next()) {

        Project pjt = new Project();

        pjt.setProjectId(rs.getString(CONST_PROJECTID));
        pjt.setIp(rs.getString(CONST_IP));
        pjt.setPort(rs.getString(CONST_PORT));
        pjt.setSid(rs.getString(CONST_SID));
        pjt.setDbId(rs.getString(CONST_DBID));
        pjt.setDbPassword(rs.getString(CONST_DBPASSWORD));

        projectList.add(pjt);
      }

    } catch (SQLException e) {
      e.printStackTrace();
    }

    return projectList;
  }
  */
}
