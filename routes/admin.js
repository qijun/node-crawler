'use strict';

import express from 'express'
import Admin from '../controller/admin/admin'
const router = express.Router()

router.post('/login', Admin.test);
router.get('/users/:id');
router.post('/users');
router.delete('users/:id');

export default router;