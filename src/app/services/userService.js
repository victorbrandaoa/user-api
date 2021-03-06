import User from '../models/user';

const UserService = {
  async getAllUsers() {
    const users = await User.findAll({ attributes: ['name', 'email'] });
    return users;
  },

  async getUser(email) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new Error('This user do not exists.');
    }

    return user;
  },

  async postUser(name, email, password) {
    const user = await this.getUserByEmail(email);

    if (user) {
      throw new Error('This user already exists.');
    }
    const newUser = await User.create({ name, email, password });

    return newUser;
  },

  async putUser(name, email) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('This user do not exists.');
    }
    const { password } = user;
    const newUser = { name, email, password };
    await User.update(newUser, { where: { email } });

    return newUser;
  },

  async deleteUser(email) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new Error('This user do not exists.');
    }
    await User.destroy({ where: { email } });

    return user;
  },

  async getUserByEmail(email) {
    const user = await User.findOne({
      attributes: ['name', 'email'],
      where: { email },
    });

    return user;
  },
};

export default UserService;
