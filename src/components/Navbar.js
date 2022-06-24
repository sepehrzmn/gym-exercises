import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logo from "../assets/images/Logo.png";

const Navbar = () => {
	return (
		<Stack
			direction="row"
			justifyContent="space-around"
			sx={{
				gap: {
					sm: "122px",
					xs: "40px",
				},
				mt: {
					ms: "32px",
					xs: "24px",
				},
				justifyContent: "none",
			}}
			px="20px"
		>
			<Link to="/">
				<img
					src={logo}
					alt="logo"
					style={{
						width: "48px",
						height: "48px",
						margin: "0 20px",
					}}
				/>
			</Link>
			<Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
				<Link to="/" style={{ borderBottom: "3px solid #FF2625" }}>
					Home
				</Link>
				<a href="#exercises">Exercises</a>
			</Stack>
		</Stack>
	);
};

export default Navbar;
