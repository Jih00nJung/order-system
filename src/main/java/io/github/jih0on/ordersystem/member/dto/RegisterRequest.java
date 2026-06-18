package io.github.jih0on.ordersystem.member.dto;

public record RegisterRequest(
        String nickname,
        String password,
        String email
) {
}