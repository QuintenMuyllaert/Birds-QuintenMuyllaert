<script lang="ts">
import Inputfield from "../../../components/ui/Inputfield.vue";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

let email: string = "";
let password: string = "";
let confirmPassword: string = "";

const onClickRegister = (e: Event) => {
	e.preventDefault();
	console.log("register");

	if (password !== confirmPassword) {
		alert("Passwords do not match");
		return;
	}

	createUserWithEmailAndPassword(auth, email, password)
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
};

export default {
	components: {
		Inputfield,
	},
	methods: {
		onClickRegister,
		onChangeEmail(e: string) {
			email = e;
		},
		onChangePassword(e: string) {
			password = e;
		},
		onChangeConfirmPassword(e: string) {
			confirmPassword = e;
		},
	},
};
</script>

<template>
	<div class="center">
		<h1>Register</h1>
		<form>
			<main>
				<Inputfield label="Email" placeholder="john.doe@example.com" type="email" @input="onChangeEmail" />
				<Inputfield label="Password" type="password" @input="onChangePassword" />
				<Inputfield label="Confirm Password" type="password" @input="onChangeConfirmPassword" />
				<button type="submit" @click="onClickRegister">Register</button>
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

button {
	width: 100%;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	background-color: var(--color-secondary);
	color: white;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	outline: 2px solid transparent;
	&:hover {
		background-color: var(--color-primary);
	}
	&:focus {
		outline: 2px solid var(--color-primary);
	}
}
</style>
