<script context="module">
	import { client } from '$lib/graphql-client';
	import { postQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { post } = await client.request(postQuery, variables);

		// console.log(post);

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;

	const { title, description, date, tags, author } = post;
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<div>
	{title}
</div>
