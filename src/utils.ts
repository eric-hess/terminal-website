export interface Config {
    prompt: {
        username: string
    },
    commands: {
        about: {
            enabled: boolean,
            help: string,
            value: string   
        },
        contact: {
            enabled: boolean,
            help: string,
            email: string,
        },
        date: {
            enabled: boolean,
            help: string
        },
        github: {
            enabled: boolean,
            help: string,
            value: string
        },
        help: {
            enabled: boolean,
            help: string
        },
        uuid: {
            enabled: boolean,
            help: string
        },
        weather: {
            enabled: boolean,
            help: string
        },
        whoami: {
            enabled: boolean,
            help: string,
            value: string
        }
    }
}

export const loadConfig = (): Config => {
    const fetch = require('sync-fetch');
    
    const config = fetch(`${window.location.origin}/config.json`).json();

    return config;
}

export const getEnabledCommands = (config: Config): string[] => {
    return Object
            .keys(config.commands)
            .filter(entry => config.commands[entry as keyof typeof config.commands].enabled);
}