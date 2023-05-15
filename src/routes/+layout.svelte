<script>
	import '../app.css';
	import Navbar from '../lib/components/layout/Navbar.svelte';
</script>

<Navbar />
<main class="bg-neutral-50 scroll-smooth text-gray-700 selection:text-white selection:bg-gray-800">
	<slot />
</main>
