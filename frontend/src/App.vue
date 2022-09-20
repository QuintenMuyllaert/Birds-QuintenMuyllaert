<script setup lang="ts"></script>

<template>
	<router-view></router-view>
</template>

<style lang="scss">
:root {
	--color-primary: #a1e8af;
	--color-secondary: #94c595;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	min-width: 100vw;
	min-height: 100vh;
	display: grid;
}

div#app {
	width: 100%;
	height: 100%;
}
</style>
