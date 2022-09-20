<script lang="ts">
import Inputfield from "../../../components/ui/Inputfield.vue";

export default {
	components: {
		Inputfield,
	},
};
</script>

<template>
	<div class="center">
		<h1>Register</h1>
		<form>
			<main>
				<Inputfield label="Email" placeholder="john.doe@example.com" type="email" />
				<Inputfield label="Username" placeholder="John Doe" />
				<Inputfield label="Password" type="password" />
				<Inputfield label="Confirm Password" type="password" />
				<button type="submit">Register</button>
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
}

main {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
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
