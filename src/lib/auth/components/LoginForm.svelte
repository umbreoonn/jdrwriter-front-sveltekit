<script lang="ts">
	import Spinner from '$lib/common/components/Spinner.svelte';
	import FormTextField from '$lib/auth/components/FormTextField.svelte';
	import type { UserCredentials } from '$lib/auth/models/User';

	export let form;
	let loading = false;
	const userCredentials: UserCredentials = {
		username: '',
		password: ''
	};
</script>

<form class="auth-form" method="POST" action="/auth/login">
	<FormTextField
			label={"Nom d'utilisateur"}
			bind:value={userCredentials.username}
			name={'username'}/>
	<FormTextField
			name={'password'}
		label={'Mot de passe'}
		inputType={'password'}
		bind:value={userCredentials.password}
	/>
	{#if !loading}
		<button class="auth-submit-button" type="submit">
			Me connecter !</button
		>
	{:else}
		<Spinner />
	{/if}
	{#if form?.error}
		<p>{form?.error}</p>
	{/if}
</form>
