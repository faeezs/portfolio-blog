<script context="module">
	import { client } from '$lib/graphql-client';
	// import { gql, GraphQLClient } from 'graphql-request';
	import { gql } from 'graphql-request';

	export const load = async () => {
		// const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

		const query = gql`
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

		const { posts } = await client.request(query);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<pre>{JSON.stringify(posts, null, 2)}</pre>
