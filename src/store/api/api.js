import {
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4200";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getAllPosts: builder.query({
			query: () => "/posts",
		}),
		getOnePost: builder.query({
			query: (id) => ({ url: `/posts/${id}` }),
		}),
	}),
});

export const {
	useGetAllPostsQuery,
	useGetOnePostQuery,
} = api;
