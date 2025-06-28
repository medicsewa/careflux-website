import { Outlet } from "react-router";
import FrontendFooter from "@/components/frontend-footer";
import FrontendHeader from "@/components/frontend-header";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const FrontendLayout = () => {
	useEffect(() => {
		const tagManagerArgs = {
			gtmId: "G-Q5GKCB2GNH",
		};
		TagManager.initialize(tagManagerArgs);
	}, []);
	return (
		<div className="flex flex-col min-h-screen">
			<FrontendHeader />
			<Outlet />
			<FrontendFooter />
		</div>
	);
};

export default FrontendLayout;
