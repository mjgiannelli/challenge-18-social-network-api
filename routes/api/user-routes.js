const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

  // set up the get all and post routes at api/users
  router
  .route('/')
  .get(getAllUsers)
  .post(createUser);