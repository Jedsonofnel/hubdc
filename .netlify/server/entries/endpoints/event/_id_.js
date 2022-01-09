var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  del: () => del,
  get: () => get,
  put: () => put
});
const get = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://www.api.hubdc.info/event/${id}`);
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
const put = async ({ params, locals, body: { what, loc, when } }) => {
  const { id } = params;
  const res = await fetch(`http://www.api.hubdc.info/event/${id}`, {
    method: "PUT",
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
const del = async ({ params, locals }) => {
  const { id } = params;
  const res = await fetch(`http://www.api.hubdc.info/event/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": locals.token
    }
  });
  if (!res.ok) {
    return {
      status: res.status,
      body: await res.text()
    };
  } else {
    return {
      status: res.status
    };
  }
};
