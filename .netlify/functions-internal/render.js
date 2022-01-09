const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-36bf21fa.js","js":["start-36bf21fa.js","chunks/vendor-c6521264.js","chunks/singletons-a42a5e91.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/events\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/events.js'))
			},
			{
				type: 'page',
				pattern: /^\/admin\/?$/,
				params: null,
				path: "/admin",
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/event\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/event/_id_.js'))
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth.js'))
			}
		]
	}
});
