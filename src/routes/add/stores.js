import { writable } from "svelte/store";

export let purchase_items = createPurchaseItemsArr([]);

export function createPurchaseItemsArr(arrData) {
    let id = 1;
    const items = arrData;
	const { subscribe, update } = writable(items);
    

	return {
		subscribe,
		addItem: (data) =>{
            let item = {
                id:id++,
                title:data.title,
                price:data.price,
                hashtags:data.hashtags
            }
             update((items) => [...items,item]);
            },

		delItem: (id) =>{ 
          
            
            update((items) =>items.filter((t) => t.id != id))}
        }
}