import { useEffect } from 'react';
import Button from '../Button/Button';

const Header = () => {

	const tg = window.Telegram.WebApp;

	useEffect(() => {
		tg.ready();
	}, [])

	const onClose = () => {
		tg.close();
	}

	return (
		<header className="header">
			<Button onClick={onClose} />
			<p className="header__username">{tg.initDataUnsafe?.user?.usename}</p>
		</header>
	)
}

export default Header;