import { Config } from '../utils';
import About from './About';
import APOD from './APOD';
import Contact from './Contact';
import Date from './Date';
import GitHub from './GitHub';
import Help from './Help';
import Location from './Location';
import UUID from './UUID';
import Weather from './Weather';
import WhoAmI from './WhoAmI';

export interface Command {
    help(config: Config): JSX.Element;
    execute(args: string[], config: Config): JSX.Element;
}

const availableCommands: {[key: string]: Command} = {
    about: new About(),
    apod: new APOD(),
    contact: new Contact(),
    date: new Date(),
    github: new GitHub(),
    help: new Help(),
    location: new Location(),
    uuid: new UUID(),
    weather: new Weather(),
    whoami: new WhoAmI()
};

export default availableCommands;