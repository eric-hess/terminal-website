import about from './about';
import date from './date';
import github from './github';
import help from './help';
import weather from './weather';
import whoami from './whoami';

const availableCommands = {
    about: about,
    date: date,
    help: help,
    github: github,
    weather: weather,
    whoami: whoami
};

export default availableCommands;