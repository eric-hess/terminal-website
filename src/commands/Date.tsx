import { Command } from '.';
import { Config } from '../utils';

class Date implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.date.help}</span>
        );
    }

    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>{new Date().toString()}</span>
        );    
    }
}

export default Date;