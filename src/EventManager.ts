export class ShapeEventManager extends EventTarget {
    /**
     * Dispatches a 'shapeCreated' event.
     *
     * @param {string} shapeType - The type of the shape that was created.
     */
    dispatchShapeCreatedEvent(shapeType: string) {
        const event = new CustomEvent('shapeCreated', { detail: { shapeType } });
        this.dispatchEvent(event);
    }

    /**
     * Dispatches a 'shapeUpdated' event.
     *
     * @param {string} shapeType - The type of the shape that was updated.
     */
    dispatchShapeUpdatedEvent(shapeType: string) {
        const event = new CustomEvent('shapeUpdated', { detail: { shapeType } });
        this.dispatchEvent(event);
    }
}