// CIT 281 Project 6
// Author: Tyler Startin

// Shape class
class Shape {
  constructor (sides = []) {
    this.sides = sides
  }
  // Returns the sum of all sides or 0 if no values
  perimeter () {
    return this.sides ? this.sides.reduce((a, b) => a + b, 0) : 0
  }
}

// console.log(`base shape`)
// console.log(new Shape([5, 10]).perimeter()) // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()) // 15
// console.log(new Shape().perimeter()) // 0

// Rectangle class
class Rectangle extends Shape {
  constructor (length = 0, width = 0) {
    super([length, width, length, width])
    this.length = length
    this.width = width
    this.square = this.length === this.width
  }
  // Returns the area of a rectangle if length and width are provided, else 0
  area () {
    return this.length && this.width ? this.length * this.width : 0
  }
}
// console.log(`rectangle`)
// console.log(new Rectangle(4, 4).perimeter()) // 16
// console.log(new Rectangle(4, 4).area()) // 16
// console.log(new Rectangle(5, 5).perimeter()) // 20
// console.log(new Rectangle(5, 5).area()) // 25
// console.log(new Rectangle().perimeter()) // 0
// console.log(new Rectangle().area()) // 0

// Triangle class
class Triangle extends Shape {
  constructor (sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC])
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  // Claculate s
  heron () {
    return this.sideA && this.sideB && this.sideC
      ? (this.sideA + this.sideB + this.sideC) / 2
      : 0
  }
  // Calculate area of a triangle using herons formula
  area () {
    const s = this.heron()
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  }
}

// console.log(`triangle`)
// console.log(new Triangle(3, 4, 5).perimeter()) // 12
// console.log(new Triangle(3, 4, 5).area()) // 6
// console.log(new Triangle().perimeter()) // 0
// console.log(new Triangle().area()) // 0

// Array of sides arrays
const data = [[3, 4], [5, 5], [3, 4, 5], [10], []]

// Process through the data array of arrays
for (const sides of data) {
  let shape = null

  switch (sides.length) {
    // If sides = 0, unsupported
    case 0:
      shape = new Shape(...sides)
      console.log(`Shape with ${sides.length} sides is unsupported`)
      break
    // If sides = 1, unsupported
    case 1:
      shape = new Shape(...sides)
      console.log(`Shape with ${sides.length} side is unsupported`)
      break
    // If sides = 2, check if square, else print rectangle
    case 2:
      shape = new Rectangle(...sides)
      if (shape.square) {
        console.log(
          `Square with sides ${sides} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`
        )
      } else {
        console.log(
          `${
            shape.constructor.name
          } with sides ${sides} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`
        )
      }
      break
    // If sides = 3, triangle
    case 3:
      shape = new Triangle(...sides)
      console.log(
        `${
          shape.constructor.name
        } with sides ${sides} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`
      )
      break
    default:
      break
  }
}
