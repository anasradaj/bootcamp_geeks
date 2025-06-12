const knex = require('../config/knex');

module.exports = {
  async getAll() {
    return await knex('books').select('*').orderBy('id');
  },
  async getById(id) {
    return await knex('books').where({ id }).first();
  },
  async create({ title, author, published_year }) {
    const [book] = await knex('books')
      .insert({ title, author, published_year })
      .returning('*');
    return book;
  },
  async update(id, { title, author, published_year }) {
    const [book] = await knex('books')
      .where({ id })
      .update({ title, author, published_year })
      .returning('*');
    return book;
  },
  async delete(id) {
    const [book] = await knex('books')
      .where({ id })
      .del()
      .returning('*');
    return book;
  }
};
