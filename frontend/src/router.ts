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
		path: "/birds",
		name: "Birds",
		component: () => import("./pages/Birds/index.vue"),
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("./pages/Home/index.vue"),
	},
	{
		path: "/locations",
		name: "Locations",
		component: () => import("./pages/Locations/index.vue"),
	},
	{
		path: "/log",
		name: "Log",
		component: () => import("./pages/Log/index.vue"),
	},
	{
		path: "/Observations",
		name: "Observations",
		component: () => import("./pages/Observations/index.vue"),
	},
	// Auth routes
	//redirect /auth to /auth/login
	{
		path: "/auth",
		redirect: "/auth/login",
	},
	{
		path: "/auth/account",
		name: "Account",
		component: () => import("./pages/Auth/Account/index.vue"),
	},
	{
		path: "/auth/forgot-password",
		name: "ForgotPassword",
		component: () => import("./pages/Auth/ForgotPassword/index.vue"),
	},
	{
		path: "/auth/login",
		name: "Login",
		component: () => import("./pages/Auth/Login/index.vue"),
	},
	{
		path: "/auth/register",
		name: "Register",
		component: () => import("./pages/Auth/Register/index.vue"),
	},
	{
		path: "/auth/user",
		name: "User",
		component: () => import("./pages/Auth/User/index.vue"),
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
