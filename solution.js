let usdRd = document.getElementById('usd');
let gbpRd = document.getElementById('gbp');
let eurRd = document.getElementById('eur');
let cnyRd = document.getElementById('cny');
let aedRd = document.getElementById('aed');
let curTo = document.getElementById('cur-to');
let inrTo = document.getElementById('inr');
let currency = document.getElementById('currency')


function convert(){
    console.log("done");

    if(usdRd.checked == true){
        inrTo.value= curTo.value*73.4;
        currency.innerHTML = "USD";
    }
    else if(gbpRd.checked == true){
        inrTo.value= curTo.value*101.23;
        currency.innerHTML = "GBP";

    }
    else if(eurRd.checked == true){
        inrTo.value= curTo.value*86.97;
        currency.innerHTML = "EUR";
    }
    else if(cnyRd.checked == true){
        inrTo.value= curTo.value*11.35;
        currency.innerHTML = "CNY";

    }
    else if(aedRd.checked == true){
        inrTo.value= curTo.value*19.98;
        currency.innerHTML = "AED";

    }
    else{
        alert('Please select a currency to convert')
    }
};
