import {Box, Input as MuiInput } from '@mui/material';
import React from 'react';
import Prompt from './Prompt';

interface Props {
    promptUsername: string;
    availableCommands: string[];
    commandHistory: string[];
    promptUsernameTextColor: string;
    promptHostTextColor: string;
    inputTextColor: string;
    pushCommand: (command: string) => void;
    clearOutput: () => void;
};

const Input = (props: Props) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [currentHistoryCommandIndex, setCurrentHistoryCommandIndex] = React.useState<number|undefined>(undefined);
    const inputRef = React.useRef<null|HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.scrollIntoView();
        }
    }, [props.commandHistory]);

    const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.code === '13') {
            event.preventDefault();

            props.pushCommand(inputValue);
            setInputValue('');
            setCurrentHistoryCommandIndex(undefined)
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();

            if (props.commandHistory.length === 0 || (currentHistoryCommandIndex === undefined && event.key === 'ArrowDown')) {
                return;
            }

            let currentIndex = currentHistoryCommandIndex !== undefined ? currentHistoryCommandIndex : 0;

            if (event.key === 'ArrowUp') {
                currentIndex++;
            } else {
                currentIndex--;
            }

            if (currentIndex > props.commandHistory.length) {
                return;
            } else if (currentIndex === 0) {
                setInputValue('');
                setCurrentHistoryCommandIndex(undefined);
            } else {
                setInputValue(props.commandHistory[props.commandHistory.length - currentIndex]);
                setCurrentHistoryCommandIndex(currentIndex);
            }
        } else if (event.key === 'Tab') {
            event.preventDefault();

            const filteredAvailableCommands = props.availableCommands.filter(entry => entry.startsWith(inputValue));

            if (filteredAvailableCommands.length === 0 || filteredAvailableCommands.length >= 2) {
                return;
            } else {
                setInputValue(filteredAvailableCommands[0]);
            }
        } else if (event.key === 'c' && event.ctrlKey) {
            event.preventDefault();
      
            setInputValue('');
            setCurrentHistoryCommandIndex(undefined);
        } else if (event.key === 'l' && event.ctrlKey) {
            props.clearOutput();
        }
    };
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <Prompt
                username={props.promptUsername}
                usernameTextColor={props.promptUsernameTextColor}
                hostTextColor={props.promptHostTextColor}
            />
            <MuiInput
                sx={{
                    color: props.inputTextColor,
                    fontFamily: 'CascadiaCode',
                    appearance: 'auto',
                    fontSize: '100%',
                    flexGrow: '1',
                    height: '19px'
                }}
                disableUnderline
                ref={inputRef}
                type="text"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                autoFocus
                onKeyDown={onSubmit}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </Box>
    );
};

export default Input;