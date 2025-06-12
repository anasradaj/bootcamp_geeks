const knex = require('../config/knex');

module.exports = {
  async getAllUsers() {
    return await knex('users').select('*').orderBy('id');
  },
  async getUserById(id) {
    return await knex('users').where({ id }).first();
  },
  async getUserByUsername(username) {
    return await knex('users').where({ username }).first();
  },
  async createUser(user, hashedPassword) {
    return await knex.transaction(async trx => {
      const [createdUser] = await trx('users')
        .insert(user)
        .returning('*');
      await trx('hashpwd').insert({ username: user.username, password: hashedPassword });
      return createdUser;
    });
  },
  async updateUser(id, user) {
    const [updated] = await knex('users')
      .where({ id })
      .update(user)
      .returning('*');
    return updated;
  },
  async getPasswordHash(username) {
    const record = await knex('hashpwd').where({ username }).first();
    return record ? record.password : null;
  }
};
