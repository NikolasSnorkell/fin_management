

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/archive/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.q6-zo6Ip.js","_app/immutable/chunks/scheduler.Bz0nXMPT.js","_app/immutable/chunks/index.B9e4esxZ.js"];
export const stylesheets = [];
export const fonts = [];
