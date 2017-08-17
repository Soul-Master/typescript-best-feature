define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function calculateArea(s) {
        switch (s.shapeType) {
            case 'square': return s.size * s.size;
            case 'circle': return Math.PI * Math.pow(s.radius, 2);
        }
        // `s` is never type.
        console.warn('Unsupported type', s);
        return 0;
    }
    exports.calculateArea = calculateArea;
});
