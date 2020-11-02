import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from "./interfaces/hasFormatter.js";
import { ListTemplate } from "./classes/listTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ulList = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ulList)

form.addEventListener('submit', (e:Event)=> {
    e.preventDefault();
    let doc: HasFormatter;
    
    let values: [string,string, number];
    values = [toFrom.value,details.value,amount.valueAsNumber]

    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    
    list.render(doc,type.value,'start');
}) 