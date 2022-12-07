<script>
	import RegisterForm from '$lib/auth/components/RegisterForm.svelte';
	import AuthLink from '$lib/auth/components/AuthLink.svelte';
</script>

<RegisterForm />
<AuthLink label="Vous avez déjà un compte?" href="/auth/login" linkText="Connectez vous!" />
