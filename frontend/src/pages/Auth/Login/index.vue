<script lang="ts">
import Inputfield from "../../../components/ui/Inputfield.vue";
import Button from "../../../components/ui/Button.vue";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

let email: string = "";
let password: string = "";

export default {
	components: {
		Inputfield,
		Button,
	},
	methods: {
		onChangeEmail(e: string) {
			email = e;
		},
		onChangePassword(e: string) {
			password = e;
		},
		onClickLogin(e: Event) {
			e.preventDefault();
			console.log("login");

			//login using firebase with email and password
			//if success, redirect to home page
			//if error, show error message
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log("success", { user });
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log("error", errorCode, errorMessage);
					alert(errorMessage);
				});
		},
	},
};
</script>

<template>
	<div class="center">
		<h1>Login</h1>
		<form>
			<main>
				<Inputfield label="Email" placeholder="john.doe@example.com" type="email" @input="onChangeEmail" />
				<Inputfield label="Password" type="password" @input="onChangePassword" />
				<Button label="Login" @click="onClickLogin" />
			</main>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.center {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
}

form {
	display: grid;
	place-items: center;
	width: min(100%, 20rem);
}

main {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
}
</style>
