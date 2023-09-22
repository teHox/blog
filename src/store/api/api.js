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
			query: () => "/posts?_sort=views&_order=desc",
		}),
		getOnePost: builder.query({
			query: (id) => ({ url: `/posts/${id}`}),
		}),
		createPost: builder.mutation({
			query: (postInfo) => ({
				body: postInfo,
				url: "/posts",
				method: "POST",
			})
		}),
		updatePost: builder.mutation({
			query: ({id, postInfo}) => ({
				body: postInfo,
				url: `/posts/${id}`,
				method: "PATCH",
			})
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `posts/${id}`,
				method: 'DELETE',
			})
		}),
	}),
});

export const {
	useGetAllPostsQuery,
	useGetOnePostQuery,
	useCreatePostMutation,
	useUpdatePostMutation,
	useDeletePostMutation,
} = api;
