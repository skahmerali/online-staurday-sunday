const jwt = require('jsonwebtoken');

module.exports.verifyToken = async (req, res, next) => {
  try {
    const authHeader = await req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: 'Auth failed, There is no authorization header',
      });
    }
    const token = await authHeader.split(' ')[1];
    await jwt.verify(token, 'T8cHK8HjOHB5xB+wU0sM90ecWAOF6MuYXZmyg+sM');
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};
