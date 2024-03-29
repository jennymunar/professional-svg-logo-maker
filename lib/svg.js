class SVG {
    constructor (){
        this.textElement = "";
        this.shapeElement = "";

    }
    //to render the svg image
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`

    }
    setText(message,color){
        this.textElement = `<text x="150" y="125" font-size="45" text-anchor="middle" fill="${color}">${message}</text>`
    
    }
    setShape(shape){
        this.shapeElement = shape.render()
    }
}
//to export the svg class so it can be use by modules
module.exports = SVG;