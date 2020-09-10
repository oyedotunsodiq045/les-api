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

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getUsers)
  .post(protect, createUser);

router
  .route('/smes')
  .get(protect, getSmeUsers);

router
  .route('/non-smes')
  .get(protect, getNonSmeUsers);

router
  .route('/smes-non-smes')
  .get(protect, getNonAdminUsers)

router
  .route('/admins')
  .get(protect, getAdminUsers);

router
  .route('/today')
  .get(protect, getTodayRegisteredUsers);

router
  .route('/week')
  .get(protect, getThisWeekRegisteredUsers);

router
  .route('/month')
  .get(protect, getThisMonthRegisteredUsers);

router
  .route('/:id')
  .get(getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;