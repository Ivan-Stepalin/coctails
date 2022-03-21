import {NavLink} from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
	return (
		<nav className={`navigation_header`}>
			<ul className={`list navigation__links navigation__links_header`}>
				<li>
					<NavLink
						exact
						to="/home"
						className={`link navigation__link navigation__link_header`}
						activeClassName={`navigation__link_header_active`}>
						Main Page
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/favourites"
						className={`link navigation__link navigation__link_header`}
						activeClassName={`navigation__link_header_active`}>
						Favourites
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
