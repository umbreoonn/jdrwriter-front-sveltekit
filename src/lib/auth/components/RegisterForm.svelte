<script lang="ts">
	import Spinner from '$lib/common/components/Spinner.svelte';
	import FormTextField from '$lib/auth/components/FormTextField.svelte';
	import type { UserRegisterForm } from '$lib/auth/models/User';

	let loading = false;

	const userRegister: UserRegisterForm = {
		mail: '',
		username: '',
		password: '',
		passwordConfirmation: ''
	};

	function handleSubmit() {
		loading = true;
	}
</script>

<form class="auth-form" on:submit={handleSubmit}>
	<FormTextField label={'Adresse e-mail'} value={userRegister.mail} />
	<FormTextField label={"Nom d'utilisateur"} value={userRegister.username} />
	<FormTextField label={'Mot de passe'} inputType={'password'} value={userRegister.password} />
	<FormTextField
		label={'Confirmez le mot de passe'}
		inputType={'password'}
		value={userRegister.passwordConfirmation}
	/>
	{#if !loading}
		<button class="auth-submit-button" type="submit" on:click={handleSubmit}> S'inscrire !</button>
	{:else}
		<Spinner />
	{/if}
</form>
