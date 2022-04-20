import './Header.scss';
import { GiFullPizza } from 'react-icons/gi';

function Header() {
	return (
		<header>
			<div className='title'><GiFullPizza /> One Free Pizza</div>
			<div className='author'></div>
		</header>
	);
}

export default Header;