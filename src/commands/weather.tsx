const weather = (args: string[]) => {
    const fetch = require('sync-fetch');
    
    const response = fetch(`https://wttr.in/${args[0]}`).text();

    return (<div dangerouslySetInnerHTML={{__html: response}}></div>);
};

export default weather;