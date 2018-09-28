import React from 'react';
import { HeaderSection } from './styled';
import Logo from './Logo';
import Title from './Title';

const Header = (props) => {
	return (
			<HeaderSection>
				<Logo />
				<Title />
			</HeaderSection>
	);
}

export default Header;
