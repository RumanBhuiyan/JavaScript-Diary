class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    setLength=(length)=>{
        this.length = length;
    }
    setWidth = (width) => {
        this.width = width;
    }
    getArea=()=> {
        return this.length * this.width;
    }
    getPerimeter = () => {
        return 2*(this.length +  this.width)
    }
}

first_rectangle = new Rectangle(2, 3)
console.log(`Area is ${first_rectangle.getArea()}`)
console.log(`Perimeter is ${first_rectangle.getPerimeter()}`);

first_rectangle.setLength(8)
first_rectangle.setWidth(9)
console.log(`Area is ${first_rectangle.getArea()}`);
console.log(`Perimeter is ${first_rectangle.getPerimeter()}`);