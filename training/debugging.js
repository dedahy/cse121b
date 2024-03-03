const PI = 3.14;
let radius = 0;
let area = 0;
area = radius * radius * PI;
console.log(area)
//radius = 4;
area = radius * radius * PI;
console.log(area)

function circule_area(radius)
        {
            const area = radius * PI;
            return area
        }

area = circule_area(3);

console.log("Area1:", area);

area = circule_area(4);

console.log("Area2:", area);