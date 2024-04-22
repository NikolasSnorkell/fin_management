import { c as create_ssr_component, e as escape, d as each, v as validate_component, h as add_styles } from "../../../chunks/ssr.js";
const css$4 = {
  code: '@property --total_progress_value{syntax:"<integer>";inherits:false;initial-value:0}@keyframes svelte-1nup96q-total_progress{to{--total_progress_value:var(--total_value)}}#budget_stats_container.svelte-1nup96q.svelte-1nup96q{width:20rem;height:fit-content;padding-bottom:2rem;min-height:20rem;border-radius:10px;background:var(--stats_card_bg_color)}#main_stat_block.svelte-1nup96q.svelte-1nup96q{width:100%;height:14rem;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;padding-top:6rem}#main_stat_block.svelte-1nup96q #total_progress.svelte-1nup96q{width:17rem;height:17rem;margin:0rem auto;background-image:conic-gradient(from -90deg, var(--total_budget_bar) calc(var(--total_progress_value) * 0.5%), rgba(255, 255, 0, 0) 0);border-radius:50% 50% 0 0;position:absolute;top:2rem;display:flex;justify-content:center;align-items:center;animation:svelte-1nup96q-total_progress 2s 1 forwards}#main_stat_block.svelte-1nup96q #total_progress.svelte-1nup96q::before{content:"";width:15rem;height:15rem;display:block;margin:0 auto;z-index:10;background:var(--stats_card_bg_color);border-radius:50%}#main_stat_block.svelte-1nup96q span.svelte-1nup96q{width:100%;text-align:center;margin-top:0.5rem;font-size:var(--main_font_size);font-weight:bold;z-index:15}#main_stat_block.svelte-1nup96q #total_plan_sum.svelte-1nup96q{color:var(--total_plan_sum_color);font-size:20px;font-weight:400}#others_stat_block.svelte-1nup96q.svelte-1nup96q{z-index:20;position:relative}#others_stat_block.svelte-1nup96q .other_stat.svelte-1nup96q{display:flex;flex-wrap:wrap;width:100%;margin-top:1rem;padding:0 1rem}#others_stat_block.svelte-1nup96q .other_stat span.svelte-1nup96q{width:50%;font-size:16px}#others_stat_block.svelte-1nup96q .other_stat span.other_stat_sum.svelte-1nup96q{text-align:end}#others_stat_block.svelte-1nup96q .other_stat .other_progress.svelte-1nup96q{height:5px;width:100%;margin-top:0.5rem;background:#b6b6b6;position:relative;overflow:hidden}#others_stat_block.svelte-1nup96q .other_stat .other_progress .other_progress_bar.svelte-1nup96q{position:absolute;top:0;width:100%;height:10px;transition:all 2s ease-in-out}',
  map: null
};
let total_budget_current = 3e3;
let total_budget_plan = 3e4;
const BudgetStatsModule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total_budget_percentage = Math.floor(total_budget_current / (total_budget_plan / 100));
  let other_stats = [
    {
      "id": 0,
      "category_name": "Food",
      "category_color": "#f88181",
      "sum_plan": 9e3,
      "sum_current": 4500,
      "percentage": -100 + Math.floor(4500 / (9e3 / 100)),
      "bg_color": "red",
      "tween": -100
    },
    {
      "id": 1,
      "category_name": "Others",
      "category_color": "#608bdb",
      "sum_plan": 12e3,
      "sum_current": 5e3,
      "percentage": -100 + Math.floor(5e3 / (12e3 / 100)),
      "bg_color": "blue",
      "tween": -100
    }
  ];
  $$result.css.add(css$4);
  return `<div id="budget_stats_container" class="svelte-1nup96q"><div id="main_stat_block" class="svelte-1nup96q"><span id="total_current_sum" class="svelte-1nup96q">${escape(total_budget_current)}</span> <span id="total_plan_sum" class="svelte-1nup96q">${escape(total_budget_plan)}</span> <div id="total_progress" style="${"--total_value: " + escape(total_budget_percentage, true) + ";"}" class="svelte-1nup96q"></div></div> <div id="others_stat_block" class="svelte-1nup96q">${each(other_stats, (item, i) => {
    return `<div class="other_stat svelte-1nup96q"><span class="other_stat_title svelte-1nup96q">${escape(item.category_name)}</span> <span class="other_stat_sum svelte-1nup96q">${escape(item.sum_current)}/${escape(item.sum_plan)}</span> <div class="other_progress svelte-1nup96q"><span class="other_progress_bar svelte-1nup96q" style="${"left:" + escape(item.percentage, true) + "%;background: " + escape(item.category_color, true) + ";"}"></span></div> </div>`;
  })}</div></div>    `;
});
const css$3 = {
  code: "#hashtags_stats_container.svelte-1rfgd1j.svelte-1rfgd1j{min-width:18rem;max-width:fit-content;height:fit-content;background:var(--stats_card_bg_color);border-radius:10px;padding:1rem 2rem}#hashtags_stats_container.svelte-1rfgd1j #hashtags_items li.svelte-1rfgd1j{width:90%;margin:1rem auto;display:flex;justify-content:space-between;column-gap:1rem}#hashtags_stats_container.svelte-1rfgd1j #hashtags_items li:first-child span.svelte-1rfgd1j{font-size:24px}#hashtags_stats_container.svelte-1rfgd1j #hashtags_items li span.svelte-1rfgd1j{font-size:20px}",
  map: null
};
const HashtagsStatsModule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hashtags_stats = [
    { id: 0, tag: "#молочка", sum: 20.8 },
    { id: 1, tag: "#сладкое", sum: 34.6 },
    { id: 2, tag: "#мучное", sum: 8.9 }
  ];
  $$result.css.add(css$3);
  return `<div id="hashtags_stats_container" class="svelte-1rfgd1j"><ul id="hashtags_items">${each(hashtags_stats, (item) => {
    return `<li class="hashtags_stats_item svelte-1rfgd1j"><span class="hashtag_name svelte-1rfgd1j">${escape(item.tag)}</span> <span class="hashtag_sum svelte-1rfgd1j">${escape(item.sum)}</span> </li>`;
  })}</ul></div> `;
});
const css$2 = {
  code: "#stats__block.svelte-1ngwpez{display:flex;height:fit-content;padding:4rem 0rem;width:80vw;margin:0 auto;column-gap:4rem}",
  map: null
};
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="stats__block" class="svelte-1ngwpez">${validate_component(BudgetStatsModule, "BudgetStatsModule").$$render($$result, {}, {}, {})} ${validate_component(HashtagsStatsModule, "HashtagsStatsModule").$$render($$result, {}, {}, {})} </div>`;
});
const css$1 = {
  code: ':root{--one_purchase_width:80vw}#purchase_list__block.svelte-cx9k7r.svelte-cx9k7r{overflow-x:hidden;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-bottom:2rem}#purchase_list__block.svelte-cx9k7r .one_purchase.svelte-cx9k7r{width:var(--one_purchase_width);background:white;padding:1rem 3rem;margin-top:0.5rem;font-size:20px;display:flex;justify-content:space-between;align-items:center;position:relative}#purchase_list__block.svelte-cx9k7r .one_purchase .category_indicator.svelte-cx9k7r{width:0.5rem;height:100%;position:absolute;left:0}#purchase_list__block.svelte-cx9k7r .one_purchase .del_purchase.svelte-cx9k7r{width:3rem;height:100%;position:absolute;right:0;background-image:url("/src/lib/img/trash-solid-hover.png");background-size:50%;background-position:center;background-repeat:no-repeat;opacity:0.3;transition:opacity 0.3s ease-in-out}#purchase_list__block.svelte-cx9k7r .one_purchase .del_purchase.svelte-cx9k7r:hover{cursor:pointer;opacity:1}#purchase_list__block.svelte-cx9k7r .one_purchase span.svelte-cx9k7r{text-align:center;width:calc(var(--one_purchase_width) / 7 * 1)}#purchase_list__block.svelte-cx9k7r .one_purchase span.purchase_items.svelte-cx9k7r{width:calc(var(--one_purchase_width) / 7 * 2);align-self:stretch}',
  map: null
};
const PurchaseList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let purchase_list = [
    {
      "id": 0,
      "date": "10/11/23",
      "category": "Food",
      "category_color": "#f88181",
      "marketplace": "Евроопт",
      "items": "Кефир 1,77; Творог 2*1,65; Молоко 1,89; Филе 2,49;",
      "cost": 350,
      "commentary": "9.45 byn"
    },
    {
      "id": 1,
      "date": "10/11/23",
      "category": "Food",
      "category_color": "#f88181",
      "marketplace": "Евроопт",
      "items": "Кефир 1,77; Творог 2*1,65; Молоко 1,89; Филе 2,49;",
      "cost": 350,
      "commentary": "9.45 byn"
    },
    {
      "id": 2,
      "date": "15/11/23",
      "category": "Others",
      "category_color": "#608bdb",
      "marketplace": "Wildberiies",
      "items": "Кольцо 7,15; Масло для бороды 22.56;",
      "cost": 835,
      "commentary": "29,71 byn"
    }
  ];
  $$result.css.add(css$1);
  return `<div id="purchase_list__block" class="svelte-cx9k7r">${each(purchase_list, (purchase) => {
    return `<div class="one_purchase svelte-cx9k7r" id="${"purchase_" + escape(purchase.id, true)}"><p class="category_indicator svelte-cx9k7r"${add_styles({
      "background-color": purchase.category_color
    })}></p> <span class="purchase_date svelte-cx9k7r">${escape(purchase.date)}</span> <span class="purchase_category svelte-cx9k7r">${escape(purchase.category)}</span> <span class="purchase_marketplace svelte-cx9k7r">${escape(purchase.marketplace)}</span> <span class="purchase_items svelte-cx9k7r">${escape(purchase.items)}</span> <span class="purchase_cost svelte-cx9k7r">${escape(purchase.cost)}</span> <span class="purchase_commentary svelte-cx9k7r">${escape(purchase.commentary)}</span> <p class="del_purchase svelte-cx9k7r"></p> </div>`;
  })} </div>`;
});
const css = {
  code: ":root{--total_plan_sum:#5c5c5c;--stats_card_bg_color:#f5f2f2;--total_budget_bar:#47fa4f }#stats_container.svelte-8owyue{width:100%;min-height:100vh;max-height:fit-content}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="stats_container" class="svelte-8owyue">${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})} ${validate_component(PurchaseList, "PurchaseList").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
