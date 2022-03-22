import "./App.css"
import {Redirect, Route, Switch} from "react-router"
import {Home} from "../Home/Home"
import {NavBar} from "../NavBar/NavBar"
import {Favourites} from "../Favourites/Favourites"

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path={"/"}>
					<Redirect to={"/home"} />
				</Route>
				<Route path={"/home"}>
					<Home />
				</Route>
				<Route path={"/favourites"}>
					<Favourites />
				</Route>
			</Switch>
		</>
	)
}

export default App
