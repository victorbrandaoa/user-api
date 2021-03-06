import UserService from '../services/userService';

const UserController = {
    getAllUsers(req, res) {
        return UserService.getAllUsers().then((users) => res.status(200).json(users));
    },
    getUserByEmail(req, res) {
        const email = req.params.email;
        return UserService.getUserByEmail(email).then((user) => res.status(200).json(user));
    },
    postUser(req, res) {
        const {name, email, password} = req.body;
        return UserService.postUser(name, email, password).then(
            (user) => res.status(201).json(user)
        );
    },
    patchUser(req, res) {
        const email = req.params.email;
        const {name, password} = req.body;
        return UserService.patchUser(name, email, password).then(
            (user) => res.status(200).json(user)
        );
    },
    deleteUser(req, res) {
        const email = req.params.email;
        return UserService.deleteUser(email).then((user) => res.status(200).json(user));
    }
};

export default UserController;
