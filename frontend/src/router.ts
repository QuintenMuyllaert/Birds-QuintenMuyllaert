import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Root",
		component: () => import("./pages/Root.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("./pages/About.vue"),
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
