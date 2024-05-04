async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { username: 'admin', name: 'Admin', password: 'admin', },
    { username: 'standard', name: 'Standard', password: 'standard', },
  ]);
}

module.exports = { seed };
