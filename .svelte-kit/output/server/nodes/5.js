

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.fa-EOrvU.js","_app/immutable/chunks/scheduler.Bz0nXMPT.js","_app/immutable/chunks/index.B9e4esxZ.js","_app/immutable/chunks/each.BluCadJt.js"];
export const stylesheets = ["_app/immutable/assets/5.BIQn4lf0.css"];
export const fonts = [];
