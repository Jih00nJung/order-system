package io.github.jih0on.ordersystem.member.service;

import io.github.jih0on.ordersystem.member.dto.RegisterRequest;
import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    /**
     * 기능: 사용자 등록
     */
    public Long register(RegisterRequest request) {

        if (memberRepository.existsByEmail(request.email())) {
            throw new IllegalStateException("이미 가입된 이메일입니다.");
        }

        Member member = Member.builder()
                .email(request.email())
                .password(request.password())
                .nickname(request.nickname())
                .emailVerified(false)
                .build();

        Member savedMember = memberRepository.save(member);

        return savedMember.getMemberId();
    }
}
