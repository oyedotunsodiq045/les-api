const express = require('express');
const {
  getThisMonthRegisteredUsers,
  getThisWeekRegisteredUsers,
  getTodayRegisteredUsers,
  getSmeUsers,
  getNonSmeUsers,
  getNonAdminUsers,
  getAdminUsers,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const router = express.Router();

router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/smes')
  .get(getSmeUsers);

router
  .route('/non-smes')
  .get(getNonSmeUsers);

router
  .route('/smes-non-smes')
  .get(getNonAdminUsers)

router
  .route('/admins')
  .get(getAdminUsers);

router
  .route('/today')
  .get(getTodayRegisteredUsers);

router
  .route('/week')
  .get(getThisWeekRegisteredUsers);

router
  .route('/month')
  .get(getThisMonthRegisteredUsers);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;