import { gql } from 'graphql-request';

const POST_FRAGMENT = gql`
	fragment PostDetails on Post {
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
`;

export const postsQuery = gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts {
			...PostDetails
		}
	}
`;

export const postQuery = gql`
	${POST_FRAGMENT}
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			...PostDetails
		}
	}
`;

const PORTFOLIO_FRAGMENT = gql`
	fragment ProjectDetails on Project {
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
`;

export const portfolioQuery = gql`
	${PORTFOLIO_FRAGMENT}
	query GetProjects {
		projects(first: 3, orderBy: date_DESC) {
			...ProjectDetails
		}
	}
`;

export const projectQuery = gql`
	${PORTFOLIO_FRAGMENT}
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			...ProjectDetails
		}
	}
`;
