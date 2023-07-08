import axios from "axios";

export const PostServices = {
	async getTags() {
		const responce = await axios.get(
			"http://localhost:4200/tags"
		);

		return responce.data;
	},
};
