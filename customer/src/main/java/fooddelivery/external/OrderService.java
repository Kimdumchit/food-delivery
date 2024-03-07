package fooddelivery.external;

import java.util.Date;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "front", url = "${api.url.front}")
public interface OrderService {
    @GetMapping(path = "/orders")
    public List<Order> getOrder();

    @GetMapping(path = "/orders/{id}")
    public Order getOrder(@PathVariable("id") Long id);
}
