"use strict"
document.addEventListener("DOMContentLoaded",() => {
    console.log(1);
    const display = document.querySelector("#display"),
          nums = document.querySelectorAll(".num"),
          operators = document.querySelectorAll(".operator"),
          clearAll = document.querySelector('.clear'),
          clearOne = document.querySelector(".clear_one"),
          equal = document.querySelector(".equal");

    let value,
        operator;

    const toRight = (x,y) => {
        return x*10 + y;
    }
    const toLeft = x => {
        return Math.floor(x/10);
    }
    const plus = (x,y) => {
        return x+y;
    }
    const minus = (x,y) => {
        return x-y;
    }
    const multiply = (x,y) => {
        return x*y;
    }
    const division = (x,y) => {
        return x/y;
    }

    clearOne.addEventListener("click",() => {
        display.textContent = toLeft(+display.textContent);
    });

    clearAll.addEventListener('click',() => {
        display.textContent = "0";
        value = 0;
        operator = '';
    });
    
    console.log(1);
    
    nums.forEach((item) => {
        item.addEventListener("click", () => {
            let intNum = display.textContent;
            
            for(let w = 0;w<4;w++){
                if(intNum == operators[w].textContent){
                    intNum = 0;
                    break;
                }
            }
            display.textContent = toRight(+intNum,+item.textContent);
        });
    });
    operators.forEach((a) => {
        a.addEventListener('click',() => {
            value = +display.textContent;
            operator = a.textContent;
            display.textContent = a.textContent;
        });
    });

    const calculate = (fValue,sValue,operator) => {
        switch (operator){
            case '+':
                return plus(fValue,sValue);
                break;
            case '-':
                return minus(fValue,sValue);
                break;
            case 'x':
                return multiply(fValue,sValue);
                break;
            case '/':
                return division(fValue,sValue);
                break;
            default:
                console.log("error");
        }
    }

    equal.addEventListener("click", () => {
        display.textContent = calculate(value,+display.textContent,operator);
    });
});