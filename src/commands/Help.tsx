import availableCommands, { Command } from '.';
import { Config, getEnabledCommands } from '../utils';

class Help implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.help.help}</span>
        );
    }

    public execute(args: string[], config: Config): JSX.Element {
        return (
            <span>
                Available commands:<br/>
                {
                    getEnabledCommands(config).map(entry => {
                        return (
                            <div key={entry}>
                                <span>{entry}: {availableCommands[entry].help(config)}</span>
                                <br/>
                            </div>
                        );
                    })
                }
            </span>
        );
    }
}

export default Help;