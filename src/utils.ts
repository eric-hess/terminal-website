export interface Config {
    github: string;
    about: string;
    whoami: string;
}

export const loadConfig = (): Config => {
    const fetch = require('sync-fetch');
    
    const config = fetch(`${window.location.origin}/config.json`).json();

    return config;
}