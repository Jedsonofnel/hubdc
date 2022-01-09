var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  post: () => post
});
const post = async ({ locals, body: { what, loc, when } }) => {
  if (!locals.token) {
    return {
      status: 302,
      headers: { location: "/login" }
    };
  }
  const res = await fetch("http://www.api.hubdc.info/events", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": locals.token
    },
    body: JSON.stringify({ what, loc, when })
  });
  if (!res.ok) {
    return {
      status: res.status,
      body: await res.text()
    };
  } else {
    return {
      status: res.status,
      headers: {
        "Content-type": "application/json"
      },
      body: await res.json()
    };
  }
};
