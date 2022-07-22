<script context="module">
	import { client } from '$lib/graphql-client';
	import { projectQuery } from '$lib/graphql-queries';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(projectQuery, variables);

		// console.log(project);

		return {
			props: {
				project
			}
		};
	};
</script>

<script>
	export let project;

	const { title, tags, slug, description, date, coverimage } = project;
</script>

<svelte:head>
	<title>Portfolio | {title}</title>
</svelte:head>

<div>
	{title}
</div>
