import { Command } from '.';
import { Config } from '../utils';

interface Response {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

class APOD implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.apod.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        const fetch = require('sync-fetch');
        const response: Response = fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').json();

        console.log(response);

        return (
            <>
                <span>{config.commands.apod.title}: {response.title}</span><br/>
                <span>{config.commands.apod.description}: {response.explanation}</span><br/><br/>
                <span><img src={response.url} alt={response.title}/></span><br/>
            </>
        );
    };
}

export default APOD;