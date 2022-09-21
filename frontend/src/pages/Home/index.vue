<script lang="ts">
export default {};
</script>

<template>
	<div class="main-grid">
		<nav class="desktop">
			<img src="/android-chrome-512x512.png" alt="Birds Logo" />
			<div class="empty"></div>
			<ul class="">
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/birds">Birds</a>
				</li>
				<li>
					<a href="/logbook">Logbook</a>
				</li>
				<li>
					<a href="/observations">Observations</a>
				</li>
				<li>
					<a href="/contact">Quinten</a>
				</li>
			</ul>
		</nav>

		<main><h1>Home</h1></main>

		<nav class="mobile">
			<ul>
				<li>
					<a href="/home">
						<img src="/ico/home.svg" alt="home" />
					</a>
				</li>
				<li>
					<a href="/birds">
						<img src="/ico/feather.svg" alt="birds" />
					</a>
				</li>
				<li>
					<a href="/logbook">
						<img src="/ico/clipboard.svg" alt="logbook" />
					</a>
				</li>
				<li>
					<a href="/observations">
						<img src="/ico/scroll.svg" alt="observations" />
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
.main-grid {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	height: 100%;
	gap: 1rem;
}

main {
	padding-inline: 1rem;
}

@import url("https://use.typekit.net/een7orc.css");
nav.mobile {
	padding: 0.5rem 1rem;
	//add topshadow
	box-shadow: 0.5rem 0 1rem rgba(0, 0, 0, 0.1);

	ul {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	li {
		padding: 0.5rem;
	}
}
nav.desktop {
	display: grid;

	align-items: center;
	grid-template-columns: auto 1fr auto;
	//add bottomshadow
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 0.5rem 1rem;
	img {
		height: 3rem;
	}

	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	a {
		font-family: din-condensed, sans-serif;
		font-weight: 400;
		font-style: normal;
	}
}
</style>
