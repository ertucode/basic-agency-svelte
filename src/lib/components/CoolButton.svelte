<script lang="ts">
	export let text: string;
</script>

<button
	class="text-current font-bold py-3 px-12 pill rounded-full border-current border overflow-hidden leading-4 relative isolate hover:text-white"
>
	{text}
</button>

<style>
	button {
		transition: border-color 650ms ease-out, color 250ms ease-out;
	}
	button::before {
		content: '';
		inset: 0;
		top: calc(100% + 1rem);
		position: absolute;
		background-color: rgb(58, 45, 45);
		transition: top 250ms;
		z-index: -1;
	}
	button:hover::before {
		top: 0;
	}
</style>
