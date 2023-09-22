import React, { useState} from "react";
import Post from "../../components/post/Post";
import Tags from "../../components/tags/Tags";
import Sidebar from "../../components/sidebar/Sidebar";
import Comment from "../../components/comment/Comment";
import AddComment from "../../components/addComment/AddComment";
import {useUpdatePost} from "../../hooks/useUpdatePost";

const FullPost = ({data, active, setActive, id}) => {
	const [likes, setLikes] = useState(data.likes);

	const {postInfo, setPostInfo, UpdatePost} = useUpdatePost(data);

	const handleUpdatePost = (e) =>{
		e.preventDefault();
		if (postInfo === ""){
			throw new Error();
		} else {
			setLikes(likes + 1);
			setPostInfo({...postInfo, likes: likes});
			UpdatePost({id, postInfo})
		}
	}

	console.log(likes);

	return (
		<>
				<div className="full-post">
					<div className="container">
						<Sidebar />
						<div className="full-post__content">
							<Post item={data} likes={likes}/>
							<div className="full-post__buttons">
								<div onClick={handleUpdatePost} className="full-post__btn">+ like</div>
								<div
									className="full-post__btn"
									onClick={() => setActive((prev) => !prev)}
								>
									+ comment
								</div>
							</div>
							{active ? (
								<AddComment data={data} id={id}/>
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
		</>
	);
};

export default FullPost;
