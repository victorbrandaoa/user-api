import UserService from '../services/userService';

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
      return res.status(404).json({ erro: error.message });
    }
  },

  async postUser(req, res) {
    try {
      const { fname, lname, email } = await UserService.postUser(req.body);
      return res.status(201).json({ fname, lname, email });
    } catch (error) {
      return res.status(404).json({ erro: error.message });
    }
  },

  async putUser(req, res) {
    try {
      const { email: queryEmail } = req.params;
      const { fname, lname, email } = await UserService.putUser(queryEmail, req.body);
      return res.status(200).json({ fname, lname, email });
    } catch (error) {
      return res.status(404).json({ erro: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const { email } = req.params;
      const user = await UserService.deleteUser(email);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ erro: error.message });
    }
  },
};

export default UserController;
