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

> Installation

After cloning this repo and adding an upstream remote, follow these steps:

1. Create a config.js file inside `/database/config/` for proper MySQL configuration that includes:
```
  user: [your username],
  password: [your password],
  database: airFeCReservations
```

2. From within the repo's root directory, to initialize the database in your MySQL, run:
```
mysql < database/schema.sql
```

3. Then, to seed the fake data, run:

```
mysql < database/fakedata.sql
```

4. To start the server with your previously-installed nodemon on port 3004, run: 
```
npm run start
```

> CSS

This module is self-composed. At a certain scroll position, the module's position becomes fixed and a component appears showing the number of views. If you would like to set the default scrollY coordinates to something other than between forty and fifty, change these coordinates in the handleScroll method in App.jsx.

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
