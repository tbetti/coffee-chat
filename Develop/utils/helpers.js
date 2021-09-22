const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.logged_in) {
      res.redirect('/');
    } else {
      // If the user is logged in, moves on to connect route
      next();
    }
  };
  
  module.exports = withAuth;