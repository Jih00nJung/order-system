package io.github.jih0on.ordersystem.global;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GlobalController {

    // Render Health Check
    @GetMapping("/health")
    public String health() {
        return "health";
    }
}
