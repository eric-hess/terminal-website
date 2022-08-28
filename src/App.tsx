import React from 'react';
import Input from './Input';
import availableCommands from './commands';
import Prompt from './Prompt';
import { Config, getEnabledCommands, loadConfig, setFavicon, setTitle } from './utils';
import { Box } from '@mui/material';

const App = () => {
    const [config, setConfig] = React.useState<Config|undefined>(undefined);
    const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
    const [outputHistory, setOutputHistory] = React.useState<JSX.Element[]>([]);
    
    React.useEffect(() => {
        const config = loadConfig();
        setConfig(config);

        setTitle(config.title);
        setFavicon(config.favicon.href, config.favicon.type);
    }, []);

    const pushCommand = (command: string) => {
        setCommandHistory([
            ...commandHistory,
            command
        ]);

        const input = command.split(' ');

        const commandResult = getEnabledCommands(config!).includes(input[0])
            ? availableCommands[input[0] as keyof typeof availableCommands].execute(input.slice(1), config!)
            : (<>Command not found<br/></>);
        
        setOutputHistory([
            ...outputHistory,
            (
                <>
                    <Box component="span" sx={{height: '19px'}}>{command}</Box><br/>
                    {commandResult}
                </>
            )
        ]);
    };

    const clearOutput = () => {
        setOutputHistory([]);
    };
    
    return (
        <>
            {
                config && (
                    <Box
                        sx={{
                            height: '100%',
                            margin: '0px',
                            padding: '16px',
                            backgroundColor: config.theme.backgroundColor,
                            color: config.theme.textColor,
                            '& a': {color: config.theme.linkColor}
                        }}
                    >
                        <Box
                            sx={{
                                border: '2px solid',
                                borderColor: config.theme.borderColor,
                                borderRadius: '2px',
                                height: '100%',
                                padding: '16px',
                                overflow: 'auto',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                '&::-webkit-scrollbar': {display: 'none'}
                            }}
                        >
                            {
                                outputHistory.map((entry, index) => (
                                    <Box key={index}>
                                        <Prompt
                                            username={config.prompt.username}
                                            usernameTextColor={config.theme.promptUserTextColor}
                                            hostTextColor={config.theme.promptHostTextColor}
                                        />
                                        {entry}
                                    </Box>
                                ))
                            }
                            <Input
                                promptUsername={config.prompt.username}
                                promptUsernameTextColor={config.theme.promptUserTextColor}
                                promptHostTextColor={config.theme.promptHostTextColor}
                                inputTextColor={config.theme.inputTextColor}
                                commandHistory={commandHistory}
                                availableCommands={getEnabledCommands(config)}
                                pushCommand={pushCommand}
                                clearOutput={clearOutput}
                            />
                        </Box>
                    </Box>
                )
            }
        </>
    );
};

export default App;
