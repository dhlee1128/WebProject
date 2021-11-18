package com.become.atum.webportal.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration						// 빈 등록
@RequiredArgsConstructor
@PropertySource("classpath:/application.properties") 
public class ConfigUtil {
  private final Environment environment;		// 빈 주입을 받습니다.

  public String getProperty(String key){
      return environment.getProperty(key);
  }
}
