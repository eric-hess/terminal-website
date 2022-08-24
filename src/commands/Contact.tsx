import { Command } from '.';
import { Config } from '../utils';

class Contact implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.contact.help}</span>
        );
    }

    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>{config.commands.contact.email}</span>
        );
    }
}

export default Contact;