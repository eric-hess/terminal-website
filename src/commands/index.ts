import { Config } from '../utils';
import About from './About';
import Contact from './Contact';
import Date from './Date';
import GitHub from './GitHub';
import Help from './Help';
import UUID from './UUID';
import Weather from './Weather';
import WhoAmI from './WhoAmI';

export interface Command {
    help(config: Config): JSX.Element;
    execute(args: string[], config: Config): JSX.Element;
}

const availableCommands: {[key: string]: Command} = {
    about: new About(),
    contact: new Contact(),
    date: new Date(),
    github: new GitHub(),
    help: new Help(),
    uuid: new UUID(),
    weather: new Weather(),
    whoami: new WhoAmI()
};

export default availableCommands;