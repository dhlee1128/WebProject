package com.project.webproject;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping(value = "/vscode")
public class testController {
    
    @GetMapping(value={"","/"})
    public String enter() {
        return "StringBoot Test!";
    }

}
