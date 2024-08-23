// For withdraw
document.getElementById('btn-withdraw').addEventListener('click',function (){
     
    const newWithdrawInputFieldAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTextElementAmount = getTextElementValueById('withdraw-total');
    const previousBalanceTotal =getTextElementValueById('balance-total')
    
        if (newWithdrawInputFieldAmount > previousBalanceTotal){
        alert('Can not withdraw more than you have in your account');
        return;
    }
    
    const newWithdrawTextElementValue = previousWithdrawTextElementAmount+ newWithdrawInputFieldAmount ;
    const newBalanceTotal = previousBalanceTotal - newWithdrawInputFieldAmount;


    setTextElementValueById('withdraw-total',newWithdrawTextElementValue);
    setTextElementValueById ('balance-total',newBalanceTotal); 

  })

document.getElementById ('btn-log-out').addEventListener('click', function(){

    window.location.href = 'index.html';
})