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
  default: () => Login
});
var import_index_f0be1be3 = __toModule(require("../../chunks/index-f0be1be3.js"));
var import_stores_035e89c5 = __toModule(require("../../chunks/stores-035e89c5.js"));
var login_form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");form.svelte-1ed70np{width:100%;margin:0}fieldset.svelte-1ed70np{width:100%;border:none;display:flex;flex-direction:column;align-items:start}label.svelte-1ed70np{font-family:"Source Sans Pro", sans-serif;font-size:1.3rem;font-weight:600;color:white;padding:0.25rem 0.5rem;background-color:#01203F;border-bottom:none;border-top-right-radius:0.5rem;border-top-left-radius:0.5rem}input.svelte-1ed70np{font-family:"Source Sans Pro", sans-serif;font-size:1.2rem;border:#01203F 0.2rem solid;border-top-right-radius:0.5rem;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;padding:0.25rem 0.5rem;margin-bottom:2rem;width:100%}input.svelte-1ed70np:active,input.svelte-1ed70np:focus{outline:#a7ddcd 0.2rem solid}button.svelte-1ed70np{background-color:#01203F;border:none;color:white;font-family:"Source Sans Pro", sans-serif;font-size:1.3rem;font-weight:600;padding:0.25rem 0.5rem;border-radius:0.5rem}button.svelte-1ed70np:hover,button.svelte-1ed70np:active{background-color:#a7ddcd;text-decoration:underline;cursor:pointer}',
  map: null
};
const Login_form = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_f0be1be3.f)();
  let username = "";
  let password = "";
  $$result.css.add(css$1);
  return `<form autocomplete="${"off"}" class="${"svelte-1ed70np"}"><fieldset class="${"svelte-1ed70np"}"><label for="${"username"}" class="${"svelte-1ed70np"}">Username:</label>
    <input type="${"text"}" name="${"username"}" placeholder="${"Username"}" class="${"svelte-1ed70np"}"${(0, import_index_f0be1be3.g)("value", username, 0)}>

    <label for="${"password"}" class="${"svelte-1ed70np"}">Password:</label>
    <input type="${"password"}" name="${"password"}" placeholder="${"Password"}" class="${"svelte-1ed70np"}"${(0, import_index_f0be1be3.g)("value", password, 0)}>

    <button type="${"submit"}" class="${"svelte-1ed70np"}">Login</button></fieldset>
</form>`;
});
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");h2.svelte-1lcnjhz{font-family:"Playfair Display", serif;font-weight:bold;font-size:2.5rem;color:white;text-decoration:underline;text-decoration-thickness:0.2rem;text-decoration-color:#a7ddcd;text-align:center;background-color:#01203F;border-radius:0.5rem;width:auto;padding:0.25rem 1rem 1rem 1rem;margin:2rem}section.svelte-1lcnjhz{width:100%;display:flex;flex-direction:column;align-items:center}.warning.svelte-1lcnjhz{font-family:"Source Sans Pro", sans-serif;font-size:1.2rem}.login-errors.svelte-1lcnjhz{background-color:#ff6961;margin:1rem 0;padding:0.5rem;border-radius:0.5rem;width:auto}.error.svelte-1lcnjhz{font-family:"Source Sans Pro", sans-serif;font-size:1.2rem;color:white;margin:0}',
  map: null
};
const Login = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f0be1be3.a)(import_stores_035e89c5.p, (value) => value);
  let loginErrors = [];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}`, ""}

<h2 class="${"svelte-1lcnjhz"}">Admin Login</h2>
<p class="${"warning svelte-1lcnjhz"}">(Just for committee members)</p>

<section class="${"svelte-1lcnjhz"}">${(0, import_index_f0be1be3.v)(Login_form, "LoginForm").$$render($$result, {}, {}, {})}

    ${loginErrors.length != 0 ? `<div class="${"login-errors svelte-1lcnjhz"}">${(0, import_index_f0be1be3.d)(loginErrors, (error) => `<p class="${"error svelte-1lcnjhz"}">${(0, import_index_f0be1be3.e)(error.message)}</p>`)}</div>` : ``}
</section>`;
});
