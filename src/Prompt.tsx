import React from 'react';

const Prompt = () => {
    return (
        <span className="prompt">
            <span className="prompt-user">guest</span>
            <span>@</span>
            <span className="prompt-host">{window.location.hostname}</span>
            <span>:$ ~</span>
        </span>
    );
};

export default Prompt;