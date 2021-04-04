import bcrypt from 'bcrypt';
import Authentication from '../middlewares/auth';
import UserService from './userService';
import { NotFoundError, UnauthorizedError } from '../errors';

const LoginService = {
  async login(user) {
    const { email, password } = user;

    const currentUser = await UserService.getUserByEmail(email, ['email', 'password']);

    if (!currentUser) {
      throw new NotFoundError('This user does not exist.');
    }

    const passVerify = await bcrypt.compare(password, currentUser.password);
    if (!passVerify) throw new UnauthorizedError('Incorrect password provided.');

    const token = Authentication.generateToken(user);

    return { email, token };
  },
};

export default LoginService;
