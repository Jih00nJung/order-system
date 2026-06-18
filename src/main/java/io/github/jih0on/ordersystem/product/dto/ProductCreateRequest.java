package io.github.jih0on.ordersystem.product.dto;

import lombok.Getter;

@Getter
public class ProductCreateRequest {
    private String name;
    private int price;
    private int stock;
    private String description;

}
