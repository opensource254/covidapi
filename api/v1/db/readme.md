# Database Design

The database is [Postgresql](https://www.postgresql.org/). 

While we shall use an ORM [Bookshelf.js](https://bookshelfjs.org/) that depends on [Knex.js](http://knexjs.org/), it is ususally good to know what happens behind the scenes.

## Database Structure

As it is in stage one we have 4 tables to store data from diffrent users

The tables include:

    users
    doctors
    covid_cases
    admins

> Each of the table is related to doctor table as they are the point of focus in this setup

## How to use

On your local computer you need to have:

`psql` installed

On Unix:

Create a database using postgresql

`$ createdb covidapi`

`$ psql covidapi`

`covidapi=# \i path/to/db.sql`

`covidapi=# \dt` To check the tables create

You are good to go with coding.

Remember to connect to the db before querying !!

> I will be working to find an online database good enough for dev purposes
