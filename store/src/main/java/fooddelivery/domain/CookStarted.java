package fooddelivery.domain;

import fooddelivery.domain.*;
import fooddelivery.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class CookStarted extends AbstractEvent {

    private Long id;
    private String status;
    private String foodId;
    private String orderId;
    private List<String> options;
    private String customerId;

    public CookStarted(FoodCooking aggregate) {
        super(aggregate);
    }

    public CookStarted() {
        super();
    }
}
//>>> DDD / Domain Event
