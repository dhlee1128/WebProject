package com.demoproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.demoproject.demo.service.MemberService;

@Controller
public class MemberContoller {

    private final MemberService memberService;

    @Autowired
    public MemberContoller(MemberService memberService) {
        this.memberService = memberService;
    }
    
}
