package com.demoproject.demo;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.demoproject.demo.repository.JdbcTemMemberRepository;
import com.demoproject.demo.repository.JpaMemberRepository;
import com.demoproject.demo.repository.MemberRepository;
import com.demoproject.demo.repository.MemoryMemberRepository;
import com.demoproject.demo.service.MemberService;

@Configuration
public class SpringConfig {

    // private DataSource dataSource;
    private EntityManager em;

    @Autowired
    public SpringConfig(EntityManager em) {
        this.em = em;
    }
    
    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        // return new MemoryMemberRepository();
        // return new JdbcTemMemberRepository(dataSource);
        return new JpaMemberRepository(em);
    }
}
