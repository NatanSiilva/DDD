describe("Domain events tests", () => {
    it("should register an event handle", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandle = new SendEmailWhenProductIsCreatedHandle();

        eventDispatcher.register("productCreatedEvent", eventHandle);

        expect(eventDispatcher.getEventHandles["productCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandles["productCreatedEvent"].length).toBe(1);
    })
});
