// Internal Module (default)
interface AdvancedItem {
  name: string;
  description?: string;
}

// Explicitly set `this` type
function fooFunction(this: AdvancedItem) {
    console.log(this.name);
}

var myItem = <AdvancedItem>{ name: 'test' };
fooFunction.apply(myItem);

interface AdvancedObject {
  id: string;
}

// Type alias
type unionTypes = AdvancedItem | AdvancedObject;
type intersectionTypes = AdvancedItem & AdvancedObject;

// OK
let a: unionTypes = { name: 'test' };

// Error
let b: intersectionTypes = { name: 'test' };

// OK
let c: intersectionTypes = { name: 'test', id: '123' };