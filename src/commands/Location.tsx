import { Command } from '.';
import { Config } from '../utils';

interface Location {
    as: string;
    city: string;
    country: string;
    countryCode: string;
    isp: string;
    lat: number;
    lon: number;
    org: string;
    query: string;
    region: string;
    regionName: string;
    status: string;
    timezone: string;
    zip: string;
}

class Location implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.location.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        const fetch = require('sync-fetch');
        const location: Location = fetch('http://ip-api.com/json/').json();

        return (
            <>
                <span>{config.commands.location.ip}: {location.query}</span><br/>
                <span>{config.commands.location.provider}: {location.isp}</span><br/>
                <span>{config.commands.location.country}: {location.country}</span><br/>
                <span>{config.commands.location.region}: {location.regionName}</span><br/>
                <span>{config.commands.location.city}: {location.city}</span><br/>
            </>
        );
    };
}

export default Location;