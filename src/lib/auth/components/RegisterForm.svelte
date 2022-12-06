<script>
    import Spinner from "$lib/common/components/Spinner.svelte";
    import FormTextField from "$lib/auth/components/FormTextField.svelte";

    let loading = false;

    function handleSubmit() {
        loading = true;
    }

</script>

<form class="auth-form" on:submit={handleSubmit}>
    <FormTextField label={'Adresse e-mail'} />
    <FormTextField label={"Nom d'utilisateur"} />
    <FormTextField label={'Mot de passe'} inputType={'password'} />
    <FormTextField label={'Confirmez le mot de passe'} inputType={'password'} />
    {#if !loading}
        <button class="auth-submit-button" type="submit" on:click={handleSubmit}> S'inscrire !</button>
    {:else}
        <Spinner/>
    {/if}
</form>