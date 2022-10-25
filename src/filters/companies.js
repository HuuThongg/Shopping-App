import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    // let companies = store.map(product => product.company);
    // companies =new Set(companies);
    // let e = document.querySelector('.companies');
    // // console.log(e);
    // companies.forEach(company => {
    //     let textInserted = `<button class="company-btn">${company}</button>`
    //     e.insertAdjacentHTML('beforeend',textInserted)
    // });

    let companies = ['all', ... new Set(store.map(product => product.company))];

    const companiesDOM =  document.querySelector('.companies');
    companiesDOM.innerHTML = companies.map((company) =>{
        return `<button class="company-btn">${company}</button>`;
    }).join('');   
    companiesDOM.addEventListener('click',e=>{
        const element = e.target;
        if(element.classList.contains('company-btn')){
            let newStore =[];
            if(element.textContent === 'all'){
                newStore = [...store];
            }
            else{
                newStore = store.filter(product=> product.company === element.textContent )
            }
            display(newStore,document.querySelector('.products-container'))
        }
    })
};


export default setupCompanies;
