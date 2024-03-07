//base class for my shapes
class Shape {
    constructor() {
      this.color = '';
    }
    setColor(color){
      this.color = color;
    }
  
    // render() {
    //   return `<rect fill="${this.color}" />`;
    // }
  }
  //sublass for triangle, inherits from shape
  class Triangle extends Shape {
    render() {
      return `<polygon fill="${this.color}" points="150,18 244, 182 56, 182" />`;
    }
  }
   //sublass for circle, inherits from shape
  class Circle extends Shape {
    render() {
      return `<circle fill="${this.color}" cx="150" cy="100" r="80" />`;
    }
  }
  //sublass for square, inherits from shape
  class Square extends Shape {
    render() {
      return `<rect width="120" height="120" x="90" y="40" fill="${this.color}" />`;
    }
  }
  //this will export the shape class for use in other modules
  module.exports = {
    Triangle,
    Circle,
    Square,
  };