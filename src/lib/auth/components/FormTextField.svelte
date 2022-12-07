<script lang="ts">
	export let label: string | null;
	export let inputType = 'text';
	export let value: string | null;

	function handleInput(event: InputEvent) {
		const element = event.target as HTMLInputElement;
		value = element.value;
	}
</script>

<input
	required
	class="auth-text-input"
	type={inputType}
	placeholder={label}
	{value}
	on:input={handleInput}
/>
