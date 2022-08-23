import React from 'react';
import Input from './Input';
import availableCommands from './commands';
import Prompt from './Prompt';

const App = () => {
    const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
    const [outputHistory, setOutputHistory] = React.useState<JSX.Element[]>([]);
    
    const pushCommand = (command: string) => {
        setCommandHistory([
            ...commandHistory,
            command
        ]);


        const input = command.split(' '); 

        if (availableCommands.hasOwnProperty(input[0])) {
            const commandResult: any = availableCommands[input[0] as keyof typeof availableCommands](input.slice(1));

            setOutputHistory([
                ...outputHistory,
                (
                    <>
                        {command}<br/>
                        {commandResult}<br/>
                    </>
                )
            ]);
        } else {
            setOutputHistory([
                ...outputHistory,
                (
                    <>
                        {command}<br/>
                        Command not found<br/>
                    </>
                )
            ]);
        }
    };

    const clearOutput = () => {
        setOutputHistory([]);
    };
    
    return (
        <>
            {
                outputHistory.map((entry, index) => (
                    <div key={index}>
                        <Prompt/>
                        {entry}
                    </div>
                ))
            }
            <Input
                commandHistory={commandHistory}
                availableCommands={Object.keys(availableCommands)}
                pushCommand={pushCommand}
                clearOutput={clearOutput}
            />
        </>
    );
};

export default App;
