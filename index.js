// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
const fs=require("fs")
const path=require("path")


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt([     
{
type: "input",
name:"title",
message:"what is the name of your project?",

},
{
    type: "input",
    name:"description",
    message:"what does your project do?",
    
    },

    {
        type: "input",
        name:"installation",
        message:"what intalls does youre project require?",
        
        },
        {
            type: "input",
            name:"usage",
            message:"Please enter instructions for use",
            
            },
            {
                type: "list",
                name:"license",
                message:"what license is the project registured under?",
                choices:["Apache","Mozilla","MIT","ISC","No License"]
                
                },
                {
                    type: "input",
                    name:"contributing",
                    message:"Please list any contributing partys",
                    
                    },
                    {
                        type: "input",
                        name:"tests",
                        message:"Please add any test instructions?",
                
                        },
                        
                        {
                            type: "input",
                            name:"email",
                            message:"Please add email for contact or questions",
                            
                            },
                            {
                                type: "input",
                                name:"github",
                                message:"Please add github user name",
                                
                                }





]).then(data=>{
    fs.writeFileSync("README.md",generateMarkdown(data))
})


}

// Function call to initialize app
init();
