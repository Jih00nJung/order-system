package io.github.jih0on.ordersystem.member.repository;

import io.github.jih0on.ordersystem.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    boolean existsByEmail(String email);

    Member findByMemberId(Long memberId);
}
