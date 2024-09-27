import type {Shape} from '../interfaces/Shape';
import {ShapeEventManager} from '../EventManager';


export type Point = [number, number];

/**
 * Represents a custom polygonal shape.
 * Inherits event dispatch functionality from ShapeEventManager.
 *
 * @implements {Shape}
 */
export class CustomShape extends ShapeEventManager implements Shape {
    /**
     * List of points representing the vertices of the shape.
     * @type {Point[]}
     * @private
     */
    private points: Point[];

    /**
     * Creates a new CustomShape instance.
     * Dispatches a "shape created" event upon creation.
     *
     * @param {Point[]} points - An array of points representing the vertices of the shape.
     */
    constructor(points: Point[]) {
        super();
        this.points = points;
        this.dispatchShapeCreatedEvent('CustomShape');
    }

    /**
     * Updates the shape with new points and dispatches a "shape updated" event.
     *
     * @param {Point[]} points - The new array of points representing the updated vertices.
     */
    update(points: Point[]) {
        this.points = points;
        this.dispatchShapeUpdatedEvent('CustomShape');
    }

    /**
     * Calculates the area of the polygon using the shoelace theorem.
     *
     * @returns {number} The area of the shape. Returns 0 if the shape has fewer than 3 points.
     */
    getArea(): number {
        const n = this.points.length;
        if (n < 3) return 0;

        let area = 0;
        for (let i = 0; i < n; i++) {
            const {0: x1, 1: y1} = this.points[i];
            const {0: x2, 1: y2} = this.points[(i + 1) % n];
            area += (x1 * y2 - x2 * y1);
        }
        return Math.abs(area / 2);
    }

    /**
     * Calculates the perimeter of the polygon.
     *
     * @returns {number} The perimeter of the shape. Returns 0 if the shape has fewer than 2 points.
     */
    getPerimeter(): number {
        const n = this.points.length;
        if (n < 2) return 0;

        let perimeter = 0;
        for (let i = 0; i < n; i++) {
            const {0: x1, 1: y1} = this.points[i];
            const {0: x2, 1: y2} = this.points[(i + 1) % n];
            perimeter += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        }
        return perimeter;
    }

    /**
     * Returns the points that define the shape.
     *
     * @returns {Point[]} An array of points representing the vertices of the shape.
     */
    getPoints(): Point[] {
        return this.points;
    }
}
