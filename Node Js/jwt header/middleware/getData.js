const jwt = require('jsonwebtoken');
module.exports.getDetail = async (req, res, next) => {
    try {
      const authHeader = await req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({
          message: 'Auth failed, There is no authorization header',
        });
      }
      const token = await authHeader.split(' ')[1];
      const decoded = await jwt.verify(token, 'T8cHK8HjOHB5xB+wU0sM90ecWAOF6MuYXZmyg+sM');
      return decoded;
    } catch (error) {
      return res.status(401).json({
        message: 'Auth failed',
      });
    }
  };

  