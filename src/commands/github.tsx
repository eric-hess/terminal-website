import { loadConfig } from '../utils';

const github = (args: string[]) => {
    const config = loadConfig();
    const githubUrl = `https://github.com/${config.github}`;

    return (
        <a href={githubUrl} target="blank">{githubUrl}</a>
    );
};

export default github;