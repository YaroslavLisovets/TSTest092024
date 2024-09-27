import type { Shape } from '../interfaces/Shape';
import { ShapeEventManager } from "../EventManager.ts";

/**
 * Represents a triangle shape.
 * Inherits event dispatch functionality from ShapeEventManager.
 *
 * @implements {Shape}
 */
export class Triangle extends ShapeEventManager implements Shape {
    /**
     * The length of side A of the triangle.
     * @type {number}
     */
    public sideA: number;

    /**
     * The length of side B of the triangle.
     * @type {number}
     */
    public sideB: number;

    /**
     * The length of side C of the triangle.
     * @type {number}
     */
    public sideC: number;

    /**
     * Creates a new Triangle instance.
     *
     * @param {number} sideA - The length of side A.
     * @param {number} sideB - The length of side B.
     * @param {number} sideC - The length of side C.
     */
    constructor(sideA: number, sideB: number, sideC: number) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    /**
     * Updates the lengths of the triangle's sides and dispatches a "shape updated" event.
     *
     * @param {number} sideA - The new length of side A.
     * @param {number} sideB - The new length of side B.
     * @param {number} sideC - The new length of side C.
     */
    update(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.dispatchShapeUpdatedEvent('Triangle');
    }

    /**
     * Calculates the area of the triangle.
     *
     * @returns {number} The area of the triangle.
     */
    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    /**
     * Calculates the perimeter of the triangle.
     *
     * @returns {number} The perimeter of the triangle.
     */
    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }
}
