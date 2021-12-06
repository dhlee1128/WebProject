package com.project.webproject.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class testController {
    
    @GetMapping("/api/test")
    public String enter() {
        return "StringBoot Test!";
    }

}
