// External Module
interface Square {
    shapeType: 'square';
    size: number;
}

export interface Circle {
    shapeType: 'circle';
    radius: number;
}

type Shape = Square | Circle;

export function calculateArea(s: Shape) {
    switch (s.shapeType) {
        case 'square': return s.size * s.size;
        case 'circle': return Math.PI * s.radius ** 2;
    }

    // `s` is never type.
    console.warn('Unsupported type', s);
    return 0;
}