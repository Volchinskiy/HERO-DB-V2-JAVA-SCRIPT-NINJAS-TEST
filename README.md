### `yarn test`

What is this project? Database for comic book characters.

What technologies did I use? 
Front: React, Redux, Redux-saga, Axios, Node-sass Typescript.
Back: Nest, Pg, Typeorm, Multer, Typescript.

How to run it?

**You must have PostgreSQL, Node installed.**

Оpen a terminal in the root folder of the project.
Run these commands.

### `cd front`
### `yarn install`
### `cd ../`
### `cd back`
### `yarn install`

In "back" folder rename example.env to .env and write your connection data for PostgreSQL.
In "front" folder rename example.env to .env.

Enter to PostgreSQL with this command.
### `psql -U <user>`
And import sql files from back/db folder.
Import command must be like this.
### `\i C:/Users/TTT/Desktop/Programming-Maxim-Volchinskiy/Web/SUPER-HERO-DB-V2/back/db/install.sql`
Import these files in this order.
### `install.sql`
### `structure.sql`
### `data.sql`
Exit from PostgreSQL using this.
### `\q`

And run the server.
### `yarn start`

Open an additional terminal in the root folder.
Run these commands.
### `cd front`
### `yarn start`

After that you will open a page in the browser and you will be able to use the database.