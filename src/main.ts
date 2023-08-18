import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("1", "John Doe");
const address = new Address("Rua 2", 2, "12345-67", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "item1", 10, "1", 1);
const item2 = new OrderItem("2", "item2", 20, "2", 2);

const order = new Order("1", customer.id, [item1, item2]);
