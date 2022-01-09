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
  default: () => _layout
});
var import_index_f0be1be3 = __toModule(require("../../chunks/index-f0be1be3.js"));
var import_stores_035e89c5 = __toModule(require("../../chunks/stores-035e89c5.js"));
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");footer.svelte-fedarv{max-width:640px;width:100%;padding:0.5rem;margin:0 auto;display:flex;flex-direction:row;align-items:center;justify-content:space-around;background-color:#01203F;border-top-right-radius:0.5rem;border-top-left-radius:0.5rem}p.svelte-fedarv,a.svelte-fedarv{color:white;width:50%;font-family:"Source Sans Pro", sans-serif;font-size:1.3rem;margin:0;padding:0.5rem;text-align:center}p.svelte-fedarv{border-right:white solid 0.15rem}a.svelte-fedarv{display:flex;align-items:center;justify-content:center;text-decoration:none}span.svelte-fedarv{margin-right:0.5rem}',
  map: null
};
const Footer = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f0be1be3.a)(import_stores_035e89c5.p, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<footer class="${"svelte-fedarv"}"><p class="${"svelte-fedarv"}">By jedn webdev.</p>

    ${$page == "home" ? `<a href="${"/admin"}" class="${"svelte-fedarv"}"><span class="${"material-icons svelte-fedarv"}">admin_panel_settings</span>Admin
        </a>` : `${$page == "admin" || $page == "login" ? `<a href="${"/"}" class="${"svelte-fedarv"}"><span class="${"material-icons svelte-fedarv"}">home</span>Home
        </a>` : ``}`}

</footer>`;
});
var global = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-t3mf3h{display:flex;max-width:640px;width:100%;padding:0 5%;margin:0 auto;flex-direction:column;align-items:center}",
  map: null
};
const _layout = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-t3mf3h"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_f0be1be3.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
