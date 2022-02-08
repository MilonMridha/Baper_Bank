document.getElementById('deposit-button').addEventListener('click', function () {
   const depositInput = document.getElementById('deposit-input');
   const newdepositAmountText = depositInput.value;
   const newdepositAmont = parseFloat(newdepositAmountText);

// update deposit total
   const depositTotal = document.getElementById('deposit-total');

   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);

   const updateDepositTotal = previousDepositAmount + newdepositAmont;
   depositTotal.innerText = updateDepositTotal;

   // update account balance
   const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText = parseFloat(balanceTotal.innerText);

const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newdepositAmont;

balanceTotal.innerText = newBalanceTotal;


// clear the input value
   depositInput.value = '';
})

//Handle withdraw event handler------------------------------
//----------------------------------------------------------
document.getElementById('withdraw-button').addEventListener('click', function () {
// console.log('withdraw clicked');
const withdrawInput = document.getElementById('withdraw-input'); 
//console.log(withdrawInput);
const withdrawAmountText = withdrawInput.value;
// console.log(withdrawAmountText);
const newWithdrawAmount = parseFloat(withdrawAmountText);
// console.log(newWithdrawAmount);

//set withdraw Total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;

//Update balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

balanceTotal.innerText = newBalanceTotal;




// clear input withdraw value
withdrawInput.value = '';


})

