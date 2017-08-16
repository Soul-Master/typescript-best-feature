/*
    compilerOptions.module: "es2015"
    Allow us to import other TypeScript without extension
*/
import { calculateArea, Circle } from './control-flow-analysis';

// Structural typing (same structure)

calculateArea({ shapeType: 'circle', radius: 5 });
calculateArea({ shapeType: 'square', size: 5 });

// Error: Cannot assign to `Shape` type
calculateArea({ shapeType: 'polygon', size: '200,10 250,190 160,210' });

class MyCircle1 {
    readonly shapeType = 'circle';
    radius = 5;
    message = '...';
}

// OK
calculateArea(new MyCircle1());

// Nominal Typing (same name)
class MyCircle2 implements Circle {
    readonly shapeType = 'circle';
    radius = 5;
}

// OK
calculateArea(new MyCircle2());
