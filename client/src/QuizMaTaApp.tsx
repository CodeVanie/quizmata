import { Outlet } from "react-router";
import AppWrapper from "./layouts/AppWrapper";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main";

export default function QuizMaTaApp() {

	return (
		<AppWrapper>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</AppWrapper>
	)
}