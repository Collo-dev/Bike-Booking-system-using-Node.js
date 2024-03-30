// authMiddleware.js

module.exports = {
    isAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/login'); // Redirect unauthenticated users to login page
    },
    isAdmin: (req, res, next) => {
      if (req.isAuthenticated() && req.user.role === 'admin') {
        return next();
      }
      res.status(403).send('Forbidden'); // Return 403 Forbidden for unauthorized access
    }
  };
  