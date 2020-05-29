import React from 'react';


const hrefEmpty = (href) => {
    const check = href.indexOf('/')
    if (check !== -1) { return true; }
    return false;
}

const Button = ({ hrefLink, additionalCssClass, caption }) => {
    return (
        <a
            href={(hrefEmpty(hrefLink) ? "/#" : `${hrefLink}`)}
            className={`btn ${additionalCssClass}`}
        >
            {caption}
        </a>
    )
}

export default Button;