import type {RequestEvent} from '@sveltejs/kit';
import {redirect} from '@sveltejs/kit';
import {login} from '../../../lib/auth/services/auth';
import {HttpError} from '../../../lib/common/services/http-error';

export const actions = {
    default: async ({request, cookies}: RequestEvent) => {
        const form = await request.formData();
        let response;
        try {
            response = await login({
                username: form.get('username') as string,
                password: form.get('password') as string
            });
        } catch (error) {
            if(error instanceof HttpError) {
                if(error.statusCode === 401) {
                    return {error: 'Vérifiez vos informations de connexion'};
                }
                return { error: 'Une erreur est survenue' };
            }
        }
        if(response) {
            cookies.set('session', response.access_token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict'
            });
            throw redirect(303, '/');
        }
    }
};