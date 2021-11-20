package com.project.webproject.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * index page config
 *
 * @author sinope
 * @date 2020.04.07
 * @version 1.0
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
  @Value("${spring.webservice.intro}")
  private String introPage;

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    // 루트 (/) 로 접근 시 introPage로 이동하는 매핑 추가
    registry.addRedirectViewController("/", introPage);
  }

  // Cors 정책을 모두 허용으로 설정
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**");
  }
}