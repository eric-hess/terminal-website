import { Command } from '.';
import { Config } from '../utils';
import { v4 as uuidv4 } from 'uuid';

class UUID implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.uuid.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>{uuidv4()}</span>
        );
    };
}

export default UUID;