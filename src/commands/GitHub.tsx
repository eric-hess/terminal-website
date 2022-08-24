import { Command } from '.';
import { Config } from '../utils';

class GitHub implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.github.help}</span>
        );
    }

    public execute(args: string[], config: Config): JSX.Element {
        const githubUrl = `https://github.com/${config.commands.github.value}`;

        return (
            <a href={githubUrl} target="blank">{githubUrl}</a>
        );
    }
}

export default GitHub;