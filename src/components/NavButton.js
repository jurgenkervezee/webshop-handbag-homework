import React from 'react';

function NavButton({buttonContent, disabled}) {
    return (
        <button disabled={disabled}>{buttonContent}</button>
    )
}

export default NavButton;