package com.kitchen_needs.business_handler.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dataCollection")
@Setter
@Getter
@NoArgsConstructor
public class Data {
    @Id
    private String id;

    private int fuelPrice;
    private String venueName;
    private long amountPaid, balance;
    private int milkDeliveredL, commissionPerL;
    private String paymentStatus, paymentMode;
}
