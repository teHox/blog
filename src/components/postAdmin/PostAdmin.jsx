import React from "react";
import { Link } from "react-router-dom";

const AdminPost = ({ item }) => {

    return (
        <div className="admin-post__item">
            <div className="admin-post__header">
                <h2 className="admin-post__title">{item.title}</h2>
            </div>
            <div className="admin-post__img">
                <img src={item.image} alt={item.image} />
                <Link
                    to={`/post/${item.id}`}
                    className="admin-post__link"
                >
                    CHANGE POST...
                </Link>
            </div>
        </div>
    );
};

export default AdminPost;
