<script>
    import Spinner from "$lib/common/components/Spinner.svelte";
    import FormTextField from "$lib/auth/components/FormTextField.svelte";
    import {login} from "$lib/auth/services/auth.ts";

    let loading = false;
    let userCredentials = {
        username: "",
        password: ""
    };

    async function handleSubmit() {
        loading = true;
        await login(userCredentials);
        loading = false;
    }

</script>


<form class="auth-form" on:submit={handleSubmit}>
    <FormTextField label={"Nom d'utilisateur"} bind:value={userCredentials.username} />
    <FormTextField label={'Mot de passe'} inputType={'password'} bind:value={userCredentials.password} />
    {#if !loading}
        <button class="auth-submit-button" type="submit" on:click={handleSubmit}> Me connecter !</button>
        {:else}
        <Spinner/>
    {/if}
</form>