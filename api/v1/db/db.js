exports.up= function (knex, Promise) {
	return Promise.all([
		knex.schema.createTableIfNotExists("user",function(table){
			table.increments();
	//firstname
	table.string('firstname');
	//lastname
	table.string('lastname');
	//email
	table.string('email');
	//password
	table.string('password');

}).catch(err=>console.log(err))
]);
};
exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists("user")
    ]);
};