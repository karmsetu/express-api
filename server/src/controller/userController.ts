import asyncHandeler from 'express-async-handler';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const { email, password } = req.body;

    if (!email) {
        res.status(400);
        throw new Error('email fields is missing');
    }
    if (!password) {
        res.status(400);
        throw new Error('password fields is missing');
    }
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error('This user does not exist');
    }
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
    if (user && (await bcrypt.compare(password, user.password))) {
        if (!ACCESS_TOKEN_SECRET) {
            console.error('.ENV_ERROR: ACCESS_TOKEN_SECRET is not defined ');
            process.exit(1);
        }
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            ACCESS_TOKEN_SECRET,
            { expiresIn: '3m' }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Either password or the username is not valid');
    }
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
