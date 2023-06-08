import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["aboutAi.jpg","blob-haikei.svg","CSM.jpg","favicon.png","portrait.jpg","Rainydays.jpg","rainyDayss.jpg","rainyDaysss.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9432fa4d.js","app":"_app/immutable/entry/app.1cdbbe65.js","imports":["_app/immutable/entry/start.9432fa4d.js","_app/immutable/chunks/index.1bb2d4f8.js","_app/immutable/chunks/singletons.1860ecda.js","_app/immutable/entry/app.1cdbbe65.js","_app/immutable/chunks/index.1bb2d4f8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
