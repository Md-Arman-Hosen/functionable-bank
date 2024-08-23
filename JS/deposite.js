// For Deposite
document.getElementById('btn-deposite').addEventListener('click', function () {
    
    // Step-1: Get Deposite field, total and balance total amount using common function
    const newDepositInputFieldAmount = getInputFieldValueById('deposit-field');
    const previousdepositTextElementAmount = getTextElementValueById('deposit-total');
    const previousBalanceTotalAmount = getTextElementValueById('balance-total');

    // Step-2: Calculate Deposite total and balance total amount
    const newDepositeTextElementValue = previousdepositTextElementAmount + newDepositInputFieldAmount;
    const newBalanceTotalAmount = previousBalanceTotalAmount + newDepositInputFieldAmount
    
    // Step-3: set Deposite total and balance total amount using common function
    setTextElementValueById('deposit-total',newDepositeTextElementValue);
    setTextElementValueById('balance-total', newBalanceTotalAmount);


})

