<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import Engagement from './Engagement.svelte';

	const engagements: ComponentProps<Engagement>[] = [
		{
			src: 'https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65',
			header: 'Google',
			href: '/case-studies/google-ecommerce-web-design',
			text: 'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership '
		},
		{
			src: 'https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65',
			header: 'Kfc',
			href: '/case-studies/kfc',
			text: 'An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership '
		},
		{
			src: 'https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65',
			header: 'Wilson',
			href: '/case-studies/wilson',
			text: 'A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study '
		},
		{
			src: 'https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&fm=webp&q=65',
			header: 'AT&T',
			href: undefined,
			text: 'Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.'
		},
		{
			src: 'https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65',
			header: 'Patagonia',
			href: '/case-studies/patagonia-ecommerce-website',
			text: 'Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study '
		}
	];
</script>

<div class="engagement-top xl:gap-6 xl:grid flex gap-0 mt-5">
	<div>00</div>
	<div class="flex justify-between flex-1">
		<div>/05</div>
		<div>●</div>
	</div>
</div>
<h2 class="pt-20 text-6xl font-bold w-min">FEATURED ENGAGEMENTS</h2>
<div class="full-width-container">
	<ul class="list-none flex gap-6 items-stretch py-32 overflow-x-scroll scrollbar-hide">
		{#each engagements as engagement}
			<li class="flex-[0_0_var(--grid-size)]">
				<Engagement {...engagement} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.engagement-top {
		grid-template-columns: var(--grid-size) 1fr;
	}

	.full-width-container {
		position: relative;
		left: calc(-1 * var(--grid-padding));
		width: calc(100% + 2 * var(--grid-padding));
	}

	.full-width-container > ul {
		padding-left: var(--grid-padding);
	}

	ul::after {
		content: '';
		width: var(--grid-padding);
		flex-shrink: 0;
	}
</style>
