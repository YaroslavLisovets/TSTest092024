import type {Shape} from '../interfaces/Shape';
import {ShapeEventManager} from "../EventManager.ts";

/**
 * Represents a circle shape.
 * Inherits event dispatch functionality from ShapeEventManager.
 *
 * @implements {Shape}
 */
export class Circle extends ShapeEventManager implements Shape {
    /**
     * The radius of the circle.
     *
     * @type {number}
     */
    public radius: number;

    /**
     * Creates a new Circle instance.
     * Dispatches a "shape created" event upon creation.
     *
     * @param {number} radius - The radius of the circle.
     */
    constructor(radius: number) {
        super();
        this.radius = radius;
        this.dispatchShapeCreatedEvent('Circle');
    }

    /**
     * Updates the radius of the circle and dispatches a "shape updated" event.
     *
     * @param {number} radius - The new radius of the circle.
     */
    update(radius: number) {
        this.radius = radius;
        this.dispatchShapeUpdatedEvent('Circle');
    }

    /**
     * Calculates the area of the circle.
     *
     * @returns {number} The area of the circle
     */
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * Calculates the perimeter of the circle.
     *
     * @returns {number} The perimeter of the circle
     */
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    /**
     * Calculates the diameter of the circle.
     *
     * @returns {number} The diameter of the circle
     */
    getDiameter(): number {
        return 2 * this.radius;
    }
}
