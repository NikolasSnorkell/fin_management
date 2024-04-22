

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BA9EHUaQ.js","_app/immutable/chunks/scheduler.Bz0nXMPT.js","_app/immutable/chunks/index.B9e4esxZ.js","_app/immutable/chunks/stores.CDf0WL6T.js","_app/immutable/chunks/entry.C7sUNhCV.js","_app/immutable/chunks/index.BJ3cgkgR.js"];
export const stylesheets = ["_app/immutable/assets/0.B-Ijqia7.css"];
export const fonts = ["_app/immutable/assets/Gilroy-Light.CVM2ydYb.otf","_app/immutable/assets/Gilroy-ExtraBold.BDcfmT-i.otf"];
