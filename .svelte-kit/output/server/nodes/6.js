

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stats/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.w-ot-Qwz.js","_app/immutable/chunks/scheduler.Bz0nXMPT.js","_app/immutable/chunks/index.B9e4esxZ.js","_app/immutable/chunks/each.BluCadJt.js"];
export const stylesheets = ["_app/immutable/assets/6.BwhyjYjo.css"];
export const fonts = [];
