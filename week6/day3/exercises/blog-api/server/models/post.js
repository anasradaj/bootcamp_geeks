const knex = require('../config/knex');

module.exports = {
  async getAll() {
    return await knex('posts').select('*').orderBy('id');
  },
  async getById(id) {
    return await knex('posts').where({ id }).first();
  },
  async create(title, content) {
    const [post] = await knex('posts')
      .insert({ title, content })
      .returning('*');
    return post;
  },
  async update(id, title, content) {
    const [post] = await knex('posts')
      .where({ id })
      .update({ title, content })
      .returning('*');
    return post;
  },
  async delete(id) {
    const [post] = await knex('posts')
      .where({ id })
      .del()
      .returning('*');
    return post;
  }
};
