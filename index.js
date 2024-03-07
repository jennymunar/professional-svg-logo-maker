// to import the modules
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');

//array of questioons for the user
const questions = [
        {
            type: 'input',
            message: 'Type the text for your code up to three characters:',
            name: 'text',
            //default value for the text so user can get an idea
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

//take the chosend shape and creates it
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

      //to create a new svg object
      const svg = new SVG()
      svg.setText(text, textColor)
      svg.setShape(shape)
      return writeFile("./examples/logo.svg", svg.render())
      
      })
      //to log success mesage after the file is generated
      .then(() => console.log("Generated logo.svg"))