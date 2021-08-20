import { btn, resultInp,numberInp, select1, select2 } from './variables.js';

btn.addEventListener('click', () => {
    async function result() {
        try{
            const response = await fetch(`https://api.cryptonator.com/api/ticker/${select1.value}-${select2.value}`);
            const currencies = await response.json();
        
            if(currencies.success === false){
                resultInp.style.color = "red";
                resultInp.style.fontWeight = 'bold';
                resultInp.value = currencies.error;
            }
            else {
                resultInp.style.color = "#212529";
                resultInp.value = (numberInp.value * currencies.ticker.price).toFixed(2);
            };
        }
        catch(err){
            console.log(err);
        }
        
    };
    result();
});

