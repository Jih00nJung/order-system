package io.github.jih0on.ordersystem.product.controller;

import io.github.jih0on.ordersystem.product.dto.ProductCreateRequest;
import io.github.jih0on.ordersystem.product.dto.ProductResponse;
import io.github.jih0on.ordersystem.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    // 상품 등록
    @PostMapping("/")
    public ResponseEntity<Long> createProduct(
            @RequestBody ProductCreateRequest request) {

        Long productId = productService.createProduct(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(productId);
    }

    // 상품 조회
    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponse> getProduct(
            @PathVariable Long productId) {

        ProductResponse response = productService.getProduct(productId);

        return ResponseEntity.ok()
                .body(response);
    }

    // 상품 목록 조회
    @GetMapping("/list")
    public ResponseEntity<List<ProductResponse>> getProducts() {
        List<ProductResponse> responses = productService.getAllProduct();
        return ResponseEntity.ok(responses);
    }


}
