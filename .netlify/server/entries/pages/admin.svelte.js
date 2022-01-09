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
  default: () => Admin,
  load: () => load
});
var import_index_f0be1be3 = __toModule(require("../../chunks/index-f0be1be3.js"));
var import_stores_035e89c5 = __toModule(require("../../chunks/stores-035e89c5.js"));
var event_form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");form.svelte-t70btd{width:100%;margin:0;padding:0}fieldset.svelte-t70btd{display:flex;flex-direction:column;width:100%;padding:0;margin:0;border:none}.event-detail.svelte-t70btd{width:100%}.event-detail.svelte-t70btd{display:flex;margin-bottom:0.5rem}label.svelte-t70btd{background-color:#01203F;padding:0.25rem 0.5rem;border-top-left-radius:0.5rem;border-bottom-left-radius:0.5rem;color:white;font-family:"Source Sans Pro", sans-serif;font-size:1.25rem}input[type=text].svelte-t70btd{width:100%;padding:0 0.25rem;border-left:none;border:solid #01203F 0.2rem;border-top-right-radius:0.5rem;border-bottom-right-radius:0.5rem;font-family:"Source Sans Pro", sans-serif;font-size:1.25rem}input[type=text].svelte-t70btd:active,input[type=text].svelte-t70btd:focus{outline:#a7ddcd 0.2rem solid}button.svelte-t70btd{background-color:#01203F;padding:0.25rem 0.5rem;margin-bottom:1rem;border:none;border-radius:0.5rem;color:white;font-family:"Source Sans Pro", sans-serif;font-size:1.25rem;font-weight:bold}button.svelte-t70btd:hover,button.svelte-t70btd:active{background-color:#a7ddcd;text-decoration:underline;cursor:pointer}',
  map: null
};
const Event_form = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_f0be1be3.f)();
  let { what = "" } = $$props;
  let { loc = "" } = $$props;
  let { when = "" } = $$props;
  if ($$props.what === void 0 && $$bindings.what && what !== void 0)
    $$bindings.what(what);
  if ($$props.loc === void 0 && $$bindings.loc && loc !== void 0)
    $$bindings.loc(loc);
  if ($$props.when === void 0 && $$bindings.when && when !== void 0)
    $$bindings.when(when);
  $$result.css.add(css$1);
  return `<form autocomplete="${"off"}" class="${"svelte-t70btd"}"><fieldset class="${"svelte-t70btd"}"><div class="${"event-detail svelte-t70btd"}"><label for="${"what"}" class="${"svelte-t70btd"}">What:</label>
        <input type="${"text"}" name="${"what"}" placeholder="${"What"}" class="${"svelte-t70btd"}"${(0, import_index_f0be1be3.g)("value", what, 0)}></div>

    <div class="${"event-detail svelte-t70btd"}"><label for="${"loc"}" class="${"svelte-t70btd"}">Location:</label>
        <input type="${"text"}" name="${"loc"}" placeholder="${"Location"}" class="${"svelte-t70btd"}"${(0, import_index_f0be1be3.g)("value", loc, 0)}></div>

    <div class="${"event-detail svelte-t70btd"}"><label for="${"when"}" class="${"svelte-t70btd"}">When:</label>
        <input type="${"text"}" name="${"when"}" placeholder="${"When"}" class="${"svelte-t70btd"}"${(0, import_index_f0be1be3.g)("value", when, 0)}></div>

    <button type="${"submit"}" class="${"svelte-t70btd"}">Submit</button></fieldset>
</form>`;
});
var admin_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");h2.svelte-1x5912g.svelte-1x5912g{font-family:"Playfair Display", serif;font-weight:bold;font-size:2.5rem;color:white;text-decoration:underline;text-decoration-thickness:0.2rem;text-decoration-color:#a7ddcd;text-align:center;background-color:#01203F;border-radius:0.5rem;width:auto;padding:0.25rem 1rem 1rem 1rem;margin:2rem}section.svelte-1x5912g.svelte-1x5912g{width:100%;display:flex;flex-direction:column;align-items:center}.bubble.svelte-1x5912g.svelte-1x5912g{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:#eeeeee;margin-bottom:1rem}.bubble.svelte-1x5912g.svelte-1x5912g{width:100%}.event-list.svelte-1x5912g.svelte-1x5912g{width:100%;overflow-y:auto;max-height:15rem;display:flex;flex-direction:column;flex:0 0 100%;padding:0;margin:0}.event.svelte-1x5912g.svelte-1x5912g{list-style-type:none;display:flex;justify-content:space-between;align-items:center;padding:0.25rem;font-size:1.2rem;font-family:"Source Sans Pro", sans-serif}.event-details.svelte-1x5912g.svelte-1x5912g{display:flex;align-items:center;flex-wrap:wrap}.event-time.svelte-1x5912g.svelte-1x5912g{color:grey;display:flex;align-items:center}.event-what.svelte-1x5912g.svelte-1x5912g{margin-right:0.5rem}button.svelte-1x5912g.svelte-1x5912g{font-family:"Source Sans Pro", sans-serif;font-size:1rem;color:white;text-decoration:none;background-color:#01203F;border:none;padding:0.25rem 0.5rem;margin:0 0.5rem;border-radius:0.5rem}button.svelte-1x5912g.svelte-1x5912g:hover,button.svelte-1x5912g.svelte-1x5912g:active{background-color:#a7ddcd;text-decoration:underline;cursor:pointer}p.svelte-1x5912g.svelte-1x5912g{margin:0}h3.svelte-1x5912g.svelte-1x5912g{font-family:"Source Sans Pro", sans-serif;font-size:1.5rem;font-weight:bold;color:#01203F;text-decoration:underline;text-decoration-thickness:0.2rem;text-decoration-color:#a7ddcd;margin:0}section.svelte-1x5912g>h3.svelte-1x5912g{margin:0 0 1rem 0}.selected-event-title.svelte-1x5912g.svelte-1x5912g{display:flex;align-items:center;margin:0 0 1rem 0}.viewing-event-opts.svelte-1x5912g.svelte-1x5912g{width:30%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-right:0.5rem}h4.svelte-1x5912g.svelte-1x5912g{margin:0}.viewing-event.svelte-1x5912g.svelte-1x5912g{font-family:"Source Sans Pro", sans-serif;font-size:1.25rem;color:black;display:flex;width:100%;flex-direction:row;align-items:center}.detail.svelte-1x5912g.svelte-1x5912g{font-weight:bold;margin-right:0.5rem}.viewing-event-details.svelte-1x5912g.svelte-1x5912g{border-left:0.2rem solid grey;padding-left:0.5rem}.delete-button.svelte-1x5912g.svelte-1x5912g{margin:0;width:100%}.event-errors.svelte-1x5912g.svelte-1x5912g{background-color:#ff6961;margin:0 0 1rem 0;padding:0.5rem;border-radius:0.5rem;width:auto}.error.svelte-1x5912g.svelte-1x5912g{font-family:"Source Sans Pro", sans-serif;font-size:1.2rem;color:white;margin:0}.event-messages.svelte-1x5912g.svelte-1x5912g{background-color:#77dd77;margin:1rem 0;padding:0.5rem;border-radius:0.5rem;width:auto}.msg.svelte-1x5912g.svelte-1x5912g{font-family:"Source Sans Pro", sans-serif;font-size:1.2rem;color:white;margin:0}',
  map: null
};
const load = async ({ fetch: fetch2 }) => {
  const res = await fetch2("/auth", { method: "GET", credentials: "include" });
  if (!res.ok) {
    return { status: 302, redirect: "/login" };
  } else {
    return {};
  }
};
const Admin = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f0be1be3.a)(import_stores_035e89c5.p, (value) => value);
  let eventMessages = [];
  let eventErrors = [];
  const indexEvents = async () => {
    try {
      const res = await fetch("http://www.api.hubdc.info/events");
      if (!res.ok) {
        throw (await res.json()).errors;
      } else {
        return await res.json();
      }
    } catch (errors) {
      throw errors;
    }
  };
  let events = indexEvents();
  $$result.css.add(css);
  $$unsubscribe_page();
  return `




<h2 class="${"svelte-1x5912g"}">ADMIN</h2>

<section class="${"svelte-1x5912g"}"><h3 class="${"svelte-1x5912g"}">Current Events</h3>
    ${function(__value) {
    if ((0, import_index_f0be1be3.i)(__value)) {
      __value.then(null, import_index_f0be1be3.n);
      return `
        <div class="${"template-bubble"}"><p class="${"svelte-1x5912g"}">loading events</p></div>
    `;
    }
    return function(events2) {
      return `
        <div class="${"bubble svelte-1x5912g"}"><ul class="${"event-list svelte-1x5912g"}">${(0, import_index_f0be1be3.d)(events2, (event) => `<li class="${"event svelte-1x5912g"}"><p class="${"event-details svelte-1x5912g"}"><span class="${"event-what svelte-1x5912g"}">(${(0, import_index_f0be1be3.e)(event.id)}) ${(0, import_index_f0be1be3.e)(event.what)}:</span>
                            <span class="${"event-time svelte-1x5912g"}"><span class="${"material-icons"}">schedule</span>
                                ${(0, import_index_f0be1be3.e)(event.when)}
                            </span></p>
                        <button class="${"svelte-1x5912g"}">View</button>
                    </li>`)}</ul></div>
    `;
    }(__value);
  }(events)}</section>

<section class="${"svelte-1x5912g"}">${`<h3 class="${"svelte-1x5912g"}">New Event</h3>
        ${(0, import_index_f0be1be3.v)(Event_form, "EventForm").$$render($$result, {}, {}, {})}`}

    ${eventErrors.length != 0 ? `<div class="${"event-errors svelte-1x5912g"}">${(0, import_index_f0be1be3.d)(eventErrors, (error) => `<p class="${"error svelte-1x5912g"}">${(0, import_index_f0be1be3.e)(error.message)}</p>`)}</div>` : ``}

    ${eventMessages != 0 ? `<div class="${"event-messages svelte-1x5912g"}">${(0, import_index_f0be1be3.d)(eventMessages, (msg) => `<p class="${"msg svelte-1x5912g"}">${(0, import_index_f0be1be3.e)(msg)}</p>`)}</div>` : ``}

    ${``}
</section>`;
});
