<script lang="ts">
    export let label: string;
    export let href: string;
    export let linkText: string;
</script>

<span class="auth-link-container">
  <p>{label}</p>  <a class="auth-link" href="{href}">{linkText}</a>
</span>