export const post = async (req, { body: { what, loc, when } }) => {
    return {
        status: 200,
        body: req.locals.token,
    };
}
