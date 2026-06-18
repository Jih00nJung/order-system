package io.github.jih0on.ordersystem.member.dto;

import lombok.Getter;

@Getter
public class RegisterRequest {

    private String nickname;
    private String password;
    private String email;
}
