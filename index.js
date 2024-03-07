const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');
const questions = [
        {
            type: 'input',
            message: 'Type the text for your code up to three characters:',
            name: 'text',
            default: 'svg'
        },
        {
            type: 'input',
            message: 'Color for your text:',
            name: 'textColor',
        },
        {
            type: 'checkbox',
            message: 'Select a shape from the following list:',
            name: 'shape',
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: 'input',
            message: 'Color for your shape:',
            name: 'shapeColor',
        },
    ];

    inquirer.prompt(questions).then(({text, textColor, shape, shapeColor}) => {
          switch (shape[0]) {
          case 'Triangle':
            shape = new Triangle();
            break;
          case 'Circle':
            shape = new Circle();
            break;
          default:
            shape = new Square();
            break;
        
        }
      shape.setColor(shapeColor)
      const svg = new SVG()
      svg.setText(text, textColor)
      svg.setShape(shape)
      return writeFile("./examples/logo.svg", svg.render())
      
      })
      .then(() => console.log("Generated logo.svg"))