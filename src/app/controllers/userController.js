import UserService from '../services/userService';
import Authentication from '../middlewares/auth';

const UserController = {
  async getAllUsers(req, res) {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  },

  async getUser(req, res) {
    try {
      const { email } = req.params;
      const user = await UserService.getUser(email);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.status).json({ erro: error.message });
    }
  },

  async postUser(req, res) {
    try {
      const { fname, lname, email, password } = await UserService.postUser(req.body);
      const token = Authentication.generateToken({ email, password });
      return res.status(201).json({ fname, lname, email, token });
    } catch (error) {
      return res.status(error.status).json({ erro: error.message });
    }
  },

  async putUser(req, res) {
    try {
      const { email: queryEmail } = req.params;
      const { fname, lname, email } = await UserService.putUser(queryEmail, req.body);
      return res.status(200).json({ fname, lname, email });
    } catch (error) {
      return res.status(error.status).json({ erro: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const { email } = req.params;
      const user = await UserService.deleteUser(email);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.status).json({ erro: error.message });
    }
  },
};

export default UserController;
