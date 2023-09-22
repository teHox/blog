import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import TagAdmin from "../pages/admin/TagAdmin";
import CreatePost from "../components/createPost/createPost";
import FetchFullPost from "../components/fetchFullPost/FetchFullPost";

const Router = () => {
	const routes = [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/post/:id",
			element: <FetchFullPost />,
		},
		{
			path: "/admin",
			element: <Admin />,
		},
		{
			path: "/admin/create-post",
			element: <CreatePost />,
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
