import UserService from '../services/userService';

const UserController = {
  async getAllUsers(req, res) {
    const users = await UserService.getAllUsers();

    return res.status(200).json(users);
  },

  async getUserByEmail(req, res) {
    const { email } = req.params;
    const user = await UserService.getUserByEmail(email);

    return res.status(200).json(user);
  },

  async postUser(req, res) {
    const { name, email, password } = req.body;
    const user = await UserService.postUser(name, email, password);

    return res.status(201).json(user);
  },

  async patchUser(req, res) {
    const { email } = req.params;
    const { name, password } = req.body;
    const user = UserService.patchUser(name, email, password);

    return res.status(200).json(user);
  },

  async deleteUser(req, res) {
    const { email } = req.params;
    const user = UserService.deleteUser(email);

    return res.status(200).json(user);
  },
};

export default UserController;
