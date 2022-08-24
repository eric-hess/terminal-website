import { Command } from '.';
import { Config } from '../utils';

class WhoAmI implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.whoami.help}</span>
        );
    }

    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>{config.commands.whoami.value}</span>
        );
    }
}

export default WhoAmI;