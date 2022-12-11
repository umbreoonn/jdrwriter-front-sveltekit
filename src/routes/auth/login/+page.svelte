<script>
	import LoginForm from '$lib/auth/components/LoginForm.svelte';
	import AuthLink from '$lib/auth/components/AuthLink.svelte';
	export let form;
</script>

<LoginForm form={form}/>
<AuthLink
	label="Vous n'avez pas encore de compte?"
	href="/auth/register"
	linkText="Inscrivez vous!"
/>
