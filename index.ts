#! /usr/bin/env node
import inquirer from "inquirer"

let todos = [];
let condition = true;


while (condition){

    //---------------------- options ------------------------
    let option = await inquirer.prompt([
        {
            type: "list",
            name: "user_option",
            message: "Select an option",
            choices: ["Add", "Remove"]
        }
    ]);

     //------------------------ Add ---------------------------
     if (option.user_option === "Add"){
        let ans = await inquirer.prompt([
            {
                type: "input",
                name: "usr_ans",
                message: "Write to add: "
            }
        ]);
         if (ans.usr_ans !== ''){
            todos.push(ans.usr_ans);
            console.log(todos);
         }else{
            console.log("Please write something to add to the list.");
         }
        
     }
    // --------------------------- Remove ----------------------------
     else if(option.user_option === "Remove"){
        let removeChoice = await inquirer.prompt([
            {
                type: "list",
                name: "remove_item",
                message: "Select to remove: ",
                choices: todos
            }
        ]);

        let index_to_remove =  todos.indexOf(removeChoice.remove_item);

        if(index_to_remove >= 0){
            todos.splice(index_to_remove, 1);
            console.log("You just removed: " + removeChoice.remove_item);
            console.log(todos);
        }     

     }

     //--------------------------- Confirm ---------------------------------------
     let user_ans = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: "Wanna continue?",
            default: true
        }
     ]);

     if(user_ans.selection === false){
        condition = false;
     }

}

console.log(`\nThank you for using To-do List...!`);