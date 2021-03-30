import bcrypt from 'bcrypt';
import Authentication from '../middlewares/auth';
import UserService from './userService';

const LoginService = {
  async login(user) {
    const { email, password } = user;

    const currentUser = await UserService.getUserByEmail(email, ['email', 'password']);

    if (!currentUser) {
      throw new Error('This user do not exist.');
    }

    const passVerify = await bcrypt.compare(password, currentUser.password);
    if (!passVerify) throw new Error('Incorrect password provided.');

    const token = Authentication.generateToken(user);

    return { email, token };
  },
};

export default LoginService;
