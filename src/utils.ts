export interface Config {
    title: string,
    prompt: {
        username: string
    },
    commands: {
        about: {
            enabled: boolean,
            help: string,
            value: string   
        },
        apod: {
            enabled: boolean,
            help: string,
            title: string,
            description: string
        },
        contact: {
            enabled: boolean,
            help: string,
            email: string,
        },
        echo: {
            enabled: boolean,
            help: string
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
        location: {
            enabled: boolean,
            help: string,
            ip: string,
            provider: string,
            country: string,
            region: string,
            city: string
        },
        qrcode: {
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