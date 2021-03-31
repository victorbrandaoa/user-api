import bcrypt from 'bcrypt';
import Authentication from '../middlewares/auth';
import User from '../models/user';
import { ConflictError, NotFoundError } from '../util/errors';

const UserService = {
  async getAllUsers() {
    const users = await User.findAll({ attributes: ['fname', 'lname', 'email'] });
    return users;
  },

  async getUser(email) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError('This user does not exist.');
    }

    return user;
  },

  async postUser({ fname, lname, email, password }) {
    const user = await this.getUserByEmail(email);

    if (user) {
      throw new ConflictError('This user already exists.');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ fname, lname, email, password: hashPassword });
    newUser.token = Authentication.generateToken({ email, password });

    return newUser;
  },

  async putUser(queryEmail, { fname, lname, email }) {
    const currentUser = await this.getUserByEmail(
      queryEmail, ['fname', 'lname', 'email', 'password'],
    );

    if (!currentUser) {
      throw new NotFoundError('This user does not exist.');
    }
    const { password } = currentUser;
    const newUser = { fname, lname, email, password };
    await User.update(newUser, { where: { email: queryEmail } });

    return newUser;
  },

  async deleteUser(email) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError('This user does not exist.');
    }
    await User.destroy({ where: { email } });

    return user;
  },

  async getUserByEmail(email, attributes = ['fname', 'lname', 'email']) {
    const user = await User.findOne({
      attributes,
      where: { email },
    });

    return user;
  },
};

export default UserService;
