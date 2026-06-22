package io.github.jih0on.ordersystem.product.repository;

import io.github.jih0on.ordersystem.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    /**
     * 낙관적 락 적용 <br>
     * 재고 증감에 사용
     * 선착순 이벤트처럼 충돌이 자주 발생하지 않아 낙관적 락 적용
     */
    @Query("SELECT p FROM Product p WHERE p.productId = :id")
    Optional<Product> findByProductId(@Param("id") Long productId);

}
