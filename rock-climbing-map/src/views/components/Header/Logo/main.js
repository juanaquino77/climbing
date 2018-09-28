import React from 'react';
import { LogoSection } from './styled';
import logo from '../../../../assets/images/logo.png';

const Logo = (props) => {
    return (
      <LogoSection>
        <img height="100%" src={ logo } />
      </LogoSection>
    );
}

export default Logo;