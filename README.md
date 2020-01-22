# AWebFactory.com Backend

All-in-one interactive CMS (Content Management System) and SCS (Structured Content Server) based on Strapi.

## Customization

Apart from scaffolding in the normal way using `yarn` and `create-strapi-app`, and creating an initial admin user, there are two points of customization:

* MongoDB is used for development mode, instead of Sqlite
* As a result I have added support for using `.env` for server and database configuration, even in development mode

I have followed [instructions in this repo](https://github.com/m-torin/scratchbling-sample/commit/71886f7d3b1f96649c0eccb19d07878bb53332ef) based on this Strapi issue [.env file is not respected #3558](https://github.com/strapi/strapi/issues/3558)

> In my case I am using two extra packages in my package.json:
> 
>     "dotenv": "^6.2.0",
>     "find-config": "^1.0.0",
> 
> And using the bootstrap function (top of the file) to preload my .env before strapi starts:
> 
>     require('dotenv').config({ path: require('find-config')('.env') });

from [@derrickmehaffy's comment](https://github.com/strapi/strapi/issues/3558#issuecomment-507902239)

While `.env` is of course not tracked, I do include an [.env.sample](.env.sample) file for reference.

The local file `.env` is used by development too, since `config/environments/development/server.js and config/environments/development/database.js use `process.env.{VAR}`.
