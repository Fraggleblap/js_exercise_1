let input1;
let input2;
let operator = "placeholder"
let equation = "";

function setInput(input) {
    if (input === 'input1') {
        input1 = Number(window.prompt("Set input value:", ""));
        document.getElementById("input1Box").innerHTML = "Input 1:" + input1;
    } else {
        input2 = Number(window.prompt("Set input value:", ""));
        document.getElementById("input2Box").innerHTML = "Input 2:" + input2;
    }
}

function onSelect(operatorValue) {
    operator = operatorValue;
}

function inputButtonClicked(button) {
    document.getElementById(button).style.backgroundColor = "#50cd1a";
}

function calculate() {
    if (!isNaN(input1) && !isNaN(input2) && operator !== "placeholder") {
        console.log("Input 1:" + input1);
        console.log("Input 2:" + input2);
        console.log("Operation:" + operator);
        switch (operator) {
            case "addition":
                equation = (input1 + " + " + input2 + " = " + (input1 + input2))
                break;
            case "subtraction":
                equation = (input1 + " - " + input2 + " = " + (input1 - input2))
                break;
            case "multiplication":
                equation = (input1 + " x " + input2 + " = " + (input1 * input2))
                break;
            case "division":
                equation = (input1 + " / " + input2 + " = " + (input1 / input2))
                break;
            default:
                console.log("This shouldn't happen");
                break;
        }
        document.open();
        console.log(equation);
        document.write(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator</title>
            <link rel="stylesheet" href="stylesheet.css">
        </head>

        <body>
        <section class="inputSection">
            <h2>Basic Calculator</h2>
            <h2>Input:</h2>
            <button id="input1Button" onclick="setInput('input1'), inputButtonClicked('input1Button')">Input 1</button><br>
            <button id="input2Button" onclick="setInput('input2'), inputButtonClicked('input2Button')">Input 2</button><br>
            <p id="input1Box">Input 1:</p>
            <p id="input2Box">Input 2:</p>
            <h2>Select Operation</h2>
            <select id="operationChoice" required onchange="onSelect(value)">
                <option value="placeholder"> </option>
                <option value="addition">+</option>
                <option value="subtraction">-</option>
                <option value="multiplication">*</option>
                <option value="division">/</option>
            </select>
            <br>
            <button id="calculateButton" onclick="calculate()">Calculate</button>
            <p>Equation: ${equation} </p>
        </section>
        </body>`);
        document.close();
        input1 = undefined;
        input2 = undefined;
        operator = "placeholder";
        equation = "";
    } else if (isNaN(input1) || isNaN(input2)) {
        alert("Please check your inputs!  One or more is not a valid value!");
    } else if (operator === "placeholder") {
        alert("That's not a valid operation!");
    }
}

function easterEgg(min, max) {
    let chance = Math.round(Math.random() * (max - min) + min);
    if (chance === 4) {
        document.getElementById("inputSection").style.backgroundColor = "hotpink"
    }
    return console.log(chance);
}

//copyright Owen Gaffney 2024 All Rights Reserved