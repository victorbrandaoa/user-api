import LoginService from '../services/loginService';

const LoginController = {
  async login(req, res) {
    try {
      const user = await LoginService.login(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.status).json({ erro: error.message });
    }
  },
};

export default LoginController;
