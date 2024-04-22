import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: ":root{--l_panel_bg_color:#000f2a;--l_panel_item_hover:#2127319d;--l_panel_width:5.6rem}#l_panel.svelte-16dyool.svelte-16dyool{position:fixed;width:var(--l_panel_width);height:100vh;background:var(--l_panel_bg_color)}#l_panel.svelte-16dyool .l_panel__item.svelte-16dyool{width:var(--l_panel_width);height:var(--l_panel_width);transition:all .2s ease-in}.l_panel__item.svelte-16dyool a.svelte-16dyool{width:100%;height:100%;position:relative;display:block;background-position:center;background-size:30%;background-repeat:no-repeat}.l_panel__item.svelte-16dyool a span.svelte-16dyool{width:100%;height:100%;position:absolute;top:0;left:0;background-position:center;background-size:30%;background-repeat:no-repeat;opacity:0;transition:opacity .3s ease-in-out}.l_panel__item.svelte-16dyool a span.svelte-16dyool:hover,.l_panel__checked a.svelte-16dyool span.svelte-16dyool{opacity:1}.l_panel__item.svelte-16dyool.svelte-16dyool:hover{background:var(--l_panel_item_hover)}",
  map: null
};
const LeftPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div id="l_panel" class="color_theme svelte-16dyool" data-svelte-h="svelte-1eo4jjg"><div class="l_panel__item l_panel__profile svelte-16dyool"><a href="/profile" data-name="profile" style="background-image: url('src/lib/img/user-solid-white.png');" class="svelte-16dyool"><span style="background-image: url('src/lib/img/user-solid-hover.png');" class="svelte-16dyool"></span></a></div> <div class="l_panel__item l_panel__add svelte-16dyool"><a href="/add" data-name="add" style="background-image: url('src/lib/img/add-solid-white.png');" class="svelte-16dyool"><span style="background-image: url('src/lib/img/add-solid-hover.png');" class="svelte-16dyool"></span></a></div> <div class="l_panel__item l_panel__stats svelte-16dyool"><a href="/stats" data-name="stats" style="background-image: url('src/lib/img/stats-solid-white.png');" class="svelte-16dyool"><span style="background-image: url('src/lib/img/stats-solid-hover.png');" class="svelte-16dyool"></span></a></div> <div class="l_panel__item l_panel__archive svelte-16dyool"><a href="/archive" data-name="archive" style="background-image: url('src/lib/img/archive-solid-white.png');" class="svelte-16dyool"><span class="hover_span svelte-16dyool" style="background-image: url('src/lib/img/archive-solid-hover.png');"></span></a></div> </div>`;
});
const css = {
  code: '@font-face{font-family:"Gilroy";src:url("$lib/font/Gilroy/Gilroy-Light.otf") format("truetype");font-style:normal;font-weight:normal}@font-face{font-family:"Gilroy";src:url("$lib/font/Gilroy/Gilroy-ExtraBold.otf") format("truetype");font-style:normal;font-weight:bold}.app.svelte-37j33f{display:flex;flex-direction:column;min-height:100vh;overflow-x:hidden}main.svelte-37j33f{width:100vw;display:flex;background:linear-gradient(-45deg,#e1e1e1,#f0f3f3,#eff1f1,#d5d7d6)}@media(min-width: 480px){}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-37j33f"> <main class="svelte-37j33f">${validate_component(LeftPanel, "LeftPanel").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
