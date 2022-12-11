import type {HttpMethod} from '@sveltejs/kit/types/private';
import {HttpError} from './http-error';

export async function httpRequest<T>(route: string ,method: HttpMethod, options?: RequestInit): Promise<T> {
    const defaultRequestOptions = {
        method
    }
    const requestOptions = Object.assign(defaultRequestOptions, options);

    return fetch(route, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json() as Promise<T>
            }
            throw new HttpError(response.status, response.statusText);
        })
}