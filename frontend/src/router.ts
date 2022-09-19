import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

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

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
