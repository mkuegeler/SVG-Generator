/*
# abstract.ts
A collection of geometrical data types
==============================================================
Author: Michael Kuegeler
Email: mkuegeler@mac.com
Date: 30.5.2021
==============================================================
## About
This script comprises a collection of data types, related to generic two-dimensional geometries.
The intend is to provide a set of data types which facilitate the creation of parametric graphics.
The script is structured into these sections:

## Section 1: Essential data types
## Section 2: Composite data types

==============================================================
# Section 1: Essential data types
==============================================================
*/



// Point
// Abstract point definition. Fields: x,y,z coordinates

export interface Point {
    x: number;
    y: number;
    z: number
}

export class AbstractPoint implements Point {
    x: number;
    y: number;
    z: number;
    el: object;
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.el = { "x": this.x, "y": this.y, "z": this.z };
    }
}

export const PointDefault: Point = {
    x: 0,
    y: 0,
    z: 0
}

// Line
// Abstract line definition.
// fields: start and end point (type of point is previously defined Point)

export interface Line {
    p1:Point,
    p2:Point 
}

export class AbstractLine implements Line {
    p1: Point;
    p2: Point;
    el: object;
    constructor (p1: Point = PointDefault, p2: Point = PointDefault) {
        this.p1 = p1;
        this.p2 = p2;
        this.el = {"p1": this.p1, "p2": this.p2};
    }
}