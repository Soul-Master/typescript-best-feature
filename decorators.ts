// This feature requires `experimentalDecorators` option in `tsconfig.json`

interface Constructor<T> {
  new(): T;
}

interface attrConstraintTypeMetadata {
  isAttr1Registered?: boolean;
}

type attrConstraintType<T> = Constructor<T> & attrConstraintTypeMetadata;

function attrConstraint<T>(classConstructor: attrConstraintType<T>) {
  classConstructor.isAttr1Registered = true;
}

@attrConstraint
class Foo {
}

interface Constructor<T> {
  properties?: string;
}

console.log(Foo);

// Error.
console.log(Foo.isAttr1Registered);

export { };