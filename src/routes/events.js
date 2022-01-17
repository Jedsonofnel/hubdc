export const post = async ({ locals, body: { what, loc, when } }) => {
    if (!locals.token) {
        return {
            status: 302,
            headers : { location: '/login' },
        };
    }

    const res = await fetch('https://hubdc-api.herokuapp.com/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': locals.token,
        },
        body: JSON.stringify({ what, loc, when })
    });

    if (!res.ok) {
        return {
            status: res.status,
            body: await res.text(),
        };
    } else {
        return {
            status: res.status,
            headers: {
                'Content-type': 'application/json',
            },
            body: await res.json()
        };
    }
}
