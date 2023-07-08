import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import FullPost from "../pages/full-post/FullPost";
import Admin from "../pages/admin/Admin";
import PostAdmin from "../pages/admin/PostAdmin";
import TagAdmin from "../pages/admin/TagAdmin";

const Router = () => {
	const routes = [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/post/:id",
			element: <FullPost />,
		},
		{
			path: "/admin",
			element: <Admin />,
		},
		{
			path: "/admin/create-post",
			element: <PostAdmin />,
		},
		{
			path: "/admin/create-tag",
			element: <TagAdmin />,
		},
	];

	return (
		<Routes>
			{routes.map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	);
};

export default Router;
