import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput = document.querySelector('.price-filter');
    const priceValue = document.querySelector('.price-value');

    //setup filter
    let maxPrice = Math.max(...store.map(product =>product.price));
    maxPrice = Math.ceil(maxPrice/100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value : $${maxPrice}`;
    priceInput.addEventListener('input',e=>{
        const value = parseInt(priceInput.value);
        priceValue.textContent = `Value : $${value}`;
        let newStore = store.filter(product => product.price/100 <= value);
        display(newStore, document.querySelector('.products-container'));
        if(newStore.length < 1){
            const products = document.querySelector('.products-container');
            products.innerHTML = `<h3 class="filter-error">Soory, no products match your search </h3>`
        }
    });
};

export default setupPrice;
