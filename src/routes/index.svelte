<script context="module">
	import { client } from '$lib/graphql-client';
	// import { gql, GraphQLClient } from 'graphql-request';
	import { gql } from 'graphql-request';

	export const load = async () => {
		// const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

		const postQuery = gql`
			query GetPosts {
				posts {
					title
					slug
					description
					date
					tags
					author {
						name
						image {
							url
							width
							height
						}
					}
				}
			}
		`;

		const portfolioQuery = gql`
			query GetPortfolios {
				portfolios(first: 3, orderBy: date_DESC) {
					title
					tags
					slug
					description
					date
					coverImage {
						url
						width
						height
					}
				}
			}
		`;

		const { posts } = await client.request(postQuery);
		const { portfolios } = await client.request(portfolioQuery);

		return {
			props: {
				posts,
				portfolios
			}
		};
	};
</script>

<script>
	import { toggle_class } from 'svelte/internal';

	export let posts;
	export let portfolios;
</script>

<!-- <pre>{JSON.stringify(posts, null, 2)}</pre> -->
<div>
	{#each posts as { title, slug, description, date, tags, author }}
		<p>{title} by, {author[0].name}</p>
	{/each}
</div>

<br />

<div>
	{#each portfolios as { title, tags, slug, description, date, coverimage }}
		<p>{title}: in categories: {tags}</p>
	{/each}
</div>
