import { loadConfig } from '../utils';

const whoami = (args: string[]) => {
    const config = loadConfig();

    return config.whoami;
};

export default whoami;