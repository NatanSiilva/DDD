import SendEmailWhenProductIsCreatedHandle from "../product/handle/send-email-when-product-is-created.handle";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
    it("should register an event handle", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandle = new SendEmailWhenProductIsCreatedHandle();

        eventDispatcher.register("productCreatedEvent", eventHandle);

        expect(eventDispatcher.getEventHandlers["productCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["productCreatedEvent"].length).toBe(1);
    })
});
