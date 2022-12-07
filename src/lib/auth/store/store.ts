import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const persistedUser = browser && localStorage.getItem('user');
export const user = writable(persistedUser ? JSON.parse(persistedUser) : null);

if (browser) {
	user.subscribe((user) => {
		localStorage.user = user;
	});
}
