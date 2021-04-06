class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea = () => {
        return Math.PI*(this.radius)**2
    }
}
class Sphere extends Circle {
    constructor(radius) {
        super(radius);
    }
    getArea = () => {
        return 4 * Math.PI*(this.radius)**2;
    }
    getVolume = () => {
        return (4 / 3) *Math.PI*(this.radius)**3;
    }
}

circle = new Circle(5)
console.log(`Circles Ares : ${circle.getArea().toFixed(2)}`)

sphere = new Sphere(5)
console.log(`Surface Area of the Sphere is : ${sphere.getArea().toFixed(2)}`)
console.log(`volume of the Sphere is : ${sphere.getVolume().toFixed(2)}`);
