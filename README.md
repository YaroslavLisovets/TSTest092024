
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
    - [Rectangle](#rectangle)
    - [Circle](#circle)
    - [Triangle](#triangle)
    - [CustomShape](#customshape)
- [Events](#events)


## Installation


```bash
npm install https://github.com/YaroslavLisovets/TSTest092024.git
```

## Usage
The library provides an easy-to-use API for creating and interacting with geometric shapes.

### Rectangle
```ts
import { Rectangle } from './src/shapes/Rectangle';

const rect = new Rectangle(10, 5);
console.log(rect.getArea());       // Output: 50
console.log(rect.getPerimeter());  // Output: 30
```

### Circle
```ts
import { Circle } from './src/shapes/Circle';

const circle = new Circle(5);
console.log(circle.getArea());     // Output: 78.53981633974483
console.log(circle.getPerimeter()); // Output: 31.41592653589793
console.log(circle.getDiameter());  // Output: 5.0
```

### Triangle
```ts
import { Triangle } from './src/shapes/Triangle';

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea());     // Output: 6.0
console.log(triangle.getPerimeter()); // Output: 9.0
```

### CustomShape
```ts
import { CustomShape } from './src/shapes/CustomShape';

const points = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10]
];
const customShape = new CustomShape(points);

console.log(customShape.getArea());     // Output: 40
console.log(customShape.getPerimeter()); // Output: 100
```

## Events
The library includes an event system that allows you to listen for events related to shapes.

### ShapeCreated
This event is emitted when a new shape is created.

#### Example
```ts
import {Rectangle} from './src/shapes/Rectangle';

const rect = new Rectangle(10, 5);

c.addEventListener('shapeCreated', ((e: CustomEvent) => {
  console.log('Shape created:', e.detail.shapeType);
}) as EventListener);
```

### ShapeUpdated
This event is emitted when a shape is updated.

#### Example
```ts
import { Rectangle } from './src/shapes/Rectangle';

const rect = new Rectangle(10, 5);

c.addEventListener('shapeUpdated', ((e: CustomEvent) => {
  console.log('Shape updated:', e.detail.shapeType);
}) as EventListener);

rect.update(20, 10);
```
