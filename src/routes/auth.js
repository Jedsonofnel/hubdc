// proxy route to access jwt from 3rd party auth server
import { serialize } from 'cookie';

export const post = async ({ body: { username, password } }) => {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

    const res =  await fetch('http://www.api.hubdc.info/login', {
        method: 'POST',
        headers: headers,
    });

    if (!res.ok) {
        return {
            status: 401,
            body: await res.text(),
        };
    }

    let jwt = res.headers.get('Access_token');

    return {
        status: 200,
        headers: {
            'Set-Cookie': serialize('Access_token', jwt, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60,
            }),
        },
        body: {
            message: 'Successfully signed in',
        },
    };
}

export const get = ({ locals }) => {
    if (locals.token) {
        return {
            status: 200,
        };
    } else {
        return {
            status: 401,
        };
    }
}
