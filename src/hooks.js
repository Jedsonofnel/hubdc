// handle function to add access_token to request.locals for endpoints
import { parse } from 'cookie';

export const handle = async ({ request, resolve }) => {
    const cookies = parse(request.headers.cookie || '');

    if (cookies.Access_token) {
        request.locals.token = cookies.Access_token;
        return resolve(request);
    }

    request.locals.token = null;
    return resolve(request);
}

export const getSession = (req) => {
    return req?.locals?.token
    ? {
        authed: true,
    }
    : {
        authed: false,
    };
}
