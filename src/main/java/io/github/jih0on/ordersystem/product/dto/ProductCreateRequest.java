package io.github.jih0on.ordersystem.product.dto;

public record ProductCreateRequest(
        String name,
        int price,
        int stock,
        String description
) {
}
