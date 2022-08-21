import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { songs } from './songs';
import { BouncingBalls } from 'react-cssfx-loading/lib';
import { Navigation } from './modules/navigation';
import { WelcomePage } from './modules/welcome-page/welcome-page';


const Player = lazy(() => import("./modules/player"));
const Hook = lazy(() => import("./modules/user-card/user-card"));
const Context = lazy(() => import("./modules/theme-switcher/theme-switcher"));
const CV = lazy(() => import("./modules/cv/cv"));
const Home = lazy(() => import("./modules/theme-switcher/home"));
const Admin = lazy(() => import("./modules/theme-switcher/admin"));
const Dashboard = lazy(() => import("./modules/theme-switcher/dashboard"));


function App() {

	return (
		<>
			<Suspense fallback={<div className="loader"><BouncingBalls color="crimson" /></div>}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navigation />}>
							<Route index element={<Navigate to="welcome-page" />} />
							<Route path="welcome-page" element={<WelcomePage />} />
							<Route path="hook" element={<Hook userId={'3'} />} />
							<Route path="player" element={<Player songs={songs} />} />
							<Route path="context/" element={<Context />}>
								<Route index element={<Navigate to="home" />} />
								<Route path="home" element={<Home />} />
								<Route path="admin" element={<Admin />} />
								<Route path="dashboard" element={<Dashboard />} />
							</Route>
							<Route path="cv" element={<CV />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</>
	);
}

export default App;
