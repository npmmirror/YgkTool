import React from "react";
import loadable from "../../../utils/loading";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const UserRouterList = [
	{
		component: loadable(() => import("./page/home")),
		path: "/",
		exact: true,
	},
	{
		component: loadable(() => import("./page/sync")),
		path: "/sync",
		exact: true,
	},
	{
		component: loadable(() => import("./page/rePwd")),
		path: "/rePwd",
		exact: true,
	},
	{
		component: loadable(() => import("./page/reEmail")),
		path: "/reEmail",
		exact: true,
	},
];
// TODO 优化排版
export default class UserDashboard extends React.PureComponent {
	render() {
		return (
			<div className="mdui-col-md-10">
				<Router>
					<Switch>
						{UserRouterList.map((route) => (
							<Route key={route.path} {...route}></Route>
						))}
					</Switch>
				</Router>
			</div>
		);
	}
}
