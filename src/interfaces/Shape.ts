import {ShapeEventManager} from "../EventManager.ts";

export interface Shape extends ShapeEventManager {
    getArea(): number;

    getPerimeter(): number;

    update(...args: any[]): void;
}