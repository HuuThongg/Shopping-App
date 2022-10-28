import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const form = document.querySelector('.input-form');
    const nameInput = document.querySelector('.search-input');
    form.addEventListener('keyup',()=>{
        const value = nameInput.value;
        if(value){
            const newStore = store.filter((product)=>{
                let {name} = product;
                name = name.toLowerCase();
                if(name.startsWith(value)) 
                    return product;
            });
            display(newStore, document.querySelector('.products-container'));
            if(newStore.length < 1){
                const products = document.querySelector('.products-container');
                products.innerHTML = `<h3 class="filter-error">Soory, no products match your search </h3>`
            }
        }
        else{
            display(store, document.querySelector('.products-container'));
        }

    })
};

export default setupSearch;
