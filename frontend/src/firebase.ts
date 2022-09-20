// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, indexedDBLocalPersistence } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let firebaseApp: FirebaseApp;

export const getFirebaseApp = () => {
	if (firebaseApp) {
		return firebaseApp;
	}

	//get environment variables from .env file
	const env = import.meta.env;

	//treeshake all environment variables starting with VITE_firebase as firebaseConfig, remove the prefix
	const firebaseConfig = Object.fromEntries(
		Object.entries(env)
			.filter(([key]) => key.startsWith("VITE_firebase"))
			.map(([key, value]) => [key.replace("VITE_firebase_", ""), value]),
	);

	console.log({ firebaseConfig });

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	firebaseApp = app;
	return app;
};

export const auth = initializeAuth(getFirebaseApp(), {
	persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence],
	popupRedirectResolver: browserPopupRedirectResolver,
});
