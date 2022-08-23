import availableCommands from '.';

const help = (args: string[]) => {
    return `Available commands:\n${Object.keys(availableCommands).join(' ')}`;
};

export default help;