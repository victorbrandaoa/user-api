import User from '../models/user';

const UserService = {
  async getAllUsers() {
    return await User.findAll({
      attributes: ['name', 'email'],
    });
  },
  async getUserByEmail(email) {
    return await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email,
      },
    });
  },
  async postUser(name, email, password) {
    // const user = await this.getUserByEmail(email);

    const newUser = await User.create({ name, email, password });
    return newUser;
  },
  async patchUser(name, email, password) {
    // const user = await this.getUserByEmail(email);

    return await User.update({ name, email, password }, {
      where: {
        email,
      },
    });
  },
  async deleteUser(email) {
    // const user = await this.getUserByEmail(email);

    return await User.destroy({
      where: {
        email,
      },
    });
  },
};

export default UserService;
