package fooddelivery.domain;

import fooddelivery.domain.*;
import fooddelivery.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class Ordercanceled extends AbstractEvent {

    private Long id;
    private String foodId;
    private List<String> options;
    private String address;
    private String customerId;
    private String storeId;

    public Ordercanceled(Order aggregate) {
        super(aggregate);
    }

    public Ordercanceled() {
        super();
    }
}
//>>> DDD / Domain Event
