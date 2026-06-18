package io.github.jih0on.ordersystem.product.service;

import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import io.github.jih0on.ordersystem.product.dto.ProductCreateRequest;
import io.github.jih0on.ordersystem.product.dto.ProductResponse;
import io.github.jih0on.ordersystem.product.entity.Product;
import io.github.jih0on.ordersystem.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final MemberRepository memberRepository;


    /**
     * 기능: 상품 생성 <br>
     * sellerId를 하드코딩으로 1번 사용자 설정해둠
     * 나중에 JWT 설정할 때 변경할 것
     */
    @Transactional
    public Long createProduct(ProductCreateRequest request) {

        Member seller = memberRepository.findById(1L)
                .orElseThrow();

        Product product = Product.builder()
                .name(request.name())
                .price(request.price())
                .stock(request.stock())
                .description(request.description())
                .seller(seller)
                .build();

        Product savedProduct = productRepository.save(product);

        return savedProduct.getProductId();
    }

    /**
     * 기능: 단일 상품 조회
     */
    public ProductResponse getProduct(Long productId) {

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("해당 상품을 찾을 수 없습니다."));

        return ProductResponse.from(product);
    }

    /**
     * 기능: 재고 감소
     */
    @Transactional
    public void removeStock(Long productId, int quantity) {
        Product product = productRepository.findByProductId(productId)
                .orElseThrow(() -> new IllegalArgumentException("상품이 없습니다."));

        product.removeStock(quantity);
    }

}
