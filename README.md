# A simple terminal styled website

![screenshot](./docs/screenshot.png)

[Example (https://e-hess.com)](https://e-hess.com)

## Quick Start

### Using docker

```bash
docker run -it --rm -p 8080:80 ghcr.io/eric-hess/terminal-website:0.2.0
```

If you want to use your own configuration (so you can replace e.g. the contact informations or disable some commands), make sure you mount a own version of the `config.json` in the container.

```bash
docker run -it --rm -p 8080:80 -v $PWD/config.json:/opt/terminal/config.json ghcr.io/eric-hess/terminal-website:0.2.0
```

### Using npm

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run start
```

## Configuration

This is the default `config.json` file. Feel free to customize it for your needs.

```json
{
    "prompt": {
        "username": "guest"
    },
    "commands": {
        "about": {
            "enabled": true,
            "help": "displays some informations about root",
            "value": "I am Eric, a full-stack software developer."
        },
        "contact": {
            "enabled": true,
            "help": "displays some contact information about root",
            "email": "terminal@e-hess.com"
        },
        "date": {
            "enabled": true,
            "help": "displays the current date and time"
        },
        "github": {
            "enabled": true,
            "help": "displays the GitHub profile link of root",
            "value": "eric-hess"
        },
        "help": {
            "enabled": true,
            "help": "displays all available commands"
        },
        "uuid": {
            "enabled": true,
            "help": "generate and displays a uuid"
        },
        "weather": {
            "enabled": true,
            "help": "displays the current weather at given location e.g. 'weather Berlin'"
        },
        "whoami": {
            "enabled": true,
            "help": "tells you who you are",
            "value": "I can't tell you who you are, but I can tell you who I am. Try the 'about' command."
        }
    }
}
```