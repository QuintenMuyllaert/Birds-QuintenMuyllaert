<script lang="ts">
import { defineComponent } from "vue";

//get random id
function randomId() {
	return Math.random().toString(36).substr(2, 9);
}

export default defineComponent({
	name: "Inputfield",
	props: {
		label: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: false,
		},
		value: {
			type: String,
			required: false,
		},
		placeholder: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			id: randomId(),
		};
	},
	methods: {
		onChangeInput(e: Event) {
			const target = e.target as HTMLInputElement;
			const value = target.value;
			this.$emit("input", value);
		},
	},
});
</script>

<template>
	<div>
		<input :id="id" :type="type" :value="value" :placeholder="placeholder" @change="onChangeInput" />
		<label :for="id">{{ label }}</label>
	</div>
</template>

<style lang="scss" scoped>
div {
	position: relative;
	height: fit-content;
	width: 100%;
}

input {
	margin-top: 0.8rem;
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.25rem;
	padding: 0.25rem 1rem;
	outline: 2px solid transparent;
	font-size: 1rem;
	transition: outline 0.2s ease-in-out;
	width: 100%;

	&:focus {
		outline: 2px solid var(--color-primary);
	}

	&:invalid {
		border-color: red;
		&:focus {
			outline: 2px solid #ff000055;
		}

		& + label {
			color: red;
		}
	}
}

label {
	position: absolute;
	left: 1rem;
	top: 0;
	background-color: white;
	padding: 0 5px;
	font-size: 1rem;
	color: var(--color-secondary);
}
</style>
