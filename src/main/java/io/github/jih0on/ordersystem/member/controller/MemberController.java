package io.github.jih0on.ordersystem.member.controller;

import io.github.jih0on.ordersystem.member.dto.RegisterRequest;
import io.github.jih0on.ordersystem.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/register")
    public ResponseEntity<Long> register(
            @RequestBody RegisterRequest request) {
        Long memberId = memberService.register(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(memberId);
    }
}
