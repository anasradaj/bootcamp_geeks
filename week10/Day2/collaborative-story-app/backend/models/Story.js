
const db = require('../db');

const Story = {
  /**
   * Create a new story.
   * @param {object} storyData - The story data.
   * @param {string} storyData.title - The title of the story.
   * @param {string} storyData.content - The content of the story.
   * @param {number} storyData.authorId - The ID of the author (user).
   * @returns {Promise<object>} The newly created story object.
   */
  async create({ title, content, authorId }) {
    const text = 'INSERT INTO stories(title, content, author_id) VALUES($1, $2, $3) RETURNING *';
    const values = [title, content, authorId];
    const { rows } = await db.query(text, values);
    return rows[0];
  },

  /**
   * Find all stories.
   * @returns {Promise<Array>} A list of all story objects.
   */
  async findAll() {
    const text = 'SELECT * FROM stories ORDER BY created_at DESC';
    const { rows } = await db.query(text);
    return rows;
  },

  /**
   * Find a single story by its ID.
   * @param {number} id - The ID of the story.
   * @returns {Promise<object|undefined>} The story object or undefined.
   */
  async findById(id) {
    const text = 'SELECT * FROM stories WHERE id = $1';
    const values = [id];
    const { rows } = await db.query(text, values);
    return rows[0];
  },

  /**
   * Update an existing story.
   * @param {number} id - The ID of the story to update.
   * @param {object} updates - The updates to apply.
   * @param {string} updates.title - The new title.
   * @param {string} updates.content - The new content.
   * @returns {Promise<object|undefined>} The updated story object.
   */
  async update(id, { title, content }) {
    const text = 'UPDATE stories SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *';
    const values = [title, content, id];
    const { rows } = await db.query(text, values);
    return rows[0];
  },

  /**
   * Delete a story by its ID.
   * @param {number} id - The ID of the story to delete.
   * @returns {Promise<object|undefined>} The deleted story object.
   */
  async deleteById(id) {
    const text = 'DELETE FROM stories WHERE id = $1 RETURNING *';
    const values = [id];
    const { rows } = await db.query(text, values);
    return rows[0];
  }
};

module.exports = Story;
