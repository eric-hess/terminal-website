import { loadConfig } from '../utils';

const about = (args: string[]) => {
    const config = loadConfig();

    return config.about;
};

export default about;