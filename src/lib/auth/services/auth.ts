import type { UserCredentials } from '../models/User';
import {httpRequest} from '../../common/services/http-request';

export function login(user: UserCredentials) {
	return httpRequest<{access_token: string}>('http://localhost:3000/auth/login', 'POST',{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	}).then((res) => res);
}
