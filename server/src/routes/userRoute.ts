import express from 'express';
import {
    currentUser,
    loginUser,
    registerUser,
} from '../controller/userCOntroller';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/current', currentUser);

export default router;
