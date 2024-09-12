import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Contact from '../models/contact.model';

// @desc GET all contacts
// @route GET /api/contacts
// @access public
export const getContacts = asyncHandler(async (req: Request, res: Response) => {
    const contacts = await Contact.find({});
    res.status(200).json({ message: contacts });
});

// @desc Create new contacts
// @route POST /api/contacts
// @access public
export const createNewContact = async (req: Request, res: Response) => {
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

    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(201).json({ message: newContact });
    try {
    } catch (error) {
        res.status(500);
        throw new Error(
            `DataBaseError: something happened while saving the document`
        );
    }
};

// @desc Update all contacts
// @route PUT /api/contacts
// @access public
export const updateContact = asyncHandler(
    async (req: Request, res: Response) => {
        const reqContact = await Contact.findById(req.params.id);
        if (!reqContact) {
            res.status(404);
        }
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedContact);
    }
);

export const deleteContact = asyncHandler(
    async (req: Request, res: Response) => {
        const reqContact = await Contact.findById(req.params.id);
        if (!reqContact) {
            res.status(404);
            throw new Error('NO contact found');
        }
        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: `/delete contact: ${req.params.id}` });
    }
);

export const getContact = asyncHandler(async (req: Request, res: Response) => {
    const reqContact = await Contact.findById(req.params.id);
    if (!reqContact) {
        res.status(404);
        throw new Error(`no contact with id:${req.params.id} found`);
    }
    res.status(200).json(reqContact);
});
