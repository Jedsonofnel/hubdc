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
  default: () => Routes
});
var import_index_f0be1be3 = __toModule(require("../../chunks/index-f0be1be3.js"));
var import_stores_035e89c5 = __toModule(require("../../chunks/stores-035e89c5.js"));
var greeting_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");section.svelte-cvjw8u{margin:0;padding:0;height:max(585px, 90vh)}h1.svelte-cvjw8u{height:100%;display:flex;margin:0;flex-direction:column;align-items:center;justify-content:space-evenly;font-size:min(24vw, 8rem);font-family:"Playfair Display", serif}#come.svelte-cvjw8u{color:#01203F}#to.svelte-cvjw8u{display:block;border-radius:50%;padding:0.5rem;background-color:#a7ddcd;color:white}#the.svelte-cvjw8u{color:#01203F;font-style:italic}#hub.svelte-cvjw8u{width:80%;text-align:center;background-color:#01203F;border-radius:0.5rem;color:white}#threat.svelte-cvjw8u{font-size:1.2rem;font-family:"Source Sans Pro", sans-serif;position:relative;bottom:0;color:#01203F}',
  map: null
};
const Greeting = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  let threats = ["please?", "or else", "if you like donuts", "and lent addresses!"];
  let threat = threats[Math.floor(Math.random() * threats.length)];
  $$result.css.add(css$3);
  return `<section id="${"greeting"}" class="${"svelte-cvjw8u"}"><h1 class="${"svelte-cvjw8u"}"><span id="${"come"}" class="${"svelte-cvjw8u"}">COME</span>
        <span id="${"to"}" class="${"svelte-cvjw8u"}">TO</span>
        <span id="${"the"}" class="${"svelte-cvjw8u"}">THE</span>
        <span id="${"hub"}" class="${"svelte-cvjw8u"}">HUB</span>
        <span id="${"threat"}" class="${"svelte-cvjw8u"}">(${(0, import_index_f0be1be3.e)(threat)})</span></h1>
</section>`;
});
var arrow_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-jx7rjb{width:100%;height:max(65px, 10vh);display:flex;flex-direction:row;justify-content:center;align-items:center}span.svelte-jx7rjb{font-size:48px;margin:0;padding:0}",
  map: null
};
const Arrow = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"svelte-jx7rjb"}"><span class="${"material-icons svelte-jx7rjb"}">expand_more</span>
</div>`;
});
var faq_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");h2.svelte-14ohbdi{font-family:"Playfair Display", serif;font-weight:bold;font-size:2.5rem;color:white;text-decoration:underline;text-decoration-thickness:0.2rem;text-decoration-color:#a7ddcd;text-align:center;background-color:#01203F;border-radius:0.5rem;width:auto;padding:0.25rem 1rem 1rem 1rem;margin:2rem}section.svelte-14ohbdi{width:100%;display:flex;flex-direction:column;align-items:center}.bubble.svelte-14ohbdi{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:#eeeeee;margin-bottom:1rem}h3.svelte-14ohbdi{font-family:"Source Sans Pro", sans-serif;font-size:1.25rem;font-weight:bold;font-style:italic;margin:0 0 0.5rem 0}p.svelte-14ohbdi{font-family:"Source Sans Pro", sans-serif;font-size:1.2rem;color:grey;margin:0}',
  map: null
};
const Faq = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"svelte-14ohbdi"}"><h2 class="${"svelte-14ohbdi"}">FAQ:</h2>
    <div class="${"bubble svelte-14ohbdi"}"><h3 class="${"svelte-14ohbdi"}">&quot;But I don&#39;t believe in God?&quot;
        </h3>
        <p class="${"svelte-14ohbdi"}">Ideal!  We believe that we can know the creator of the universe and that he loves us more than you could ever imagine.  That&#39;s a big deal.  Big important things in life deserve thought and consideration, so when eternal life is on offer we&#39;d say its worth a stop and look!  Maybe you&#39;ve never thought about it or maybe you&#39;re convinced its all made-up nonsense - you are always welcome, we&#39;d love to start a dialogue!
        </p></div>

    <div class="${"bubble svelte-14ohbdi"}"><h3 class="${"svelte-14ohbdi"}">&quot;Wait so you want me to go do basically chapel in my free time?&quot;
        </h3>
        <p class="${"svelte-14ohbdi"}">That&#39;s exactly right.  The rules at Hub are very simple: absolutely no fun, donuts or friendlines.  In fact, we pride our community on being the most stand-offish and least interesting; there is nothing that sets the way we interact with each other apart.  After sitting in silence for a few minutes quite distinctly not playing a game, we like to then listen to Mr. Ash speak in a very monotone voice about the fiery pits of hell that await non-believers for 2 whole hours.  After a brief gregorian chant, we remove our robes and go our seperate ways, making a point of being unfriendly and cold to other members for the rest of the week.
        </p></div>

    <div class="${"bubble svelte-14ohbdi"}"><h3 class="${"svelte-14ohbdi"}">&quot;No but seriously&quot;
        </h3>
        <p class="${"svelte-14ohbdi"}">Despite being mentioned in chapel, the Hub isn&#39;t crusty and old fashioned. We are quite proud of the unique atmosphere we have managed to cultivate - you are able to talk to other year groups as equals and meet people you would never talk to otherwise.  We also have a lot of fun, and don&#39;t take most things too seriously - only through the Hub could I walk around the HPH with my eyes close making cow noises trying to locate similarly impaired noise makers.  It is ridiculously easy to rock up and make yourself at home, so please do so!
        </p></div>
</section>`;
});
var upcoming_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap");h2.svelte-1w7r99m.svelte-1w7r99m{font-family:"Playfair Display", serif;font-weight:bold;font-size:2.5rem;color:white;text-decoration:underline;text-decoration-thickness:0.2rem;text-decoration-color:#a7ddcd;text-align:center;background-color:#01203F;border-radius:0.5rem;width:auto;padding:0.25rem 1rem 1rem 1rem;margin:2rem}section.svelte-1w7r99m.svelte-1w7r99m{width:100%;display:flex;flex-direction:column;align-items:center}.bubble.svelte-1w7r99m.svelte-1w7r99m{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:#eeeeee;margin-bottom:1rem}h3.svelte-1w7r99m.svelte-1w7r99m,p.svelte-1w7r99m.svelte-1w7r99m{margin:0;font-family:"Source Sans Pro", sans-serif}p.svelte-1w7r99m.svelte-1w7r99m{font-size:1.2rem;display:flex}h3.svelte-1w7r99m.svelte-1w7r99m{display:block;width:40%;font-size:1.25rem;padding-right:0.5rem}span.svelte-1w7r99m.svelte-1w7r99m{color:grey}.event.svelte-1w7r99m.svelte-1w7r99m{display:flex;flex-direction:row;justify-content:space-betweeen;align-items:center}.event-info.svelte-1w7r99m.svelte-1w7r99m{padding:0.5rem;border-left:grey solid 0.2rem}p.svelte-1w7r99m+p.svelte-1w7r99m{margin-top:0.5rem}.event.svelte-1w7r99m+.event.svelte-1w7r99m{margin-top:2rem}.template-bubble.svelte-1w7r99m.svelte-1w7r99m{height:17.875rem;width:100%;background-color:#eeeeee;border-radius:0.5rem;padding:0.5rem;margin-bottom:1rem;display:flex;justify-content:center;align-items:center}.loading.svelte-1w7r99m.svelte-1w7r99m{width:auto;display:flex;color:grey}',
  map: null
};
const Upcoming = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  const indexUpcomingEvents = async () => {
    try {
      const res = await fetch("http://www.api.hubdc.info/events/upcoming");
      if (!res.ok) {
        throw await res.json();
      } else {
        return await res.json();
      }
    } catch (error) {
      throw error;
    }
  };
  let events = indexUpcomingEvents();
  $$result.css.add(css);
  return `${function(__value) {
    if ((0, import_index_f0be1be3.i)(__value)) {
      __value.then(null, import_index_f0be1be3.n);
      return `
    <section class="${"svelte-1w7r99m"}"><h2 class="${"svelte-1w7r99m"}">Upcoming:</h2>
        <div class="${"template-bubble svelte-1w7r99m"}"><h3 class="${"loading svelte-1w7r99m"}"><span class="${"material-icons svelte-1w7r99m"}">hourglass_bottom
                </span>
                Loading Events...
            </h3></div></section>

`;
    }
    return function(events2) {
      return `
    <section class="${"svelte-1w7r99m"}"><h2 class="${"svelte-1w7r99m"}">Upcoming:</h2>

        ${events2.length != 0 ? `<div class="${"bubble svelte-1w7r99m"}">${(0, import_index_f0be1be3.d)(events2, (event) => `<div class="${"event svelte-1w7r99m"}"><h3 class="${"svelte-1w7r99m"}">${(0, import_index_f0be1be3.e)(event.what)}:</h3>
                        <div class="${"event-info svelte-1w7r99m"}"><p class="${"svelte-1w7r99m"}"><span class="${"material-icons svelte-1w7r99m"}">schedule</span>
                                <span class="${"event-detail svelte-1w7r99m"}">${(0, import_index_f0be1be3.e)(event.when)}</span></p>
                            <p class="${"svelte-1w7r99m"}"><span class="${"material-icons svelte-1w7r99m"}">location_on</span>
                                <span class="${"event-detail svelte-1w7r99m"}">${(0, import_index_f0be1be3.e)(event.loc)}</span>
                            </p></div>
                    </div>`)}</div>` : `<div><h3 class="${"svelte-1w7r99m"}">No events found</h3></div>`}</section>

`;
    }(__value);
  }(events)}`;
});
const Routes = (0, import_index_f0be1be3.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f0be1be3.a)(import_stores_035e89c5.p, (value) => value);
  $$unsubscribe_page();
  return `${(0, import_index_f0be1be3.v)(Greeting, "Greeting").$$render($$result, {}, {}, {})}
${(0, import_index_f0be1be3.v)(Arrow, "Arrow").$$render($$result, {}, {}, {})}
${(0, import_index_f0be1be3.v)(Upcoming, "Upcoming").$$render($$result, {}, {}, {})}
${(0, import_index_f0be1be3.v)(Faq, "Faq").$$render($$result, {}, {}, {})}`;
});
