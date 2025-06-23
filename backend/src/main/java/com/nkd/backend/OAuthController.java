package com.nkd.backend;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OAuthController {

    @GetMapping("/")
    public String greet(@AuthenticationPrincipal OAuth2User principal) {
        String email = principal.getAttribute("email");
        String name = principal.getAttribute("name");
        String s = null;
        if (email != null && email.contains("@")) {
            s = email.substring(0, email.indexOf("@"));
        }        return "Welcome to notes-ki-dukaan, ya bish! " + name + " (" + email + ")" + s;
    }

}