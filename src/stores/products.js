import { writable } from 'svelte/store';
export const selectedProductStore = writable(null);
export const cartStore = writable([]);