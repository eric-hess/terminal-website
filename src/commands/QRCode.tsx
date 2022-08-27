import { Command } from '.';
import { Config } from '../utils';

class QRCode implements Command {
    public help(config: Config): JSX.Element {
        return (
            <span>{config.commands.qrcode.help}</span>
        );
    }
    
    public execute(args: string[], config: Config): JSX.Element {
        return (
            <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${args[0]}`} alt={args[0]}/>
        );
    };
}

export default QRCode;