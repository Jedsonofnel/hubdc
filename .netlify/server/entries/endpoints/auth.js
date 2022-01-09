var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  get: () => get,
  post: () => post
});
var import_cookie = __toModule(require("cookie"));
const post = async ({ body: { username, password } }) => {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + `${username}:${password}`.toString("base64"));
  const res = await fetch("http://www.api.hubdc.info/login", {
    method: "POST",
    headers
  });
  if (!res.ok) {
    return {
      status: 401,
      body: await res.text()
    };
  }
  let jwt = res.headers.get("Access_token");
  return {
    status: 200,
    headers: {
      "Set-Cookie": (0, import_cookie.serialize)("Access_token", jwt, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60
      })
    },
    body: {
      message: "Successfully signed in"
    }
  };
};
const get = ({ locals }) => {
  if (locals.token) {
    return {
      status: 200
    };
  } else {
    return {
      status: 401
    };
  }
};
