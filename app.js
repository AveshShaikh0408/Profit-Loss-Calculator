'use strict';

// Selecting Elements
const initCostEL = document.getElementById('initial-cost');
const stockCountEL = document.getElementById('stock-count');
const currentCostEL = document.getElementById('current-cost');
const submitBtn = document.querySelector('.btn');
const outputBoxEl = document.getElementById('output-box');


// Submit Button with function submitHandler()
submitBtn.addEventListener('click', submitHandler);

// Submit Button and Calculation Login 
function submitHandler() {

    // Fething values from Inputs
    const initial = Number(initCostEL.value);
    const quantity = Number(stockCountEL.value);
    const current = Number(currentCostEL.value);

    // calling calculateProfitOrLoss() Function
    calculateProfitOrLoss(initial, quantity, current);
}

// Calculate - Profit and Loss
function calculateProfitOrLoss(initial, quantity, current) {
    // Loss Condition
    if (initial > current) {
        // Loss and Loss_per Calculation
        let loss = (initial - current) * quantity;
        let loss_per = (loss / (initial * quantity)) * 100;

        // Setting up message to Output-Box
        outputBoxEl.style.color = 'red';
        outputBoxEl.textContent = `Oops!! 😵, Your Loss is ${loss}/- and Loss percentage is ${loss_per}%`;

    } else if (initial < current) {

        // Profit and Profit_per Calculation
        let profit = (current - initial) * quantity;
        let profit_per = (profit / (initial * quantity)) * 100;

        // Setting up message to Output-Box
        outputBoxEl.style.color = '#00b300';
        outputBoxEl.textContent = `Yay 🤩, Your Profit is ${profit.toFixed(2)}/- and Profit percentage is ${profit_per.toFixed(2)}%`;;

    } else {
        // Setting up message to Output-Box
        outputBoxEl.style.color = 'white';
        outputBoxEl.textContent = 'No Gain, No Loss 🤓';
    }
}



