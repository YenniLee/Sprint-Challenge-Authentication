const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');
const genToken = require('./generate-token.js');

// '/api/auth/register'
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.addUser(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user);
        res.json({ userID: user.id, token: token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to login.', error: err })
    })
});

module.exports = router;
