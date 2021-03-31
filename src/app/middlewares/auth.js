import jwt from 'jsonwebtoken';
import authConfig from '../../config/authConfig';

const Authentication = {
  generateToken(userData) {
    return jwt.sign(userData, authConfig.secret, { expiresIn: authConfig.expiresIn });
  },

  verifyToken(req, res, next) {
    const header = req.header('Authentication');

    if (!header) {
      return res.status(401).json({ erro: 'The token does not exist.' });
    }

    const [, token] = header.split(' ');
    try {
      jwt.verify(token, authConfig.secret);

      return next();
    } catch (error) {
      return res.status(401).json({ erro: 'Invalid token.' });
    }
  },
};

export default Authentication;
