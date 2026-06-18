package io.github.jih0on.ordersystem.product.dto;

import io.github.jih0on.ordersystem.product.entity.Product;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ProductResponse {
    private Long productId;
    private String name;
    private int price;
    private int stock;
    private String description;
    private String sellerNickname;

    public static ProductResponse from(Product product) {
        return ProductResponse.builder()
                .productId(product.getProductId())
                .name(product.getName())
                .price(product.getPrice())
                .stock(product.getStock())
                .description(product.getDescription())
                .sellerNickname(product.getSeller().getNickname())
                .build();
    }
}
