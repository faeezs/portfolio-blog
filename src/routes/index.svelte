<script context="module">
	import { client } from '$lib/graphql-client';
	// import { gql, GraphQLClient } from 'graphql-request';
	import { gql } from 'graphql-request';
	import { postsQuery, portfolioQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const [postsReq, projectsReq] = await Promise.all([
			client.request(postsQuery),
			client.request(portfolioQuery)
		]);

		const { posts } = postsReq;
		const { projects } = projectsReq;

		return {
			props: {
				posts,
				projects
			}
		};
	};
</script>

<script>
	// import { toggle_class } from 'svelte/internal';

	export let posts;
	export let projects;
</script>

<!-- <pre>{JSON.stringify(posts, null, 2)}</pre> -->
<div>
	{#each posts as { title, slug, description, date, tags, author }}
		<ul>
			<a href={`/blog/${slug}`}>{title} by, {author[0].name}</a>
		</ul>
	{/each}
</div>

<br />

<div>
	{#each projects as { title, tags, slug, description, date, coverimage }}
		<ul><a href={`/portfolio/${slug}`}>{title}: {date}</a></ul>
	{/each}
</div>
