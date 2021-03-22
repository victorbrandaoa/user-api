import jwt from 'jsonwebtoken';
import authConfig from '../../config/authConfig';

const Authentication = {
  generateToken(userData) {
    return jwt.sign(userData.toJSON(), authConfig.secret);
  },

  verifyToken(req, res, next) {
    const header = req.header('Authentication');

    if (!header) {
      return res.status(400).json({ erro: 'The token does not exist.' });
    }

    const [, token] = header.split(' ');
    try {
      jwt.verify(token, authConfig.secret);

      return next();
    } catch (error) {
      return res.status(403).json({ erro: 'Invalid token.' });
    }
  },
};

export default Authentication;
