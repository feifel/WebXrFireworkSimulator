// myStore.ts
import { writable } from 'svelte/store';

// Define a writable store with an initial value
export const showNavbar = writable<boolean>(false);
export const showToolbar = writable<boolean>(true);
export const showToolbarButton = writable<boolean>(true);