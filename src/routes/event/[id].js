export const get = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`https://hubdc-api.herokuapp.com/event/${id}`)

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

export const put = async ({ params, locals, body: { what, loc, when } }) => {
    const { id } = params;
    const res = await fetch(`https://hubdc-api.herokuapp.com/event/${id}`, {
        method: 'PUT',
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

export const del = async({ params, locals }) => {
    const { id } = params;
    const res = await fetch(`https://hubdc-api.herokuapp.com/event/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': locals.token,
        },
    });

    if (!res.ok) {
        return {
            status: res.status,
            body: await res.text()
        };
    } else {
        return {
            status: res.status,
        };
    }
}
