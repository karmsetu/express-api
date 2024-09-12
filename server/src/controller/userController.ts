import asyncHandeler from 'express-async-handler';
import User from '../models/user.model';
import bcrypt from 'bcrypt';

/**
 * @desc REGISTER a user
 * @route POST /api/users/register
 * @access public
 */

export const registerUser = asyncHandeler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username) {
        res.status(400);
        throw new Error('username is missing from the field');
    }
    if (!email) {
        res.status(400);
        throw new Error('email is missing from the field');
    }
    if (!password) {
        res.status(400);
        throw new Error('password is missing from the field');
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('This user already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error('Unable to create user');
    }
});

/**
 * @desc LOGIN a user
 * @route POST /api/users/login
 * @access public
 */

export const loginUser = asyncHandeler(async (req, res) => {
    res.json({ message: 'register the user' });
});

/**
 * @desc get CURRENT user
 * @route POST /api/users/current
 * @access private
 */

export const currentUser = asyncHandeler(async (req, res) => {
    res.json({ message: 'register the user' });
});
