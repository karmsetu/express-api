import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
// @desc GET all contacts
// @route GET /api/contacts
// @access public
export const getContacts = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `/api/contacts` });
});

// @desc Create new contacts
// @route POST /api/contacts
// @access public
export const createNewContact = asyncHandler(
    async (req: Request, res: Response) => {
        const { name, email, phone } = req.body;
        if (!name) {
            res.status(400);
            throw new Error(`name field is missing`);
        }
        if (!email) {
            res.status(400);
            throw new Error(`email field is missing`);
        }
        if (!phone) {
            res.status(400);
            throw new Error(`phone field is missing`);
        }

        res.status(201).json({ message: `/create contact` });
    }
);

// @desc Update all contacts
// @route PUT /api/contacts
// @access public
export const updateContact = asyncHandler(
    async (req: Request, res: Response) => {
        res.status(200).json({ message: `/update contact: ${req.params.id}` });
    }
);

export const deleteContact = asyncHandler(
    async (req: Request, res: Response) => {
        res.status(200).json({ message: `/delete contact: ${req.params.id}` });
    }
);

export const getContact = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `/api/contact:${req.params.id}` });
});
