import React, { useState } from "react";
import Post from "../../components/post/Post";
import { useParams } from "react-router-dom";
import Tags from "../../components/tags/Tags";
import Sidebar from "../../components/sidebar/Sidebar";
import Comment from "../../components/comment/Comment";
import { useGetOnePostQuery } from "../../store/api/api";

const FullPost = () => {
	const { id } = useParams();
	const { isLoading, data } = useGetOnePostQuery(id);
	const [active, setActive] = useState(false);

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="full-post">
					<div className="container">
						<Sidebar />
						<div className="full-post__content">
							<Post item={data} />
							<div className="full-post__buttons">
								<div className="full-post__btn">+ like</div>
								<div
									className="full-post__btn"
									onClick={() => setActive((prev) => !prev)}
								>
									+ comment
								</div>
							</div>
							{active ? (
								<div className="full-post__add">
									<textarea></textarea>
									<button>Send comment</button>
								</div>
							) : (
								""
							)}
							<div className="full-post__comments">
								{data.comments.map((comment, index) => (
									<Comment
										key={index}
										comment={comment}
										post={data}
									/>
								))}
							</div>
						</div>
						<Tags />
					</div>
				</div>
			)}
		</>
	);
};

export default FullPost;
