import { api } from "./api";

export const commentApi = api.injectEndpoints({
	endpoints: (builder) => ({
		addComment: builder.mutation({
			query: (id, item) => `/posts/${id}`,
      body: item,
			method: "PATCH",
		}),
	}),
});

export const {} = commentApi;
