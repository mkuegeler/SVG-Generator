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
    p1: Point,
    p2: Point
}

export class AbstractLine implements Line {
    p1: Point;
    p2: Point;
    el: object;
    constructor(p1: Point = PointDefault, p2: Point = PointDefault) {
        this.p1 = p1;
        this.p2 = p2;
        this.el = { "p1": this.p1, "p2": this.p2 };
    }
}

// Rectangle
// Abstract rectangle definition.
export interface Rectangle {
    insert: Point,
    width: number,
    height: number
}

export class AbstractRectangle implements Rectangle {
    insert: Point;
    width: number;
    height: number;
    //  'start' indicates the location of insertion point
    // 0 = top left (default) 1 = top right, 2 = buttom right, 3 = buttom left, 4 = center
    start?: number;
    el:object;
    r: number; //maximum value of a radius within the rectangle, depends on width and height
    constructor(insert: Point = PointDefault, width: number = 100, height: number = 100, start: number = 0) {
        this.insert = insert;
        this.height = height;
        this.width = width;
        this.start = start;
        this.el = this.get_rectangle_points(insert,width,height);
        this.r = width >= height ? (height/2) : (width/2);
    }
    private get_rectangle_points(p0:Point,w:number,h:number) {
        
   // clock wise direction
    // p0 = top left (default)

     // mid top
    let p1 = new AbstractPoint((p0.x+(w/2)),p0.y).el; 

    // top right
    let p2 = new AbstractPoint((p0.x+w),p0.y).el; 

    // mid right
    let p3 = new AbstractPoint((p0.x+w),(p0.y+(h/2))).el; 
    
    // buttom right
    let p4 = new AbstractPoint((p0.x+w),(p0.y+h)).el; 
    
    // mid buttom
    let p5 = new AbstractPoint((p0.x+(w/2)),(p0.y+h)).el; 
    
    // buttom left
    let p6 = new AbstractPoint(p0.x,(p0.y+h)).el; 
    
    // mid left
    let p7 = new AbstractPoint(p0.x,(p0.y+(h/2))).el; 
    
    // center
    let p8 = new AbstractPoint((p0.x+(w/2)),(p0.y+(h/2))).el; 
    
    return {"tl":p0,"mt":p1,"tr":p2,"mr":p3,"br":p4,"mb":p5,"bl":p6,"ml":p7,"cp":p8};

    }
}