import { NavLink } from "react-router-dom";
import "./MainMenu.scss";

function MainMenu() {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/GetYourPizza">Get Your Pizza</NavLink>
            <NavLink to="/Orders">orders</NavLink>
		</nav>
	);
}

export default MainMenu;