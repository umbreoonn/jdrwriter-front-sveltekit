import type { UserCredentials } from '../models/User';

export function login(user: UserCredentials) {
	return fetch('http://localhost:3000/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	}).then((res) => res.json());
}
