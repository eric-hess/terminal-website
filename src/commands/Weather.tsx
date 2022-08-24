import { Command } from '.';
import { Config } from '../utils';

class Weather implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.weather.help}</span>
        );
    }

    public execute(args: string[], config: Config): JSX.Element {
        const fetch = require('sync-fetch');
    
        const response = fetch(`https://wttr.in/${args[0]}`).text();

        return (
            <div dangerouslySetInnerHTML={{__html: response}}/>
        );    
    }
}

export default Weather;