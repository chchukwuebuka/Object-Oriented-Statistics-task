class Laptop {
    constructor (_width, _height, _color ) {

        console.log('Laptop is being created');

        this.width = _width;
        this.height = _height;
        this.color = _color
    };
     // instance method
    getArea () {
        return this.color;
    };

    printDescription () {
        console.log(`My laptop ${this.width} x ${this.height} and it is ${this.color} in color`)
    };

    // statics
      static isValid (width, height, color) {
       // return width === height; this is True
        return width * height === color; //  while this is False
      };
};

let myLaptop1 = new Laptop(3, 5, 'arsh');
let myLaptop2 = new Laptop(5, 8, 'black');

console.log(myLaptop1.getArea());
console.log(myLaptop2.getArea());

myLaptop1.printDescription();
myLaptop2.printDescription();

console.log(Laptop.isValid(10, 10));