import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { adminInfo } from "./adminInfo";

const Admin = () => {
	return (
		<div className="container">
			<div className="admin">
				<h1 className="admin__title">Hello, admin!</h1>
			</div>
			<Navbar adminInfo={adminInfo} />
		</div>
	);
};

export default Admin;
