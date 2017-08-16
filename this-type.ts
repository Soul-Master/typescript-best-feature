// Implicit Module
interface Item {
    name: string;
}

function thisTypeFunction(this: Item) {
    console.log(this.name);
}

var myItem = <Item>{ name: 'test' };

thisTypeFunction.apply(myItem);