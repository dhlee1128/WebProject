package com.project.webproject.controller;

import com.project.webproject.service.CommonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class LoginController {

    @Autowired
    private CommonService commonService;
    
    @GetMapping("/signup")
    public String SignUp(){
        return "signup";
    }

    @PostMapping("/signup")
    public String SignUp2(){
        // commonService.save(requestDto);
        return "redirect:/";
    }
}
