// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = document.querySelector('.page-loading');
const centerDOM = document.querySelector('.single-product-center');
const pageTitleDOM = document.querySelector('.page-hero-title');
const imgDOM = document.querySelector('.single-product-img');
const titleDOM = document.querySelector('.single-product-title');
const companyDOM = document.querySelector('.single-product-company');
const priceDOM = document.querySelector('.single-product-price');
const colorsDOM = document.querySelector('.single-product-colors');
const descDOM = document.querySelector('.single-product-desc');
const cartBtn = document.querySelector('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function(){
    const urlID = this.window.location.search;
    // const urlID=`?21`;
    try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
        if(response.status >= 200 && response.status <= 299){
            const product = await response.json();
            // grab data
            const {id, fields:{name,company,price,colors,description}} = product;
            productID = id;
            let image = product.fields.image[0].thumbnails.large.url;
            document.title = `${name.toUpperCase()} | Comfy`;
            pageTitleDOM.textContent = `Home / ${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent =`by ${company}`;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;
            colors.forEach(color=>{
                const span = document.createElement('span');
                span.classList.add('product-color');
                span.style.backgroundColor =`${color}`;
                colorsDOM.appendChild(span);
            })

        }else{
            console.log(response.status, response.statusText);
            centerDOM.innerHTML = `
                <div>
                    <h3 class="error"> sorry, something went wrong</h3>
                    <a href="index.html">Back Home </a>
                </div>
            `;
        }
    } catch (error) {
        console.log(error);
    }

    

    loading.style.display = 'none';
})

cartBtn.addEventListener('click', ()=>{
    addToCart(productID);
})
