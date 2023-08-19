import EventHandleInterface from "../../@shared/event-handle.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandle implements EventHandleInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log(`Send email when product is created: ${event.eventData}`);
    }
}
