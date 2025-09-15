const supabase = require('../config/supabaseClient');

const User = {
  async findByEmail(email) {
    const { data, error } = await supabase
      .from('users') 
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
        console.error('Error finding user by email:', error);
    }
    return data;
  },

  async create({ username, email, hashedPassword }) {
    const { data, error } = await supabase
      .from('users') 
      .insert([
        { username: username, email: email, password_hash: hashedPassword },
      ])
      .select();

    if (error) {
        console.error('Error creating user:', error);
        return null; // Return null on error
    }
    return data ? data[0] : null;
  }
};

module.exports = User;
