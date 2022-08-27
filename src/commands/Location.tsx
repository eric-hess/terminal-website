import { Command } from '.';
import { Config } from '../utils';

interface Location {
    ip: string,
    network: string,
    version: string,
    city: string,
    region: string,
    region_code: string,
    country: string,
    country_name: string,
    country_code: string,
    country_code_iso3: string,
    country_capital: string,
    country_tld: string,
    continent_code: string,
    in_eu: boolean,
    postal: string,
    latitude: number,
    longitude: number,
    timezone: string,
    utc_offset: string,
    country_calling_code: string,
    currency: string,
    currency_name: string,
    languages: string,
    country_area: number,
    country_population: number,
    asn: string,
    org: string
}

class Location implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.location.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        const fetch = require('sync-fetch');
        const location: Location = fetch('https://ipapi.co/json/').json();

        return (
            <>
                <span>{config.commands.location.ip}: {location.ip}</span><br/>
                <span>{config.commands.location.provider}: {location.org}</span><br/>
                <span>{config.commands.location.country}: {location.country_name}</span><br/>
                <span>{config.commands.location.region}: {location.region}</span><br/>
                <span>{config.commands.location.city}: {location.city}</span><br/>
            </>
        );
    };
}

export default Location;