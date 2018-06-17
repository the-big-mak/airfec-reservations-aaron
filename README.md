# AirFeC

> Inspired by AirBnB.

## Related Projects

  - https://github.com/the-big-mak/airfec-photos-vlad
  - https://github.com/the-big-mak/airfec-description-brian
  - https://github.com/the-big-mak/airfec-reviews-justus
  - https://github.com/the-big-mak/airfec-proxy-aaron

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> CSS

This module utilizes styled components.

At a certain scroll position, the module's position becomes fixed and a component appears showing the number of views. If you would like to customize the scrollY coordinates at which the position changes, see line 76 of the handleScroll method in App.jsx.

If you would like to customize the module's position from the top of the window screen, set the top position on line 122 of DivOuterContainer in Reservations.jsx when the component is positioned absolute.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Initializing Data

After cloning this repo and adding an upstream remote, follow these steps:

1. Create a config.js file inside `/database/config/` for proper MySQL configuration that includes:
```
  user: [your username or root],
  password: [your password, or delete this line if using root with no password],
  database: airFeCReservations
```

2. From within the repo's root directory, to initialize the database in your MySQL, run:
```
mysql -u [your username] -p < database/1-schema.sql
```

3. Then, to seed the fake data, run:

```
mysql -u [username] -p < database/2-fakedata.sql
```

### Running the server

To start the server on port 3004, run: 
```
npm run start
```