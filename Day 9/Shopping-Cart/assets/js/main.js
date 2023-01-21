function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //Total updated
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //Total Calculated
    calculateTotal();
};

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1910;
    const caseTotal = getInputValue('case') *  49;
    const subTotal = phoneTotal +caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // Html gets updated
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};

// Event Handler of Phone Price Increase And Decrease
document.getElementById('phone-plus').addEventListener('click', function (){
    updateProductNumber('phone', 1910, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1910, false);
});

// Event Handler of Case Price Increase And Decrease
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 49, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 49, false);
});