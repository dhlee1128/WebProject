package com.project.webproject.config;

// import com.project.webproject.security.CustomLoginFailureHandler;
// import com.project.webproject.security.CustomLoginSuccessHandler;
// import com.project.webproject.security.CustomLogoutSuccessHandler;
import com.project.webproject.service.MemberService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
  * Spring Security configuration
  *
  * @author sinope
  * @date 2020.04.07
  * @version 1.0
*/
@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MemberService memberService;

    // @Autowired
    // private CustomLoginSuccessHandler customLoginSuccessHandler;

    // @Autowired
    // private CustomLoginFailureHandler customLoginFailureHandler;

    // @Autowired
    // private CustomLogoutSuccessHandler customLogoutSuccessHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 로그인 설정
        http.authorizeRequests()
            // ROLE_USER, ROLE_ADMIN으로 권한 분리 URL 정의
            .antMatchers("/", "/login*", "/error**").permitAll()
            .antMatchers("/oi").authenticated()
            .antMatchers("/modeler").authenticated()
            .antMatchers("/manager").authenticated()
            .antMatchers("/rule").authenticated()
            .antMatchers("/common*").authenticated()
        .and()
            // 로그인 페이지 및 성공 url, handler 그리고 로그인 시 사용되는 id, password 파라미터 정의
            .formLogin()
            .loginPage("/login")
            .defaultSuccessUrl("/")
            // .failureHandler(customLoginFailureHandler)
            // .successHandler(customLoginSuccessHandler)
            .usernameParameter("j_username")
            .passwordParameter("j_password")
        .and()
            // 로그아웃 설정
            .logout()
            .logoutSuccessUrl("/")
            // .logoutSuccessHandler(customLogoutSuccessHandler)
            .invalidateHttpSession(false) //false: 로그아웃 핸들러까지 세션 저장,  true: 세션 무효화
        .and()
            //403 redirection
            .exceptionHandling().accessDeniedPage("/portal/access_denied.jsp")
        .and()
            //csrf 설정. 현재는 disable로 처리되어 있으나 추후 보안을 위해서는 필수 적용 필요
            .csrf().disable();
        //iframe 허용을 위해 disable 처리되어 있으나 추후 iframe 사용하지 않으면 삭제 필요
        http.headers().frameOptions().disable();
        http.headers().frameOptions().sameOrigin();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //login process
        // auth.userDetailsService(memberService).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        //허용 경로
        web.ignoring().antMatchers("/resources/**");
    }
}