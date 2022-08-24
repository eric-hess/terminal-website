import React from 'react';
import Input from './Input';
import availableCommands from './commands';
import Prompt from './Prompt';
import { Config, getEnabledCommands, loadConfig } from './utils';

const App = () => {
    const [config, setConfig] = React.useState<Config|undefined>(undefined);
    const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
    const [outputHistory, setOutputHistory] = React.useState<JSX.Element[]>([]);
    
    React.useEffect(() => {
        setConfig(loadConfig());
    }, []);

    const pushCommand = (command: string) => {
        setCommandHistory([
            ...commandHistory,
            command
        ]);


        const input = command.split(' '); 

        if (getEnabledCommands(config!).includes(input[0])) {
            const commandResult: any = availableCommands[input[0] as keyof typeof availableCommands].execute(input.slice(1), config!);

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
                config &&
                (
                    <>
                        {
                            outputHistory.map((entry, index) => (
                                <div key={index}>
                                    <Prompt
                                        username={config.prompt.username}
                                    />
                                    {entry}
                                </div>
                            ))
                        }
                        <Input
                            promptUsername={config.prompt.username}
                            commandHistory={commandHistory}
                            availableCommands={Object.keys(availableCommands)}
                            pushCommand={pushCommand}
                            clearOutput={clearOutput}
                        />
                    </>
                )
            }
        </>  
    );
};

export default App;
