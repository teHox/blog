import { api } from "./api";

export const tagsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTags: builder.query({
			query: () => "/tags",
		}),
	}),
});

export const { useGetTagsQuery } = tagsApi;
