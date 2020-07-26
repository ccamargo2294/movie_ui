import React from 'react';

const MenuItem = ({ href, text }) => {
    return (
        <a href={href} className="pr3 pl3 pa3">{text}</a>
    )
}

export default MenuItem;