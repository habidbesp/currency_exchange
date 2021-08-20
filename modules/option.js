import { select1, select2 } from './variables.js';

async function createInputOption() {
    const response = await fetch('./modules/data.json');
    const currencyNames = await response.json();

    currencyNames.rows.forEach(item => {
        const option1 = document.createElement('option');
        option1.value = item.code;
        // option1.value = option1.value.toLowerCase();
        option1.innerText = `${item.name}  (${item.code})`;
        const option2 = option1.cloneNode(true);

        select1.appendChild(option1);
        select2.appendChild(option2);
    });
};

createInputOption();