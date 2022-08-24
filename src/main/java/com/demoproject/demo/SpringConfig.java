package com.demoproject.demo;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.demoproject.demo.repository.JdbcTemMemberRepository;
import com.demoproject.demo.repository.MemberRepository;
import com.demoproject.demo.repository.MemoryMemberRepository;
import com.demoproject.demo.service.MemberService;

@Configuration
public class SpringConfig {

    private DataSource dataSource;

    @Autowired
    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        // return new MemoryMemberRepository();
        return new JdbcTemMemberRepository(dataSource);
    }
}
