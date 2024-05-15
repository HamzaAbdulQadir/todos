import inquirer from "inquirer"

let todos = []
let todosCondition = true
while(todosCondition)
{let getTodes = await inquirer.prompt([{
    name: "firstquestion",
    type: "input",
    message: "what would you like to add in your todos?"
},{
    name: "secondquestion",
    type:"confirm",
    message:"would you like to add more in your todos?",
    default: "true"
}])

todos.push(getTodes.firstquestion)
console.log(todos)
todosCondition = getTodes.secondquestion
}