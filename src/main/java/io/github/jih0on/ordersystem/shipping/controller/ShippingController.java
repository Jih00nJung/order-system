package io.github.jih0on.ordersystem.shipping.controller;

import io.github.jih0on.ordersystem.shipping.dto.ShippingCreateResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/shipping")
@RequiredArgsConstructor
public class ShippingController {


    // 배송 생성
    @PostMapping("/")
    public ResponseEntity<ShippingCreateResponse> createShipping(
            @RequestBody ShippingCreateResponse request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(request);
    }

}
