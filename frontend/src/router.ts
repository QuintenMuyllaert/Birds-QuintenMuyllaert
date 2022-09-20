import { createRouter, createWebHistory, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";

/*
// Sadly vite complains about dynamic imports.
// It still works, but it's not ideal.
const route = (name: "/" | string) => {
	const nameLower = name.toLowerCase();
	const path = nameLower === "root" ? "/" : `/${nameLower}`;
	const routeName = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
	const componentName = `./pages/${routeName}.vue`;
	return {
		path,
		name: routeName,
		component: () => import(componentName),
	};
};

const routes: RouteRecordRaw[] = [route("Root"), route("About")];
*/

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Root",
		component: () => import("./pages/Root.vue"),
	},
	{
		//create 404 error page
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("./pages/NotFound.vue"),
	},
	// Page routes
	{
		path: "/about",
		name: "About",
		component: () => import("./pages/About.vue"),
	},
	{
		path: "/birds",
		name: "Birds",
		component: () => import("./pages/Birds.vue"),
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("./pages/Home.vue"),
	},
	{
		path: "/locations",
		name: "Locations",
		component: () => import("./pages/Locations.vue"),
	},
	{
		path: "/log",
		name: "Log",
		component: () => import("./pages/Log.vue"),
	},
	{
		path: "/Observations",
		name: "Observations",
		component: () => import("./pages/Observations.vue"),
	},
];

// createWebHistory
// Root => localhost:3000/ & About => localhost:3000/about

// createWebHashHistory
// Root => localhost:3000/#/  & About => localhost:3000/#/about

const router: Router = createRouter({
	history: createWebHistory(), // either use createWebHistory or createWebHashHistory.
	routes,
});

export default router;
