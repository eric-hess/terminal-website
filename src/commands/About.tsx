import { Command } from '.';
import { Config } from '../utils';

class About implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.about.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>{config.commands.about.value}</span>
        );
    };
}

export default About;