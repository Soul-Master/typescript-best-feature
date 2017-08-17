define(["require", "exports", "./control-flow-analysis"], function (require, exports, control_flow_analysis_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Structural typing (same structure)
    control_flow_analysis_1.calculateArea({ shapeType: 'circle', radius: 5 });
    control_flow_analysis_1.calculateArea({ shapeType: 'square', size: 5 });
    // Error: Cannot assign to `Shape` type
    control_flow_analysis_1.calculateArea({ shapeType: 'polygon', size: '200,10 250,190 160,210' });
    class MyCircle1 {
        constructor() {
            this.shapeType = 'circle';
            this.radius = 5;
            this.message = '...';
        }
    }
    // OK
    control_flow_analysis_1.calculateArea(new MyCircle1());
    // Nominal Typing (same name)
    class MyCircle2 {
        constructor() {
            this.shapeType = 'circle';
            this.radius = 5;
        }
    }
    // OK
    control_flow_analysis_1.calculateArea(new MyCircle2());
});
