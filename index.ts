import inquirer from "inquirer"

async function calculator() {
    let user = await inquirer.prompt([
        {
            type: 'number',
            hello: 'Firstnumber',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'Secondnumber',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select the operator:',
            choices: ['+', '-', '*', '/']
        },
    ])

    let FirstNumber = user.Firstnumber
    let SecondNumber = user.Secondnumber

    if (user.operator === '+') {
        console.log('The answer is: ' + (FirstNumber + SecondNumber))
    } else if (user.operator === '-') {
        console.log('The answer is: ' + (FirstNumber - SecondNumber))
    } else if (user.operator === '*') {
        console.log('The answer is: ' + (FirstNumber * SecondNumber))
    } else if (user.operator === '/') {
        if (SecondNumber === 0) {
            console.log('Cannot divide by zero')
        } else {
            console.log('The answer is: ' + (FirstNumber / SecondNumber))
        }
    }
}

calculator()