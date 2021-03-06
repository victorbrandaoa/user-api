import User from '../models/user';

const UserService = {
  async getAllUsers() {
    const users = await User.findAll({ attributes: ['name', 'email'] });
    return users;
  },

  async getUserByEmail(email) {
    const user = await User.findOne({
      attributes: ['name', 'email'],
      where: { email },
    });

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

  async patchUser(name, email, password) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new Error('This user do not exist.');
    }
    const updatedUser = await User.update({ name, email, password }, { where: { email } });

    return updatedUser;
  },

  async deleteUser(email) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new Error('This user do not exist.');
    }
    await User.destroy({ where: { email } });

    return user;
  },
};

export default UserService;
