import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
let purchase_items = createPurchaseItemsArr([]);
function createPurchaseItemsArr(arrData) {
  let id = 1;
  const items = arrData;
  const { subscribe: subscribe2, update } = writable(items);
  return {
    subscribe: subscribe2,
    addItem: (data) => {
      let item = {
        id: id++,
        title: data.title,
        price: data.price,
        hashtags: data.hashtags
      };
      update((items2) => [...items2, item]);
    },
    delItem: (id2) => {
      update((items2) => items2.filter((t) => t.id != id2));
    }
  };
}
const css$2 = {
  code: ':root{--maininput__suggest_bg:#dadada;--maininput__suggest_bg_hover:#e7faff;font-family:"Gilroy"}.main_input.svelte-184416t.svelte-184416t{width:fit-content;height:10vh;display:flex;justify-content:center;margin:auto;margin-top:2rem;position:relative}input.svelte-184416t.svelte-184416t{height:3.5rem;font-size:24px;filter:drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.1));padding-left:1.5rem}input#input_purchase.svelte-184416t.svelte-184416t{border-radius:10px 0 0 10px;width:30vw}input#input_price.svelte-184416t.svelte-184416t{border-radius:0 10px 10px 0;width:7rem}button.svelte-184416t.svelte-184416t{width:4rem;height:3.5rem;background-color:var(--add_button_bg_color);background-size:30%;background-repeat:no-repeat;background-position:center;background-image:url("src/lib/img/add-solid-white.png");border-radius:10px;filter:drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.14));margin-left:1rem;transition:background 0.3s ease-in-out}button.svelte-184416t.svelte-184416t:hover{background-color:var(--add_button_hover_bg_color)}ul#maininput__suggest.svelte-184416t.svelte-184416t{position:absolute;top:3.5rem;left:2rem;width:auto;max-width:30vw;height:fit-content;max-height:22vh;overflow-y:scroll;z-index:100;font-size:var(--main_font_size);border-radius:0 0 10px 10px;background:var(--maininput__suggest_bg)}ul#maininput__suggest.svelte-184416t li.svelte-184416t{padding:1rem 4rem;transition:background 0.2s ease-in-out}ul#maininput__suggest.svelte-184416t li.svelte-184416t:hover{cursor:pointer;background:var(--maininput__suggest_bg_hover)}',
  map: null
};
const MainInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let suggest;
  let $$unsubscribe_purchase_items;
  $$unsubscribe_purchase_items = subscribe(purchase_items, (value) => value);
  let purchase_name = "";
  let purchase_price = null;
  $$result.css.add(css$2);
  suggest = ["Молоко - 1.77", "Молоко - 1.77", "Молоко - 1.77", "Молоко - 1.77"];
  {
    if (purchase_name.length > 2) {
      suggest = ["Молоко - 1.77", "Творог - 1.77"];
    } else if (purchase_name.length < 2) {
      suggest = [];
    }
  }
  $$unsubscribe_purchase_items();
  return `<div class="main_input svelte-184416t"><input type="text" name="purchase" id="input_purchase" placeholder="Add your purchases" class="svelte-184416t"${add_attribute("value", purchase_name, 0)}> <input type="text" name="purchase_price" id="input_price" placeholder="Price" class="svelte-184416t"${add_attribute("value", purchase_price, 0)}> <button class="svelte-184416t"></button> <ul id="maininput__suggest" class="svelte-184416t">${each(suggest, (item) => {
    return `<li class="svelte-184416t">${escape(item)}</li>`;
  })}</ul> </div>`;
});
const css$1 = {
  code: ':root{--searchbar_button_bg_color:#3b3b3b;--card_bg_color:#f8f8f8;--add_button_bg_color:#3b3b3b;--add_button_hover_bg_color:#272727;--card_border_radius:10px;--main_font_size:24px;--item_hovered_bg_color:#023949;--item_hovered_del_bg_color:#49020e;font-family:"Gilroy"}#add__workspace.svelte-cvvwpr.svelte-cvvwpr.svelte-cvvwpr{width:100%;height:auto;display:flex;justify-content:space-between;padding:0 8%;font-size:var(--main_font_size)}#add__workspace.svelte-cvvwpr input.svelte-cvvwpr.svelte-cvvwpr{font-size:var(--main_font_size)}#add__workspace.svelte-cvvwpr #add__category.svelte-cvvwpr.svelte-cvvwpr{height:fit-content;width:20%;padding:3rem 2rem;background:var(--card_bg_color);border-radius:var(--card_border_radius);margin:0 2vw}#add__category.svelte-cvvwpr li.svelte-cvvwpr.svelte-cvvwpr{margin-top:0.5rem;display:flex;column-gap:0.5rem}#add__category.svelte-cvvwpr li input.svelte-cvvwpr.svelte-cvvwpr{opacity:0}#add__category.svelte-cvvwpr li label.svelte-cvvwpr.svelte-cvvwpr{position:relative}#add__category.svelte-cvvwpr li label.svelte-cvvwpr.svelte-cvvwpr::before,#add__category.svelte-cvvwpr li label.svelte-cvvwpr.svelte-cvvwpr::after{content:"";position:absolute;top:0;left:-2.5rem;width:2rem;height:24px;background-size:20px;background-position:center;background-repeat:no-repeat;transition:opacity 0.2s ease-in-out}#add__category.svelte-cvvwpr li label.svelte-cvvwpr.svelte-cvvwpr::before{background-image:url("/src/lib/img/square-check-regular.png")}#add__category.svelte-cvvwpr li label.svelte-cvvwpr.svelte-cvvwpr::after{background-image:url("/src/lib/img/square-check-solid-hover.png");opacity:0}#add__category.svelte-cvvwpr li input.svelte-cvvwpr:checked+label.svelte-cvvwpr::after{opacity:1}#add__category.svelte-cvvwpr li input.svelte-cvvwpr:checked+label.svelte-cvvwpr::before{opacity:0}#add__workspace.svelte-cvvwpr #add__items.svelte-cvvwpr.svelte-cvvwpr{width:50%;height:fit-content;display:flex;flex-wrap:wrap;justify-content:start;align-items:start;column-gap:3rem;row-gap:1rem}#add__items.svelte-cvvwpr .item.svelte-cvvwpr.svelte-cvvwpr{width:min-content;height:auto;min-width:15rem;max-width:20rem;padding:2rem;background:var(--card_bg_color);border-radius:var(--card_border_radius);position:relative;overflow:hidden}.item.svelte-cvvwpr:hover .hovered.svelte-cvvwpr.svelte-cvvwpr{top:0}.item.svelte-cvvwpr .face.svelte-cvvwpr.svelte-cvvwpr{display:flex;column-gap:2rem}.item.svelte-cvvwpr .hovered.svelte-cvvwpr.svelte-cvvwpr{display:flex;align-items:center;height:100%;position:absolute;top:-100%;left:0;transition:top 0.3s ease-in-out;background:var(--item_hovered_bg_color)}.hovered.svelte-cvvwpr input.svelte-cvvwpr.svelte-cvvwpr{background:rgba(0, 0, 0, 0);width:70%;height:min-content;color:white;font-weight:bold;margin-left:1rem;border-bottom:1px solid white}.hovered.svelte-cvvwpr input.svelte-cvvwpr.svelte-cvvwpr::placeholder{color:white}.item_delete.svelte-cvvwpr.svelte-cvvwpr.svelte-cvvwpr{width:30%;height:100%;background-color:rgba(0, 0, 0, 0);background-position:center;background-repeat:no-repeat;background-image:url("/src/lib/img/trash-solid.png")}.hovered.svelte-cvvwpr>.item_delete.svelte-cvvwpr.svelte-cvvwpr:hover{cursor:pointer}#add__items.svelte-cvvwpr .nothing_here.svelte-cvvwpr.svelte-cvvwpr{margin:2rem}#add__workspace.svelte-cvvwpr #add__others.svelte-cvvwpr.svelte-cvvwpr{margin:0 2vw;width:15%}#add__others.svelte-cvvwpr #date.svelte-cvvwpr.svelte-cvvwpr,#add__others.svelte-cvvwpr #market.svelte-cvvwpr.svelte-cvvwpr,#add__others.svelte-cvvwpr #commentary.svelte-cvvwpr.svelte-cvvwpr{background:var(--card_bg_color);border-radius:var(--card_border_radius);padding:1.5rem 0.5rem;display:flex;justify-content:center;align-items:center;margin-top:2rem}#add__others.svelte-cvvwpr #date input.svelte-cvvwpr.svelte-cvvwpr,#add__others.svelte-cvvwpr #market input.svelte-cvvwpr.svelte-cvvwpr,#add__others.svelte-cvvwpr #commentary textarea.svelte-cvvwpr.svelte-cvvwpr{background:var(--card_bg_color);width:90%;text-align:center}#add__others.svelte-cvvwpr #commentary textarea.svelte-cvvwpr.svelte-cvvwpr{min-width:90%;min-height:50px;max-height:150px;font-size:var(--main_font_size)}#add__others.svelte-cvvwpr #add_button.svelte-cvvwpr.svelte-cvvwpr{color:white;background:var(--add_button_bg_color);border-radius:var(--card_border_radius);padding:1.5rem 0.5rem;font-size:var(--main_font_size);width:100%;margin-top:3rem;transition:background 0.3s ease-in-out}#add__others.svelte-cvvwpr #add_button.svelte-cvvwpr.svelte-cvvwpr:hover{background:var(--add_button_hover_bg_color)}#add__others.svelte-cvvwpr #final_sum.svelte-cvvwpr.svelte-cvvwpr{text-align:center;font-size:30px;font-weight:bold;margin-top:4rem;display:flex;column-gap:1rem}#final_sum.svelte-cvvwpr input.svelte-cvvwpr.svelte-cvvwpr{width:10rem;background:rgba(0, 0, 0, 0);font-weight:bold}',
  map: null
};
const Workspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total_sum;
  let $purchase_items, $$unsubscribe_purchase_items;
  $$unsubscribe_purchase_items = subscribe(purchase_items, (value) => $purchase_items = value);
  $$result.css.add(css$1);
  total_sum = $purchase_items.reduce((total, item) => total + item.price, 0).toFixed(2);
  $$unsubscribe_purchase_items();
  return `<div id="add__workspace" class="svelte-cvvwpr"><ul id="add__category" class="svelte-cvvwpr" data-svelte-h="svelte-16qvx6d"><li class="svelte-cvvwpr"><input class="category_radio svelte-cvvwpr" type="radio" name="cat_options" id="cat_option1" value="Food"> <label for="cat_option1" class="svelte-cvvwpr">Food</label></li> <li class="svelte-cvvwpr"><input class="category_radio svelte-cvvwpr" type="radio" name="cat_options" id="cat_option2" value="Others"> <label for="cat_option2" class="svelte-cvvwpr">Others</label></li></ul> <div id="add__items" class="svelte-cvvwpr">${$purchase_items.length ? each($purchase_items, (item) => {
    return `<div class="item svelte-cvvwpr"><div class="face svelte-cvvwpr"><p class="item_title">${escape(item.title)}</p> <p class="item_price">${escape(item.price)}</p></div> <div class="hovered svelte-cvvwpr"><input type="text" class="item_hashtags svelte-cvvwpr"${add_attribute("value", item.hashtags, 0)} placeholder="(none)">  <button class="item_delete svelte-cvvwpr"${add_attribute("id", "item_del_btn-" + item.id, 0)}></button></div> </div>`;
  }) : `<p class="nothing_here svelte-cvvwpr" data-svelte-h="svelte-1rs164e">Nothing here yet....</p>`}</div> <div id="add__others" class="svelte-cvvwpr"><div id="date" class="svelte-cvvwpr" data-svelte-h="svelte-w5tb85"><input type="date" name="date" id="purchase_date" value="" class="svelte-cvvwpr"></div> <div id="market" class="svelte-cvvwpr" data-svelte-h="svelte-1vkgune"><input type="text" id="purchase_market" placeholder="Market" class="svelte-cvvwpr"></div> <div id="commentary" class="svelte-cvvwpr" data-svelte-h="svelte-s4klr9"><textarea id="commentary_area" placeholder="Comments here" class="svelte-cvvwpr"></textarea></div> <p id="final_sum" class="svelte-cvvwpr">Total: <input type="number" id="total_sum_input"${add_attribute("value", total_sum, 0)} class="svelte-cvvwpr"></p> <button type="button" id="add_button" class="svelte-cvvwpr" data-svelte-h="svelte-8pgwnf">Add purchase</button></div> </div>`;
});
const css = {
  code: "#add_container.svelte-1u6styh{width:100%;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="add_container" class="svelte-1u6styh">${validate_component(MainInput, "MainInput").$$render($$result, {}, {}, {})} ${validate_component(Workspace, "Workspace").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
