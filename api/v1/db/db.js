/**
 * This is a knex sample with promise that is redundant since we are creating the tbles with an sql file
 * @param {*} knex
 * @param {*} Promise
 */

exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema
            .createTableIfNotExists('user', function (table) {
                table.increments();
                // firstname
                table.string('firstname');
                // lastname
                table.string('lastname');
                // email
                table.string('email');
                // password
                table.string('password');
            })
            .catch((err) => console.log(err)),
    ]);
};
exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('user')]);
};
