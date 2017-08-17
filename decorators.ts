// This feature requires `experimentalDecorators` option in `tsconfig.json`

type attrConstraintType<T> = Constructor<T> & attrConstraintTypeMetadata;

interface Constructor<T> {
  new(): T;
}

interface attrConstraintTypeMetadata {
  isAttr1Registered?: boolean;
}

function attrConstraint<T>(classConstructor: attrConstraintType<T>) {
  classConstructor.isAttr1Registered = true;
}

@attrConstraint
class Foo {
}

console.log(Foo);

// Error.
console.log(Foo.isAttr1Registered);