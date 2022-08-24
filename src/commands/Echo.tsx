import { Command } from '.';
import { Config } from '../utils';

class Echo implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.echo.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>{args.join(' ')}</span>
        );
    };
}

export default Echo;