package com.project.webproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;

/** 
  * Spring Boot Main Class
  * War 배포용으로 Jar 배포를 위해서는 SpringBootServletInitializer 상속 제거
  *
  * @author sinope
  * @date 2020.04.08
  * @version 1.0
*/
@SpringBootApplication
@PropertySource("classpath:/application.properties")
public class WebPortalApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(WebPortalApplication.class, args);
    }

    //war 배포용도
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(WebPortalApplication.class);
    }

}
