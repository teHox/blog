import React, { useState} from 'react';
import {useUpdatePost} from "../../hooks/useUpdatePost";

const AddComment = ({id, data}) => {
    const [comment, setComment] = useState("");

    const {postInfo, setPostInfo, UpdatePost} = useUpdatePost(data);

    const handleSendComment = (e) =>{
        e.preventDefault();
        if (postInfo === ""){
            throw new Error();
        } else {
            setPostInfo({...postInfo, comments:[...data.comments, comment]});
            UpdatePost({id, postInfo}).then(()=>{
                setComment("");
            })
        }
    }

    return (
        <div className="full-post__add">
            <textarea value={comment} onChange={e => setComment(e.target.value)}/>
            <button onClick={handleSendComment}>Send comment</button>
        </div>
    );
};

export default AddComment;