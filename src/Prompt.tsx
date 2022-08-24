import React from 'react';

interface Props {
    username: string;
}

const Prompt = (props: Props) => {
    return (
        <span className="prompt">
            <span className="prompt-user">{props.username}</span>
            <span>@</span>
            <span className="prompt-host">{window.location.hostname}</span>
            <span>:$ ~</span>
        </span>
    );
};

export default Prompt;