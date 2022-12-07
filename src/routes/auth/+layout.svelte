<body class="auth-page">
	<section class="left-part" />
	<section class="right-part">
		<slot />
	</section>
</body>

<style lang="scss">
	@import 'src/styles/vars.scss';

	.left-part {
		width: 70vw;
		height: 100%;
		background-color: $background-light;
		background-size: 90%;
		background-repeat: no-repeat;
		background-position: 75% 50%;
		background-image: url('../auth.svg');
	}

	.right-part {
		width: 50vw;
		height: 100%;
		box-shadow: inset 8px 0 1px -4px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.auth-page {
		display: flex;
		height: 100vh;
		width: 100vw;
	}

	@media (max-width: 575.98px) {
		.left-part {
			display: none;
		}

		.right-part {
			width: 100vw;
		}
	}
</style>
