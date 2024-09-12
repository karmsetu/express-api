import express, { Request, Response, RouterOptions } from 'express';
import {
    createNewContact,
    deleteContact,
    getContact,
    getContacts,
    updateContact,
} from '../controller/contactController';
import { validateToken } from '../middleware/validateTokenHandler';
const router = express.Router();

router.use(validateToken);

router.route('/').get(getContacts).post(createNewContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

export default router;
