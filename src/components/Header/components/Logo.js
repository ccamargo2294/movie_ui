import React from 'react';

const Logo = ({ logo, width, height }) => {
    return (
        <span>
            <img src={logo} width={width} height={height} alt="logo" />
        </span>
    );
}

export default Logo;