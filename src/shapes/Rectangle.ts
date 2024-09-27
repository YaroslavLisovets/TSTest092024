import type { Shape } from '../interfaces/Shape';
import { ShapeEventManager } from "../EventManager.ts";

/**
 * Represents a rectangle shape.
 * Inherits event dispatch functionality from ShapeEventManager.
 *
 * @implements {Shape}
 */
export class Rectangle extends ShapeEventManager implements Shape {
    /**
     * Creates a new Rectangle instance.
     * Dispatches a "shape created" event upon creation.
     *
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    constructor(public width: number, public height: number) {
        super();
        this.dispatchShapeCreatedEvent('Rectangle');
    }

    /**
     * Updates the dimensions of the rectangle and dispatches a "shape updated" event.
     *
     * @param {number} width - The new width of the rectangle.
     * @param {number} height - The new height of the rectangle.
     */
    update(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.dispatchShapeUpdatedEvent('Rectangle');
    }

    /**
     * Calculates the area of the rectangle.
     *
     * @returns {number} The area of the rectangle (width * height).
     */
    getArea(): number {
        return this.width * this.height;
    }

    /**
     * Calculates the perimeter of the rectangle.
     *
     * @returns {number} The perimeter of the rectangle (2 * (width + height)).
     */
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
