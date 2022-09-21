<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Button",
	props: {
		label: {
			type: String,
			required: true,
		},
		click: {
			type: Function,
			required: false,
		},
	},
});
</script>

<template>
	<button
		@click="
			{
				click;
			}
		">
		{{ label }}
	</button>
</template>

<style lang="scss" scoped>
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
