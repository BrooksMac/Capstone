import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Schedule from '../models/Schedule.js';
import User from '../models/User.js';
import ResetCode from '../models/ResetCode.js';
import nodemailer from 'nodemailer';
import INIT_SCHEDULE from '../config/INIT_SCHEDULE.js';
import { giveUserWeeks } from './weekController.js';
import JoinCode from '../models/JoinCode.js';
import validator from 'validator';

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(401).json({
                error: 'Login unsuccessful. Please double check the email or password and try again.',
            });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Login unsuccessful. Please double check the email or password and try again.',
            });
        }
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.SECRET,
            { expiresIn: '5h' }
        );
        return res.status(200).json({ result: existingUser, token: token });
    } catch (error) {
        next(error);
    }
};

export const register = async (req, res, next) => {
    try {
        const { firstName, lastName, code, email, password, confirmPassword } = req.body;

        const existingUser = await User.findOne({
            email: email,
        });
        if (existingUser) {
            return res
                .status(401)
                .json({ error: 'An account with that email already exists.' });
        }
        if (password.trim() === '' || password == null) {
            return res.status(401).json({ error: 'Password cannot be empty.' });
        }
        if (password !== confirmPassword) {
            return res.status(401).json({ error: 'The passwords entered do not match.' });
        }

        //code for validating access code for students and preceptors here
        const joinCode = await JoinCode.findOne({
            code: code,
        });

        if (!joinCode) {
            return res
                .status(401)
                .json({ error: 'Invalid join code. Please contact your instructor.' });
        }

        //verify email is an email
        if (!validator.isEmail(email)) {
            return res.status(401).json({ error: 'Email is not valid.' });
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(401).json({ error: 'Password not strong enough.' });
        }

        const role = joinCode.role;
        const instructorId = joinCode.instructorId;

        const hashedPassword = await bcrypt.hash(password, 12);

        const userProfile = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            role: role,
            instructorId: instructorId,
            joinCode: code,
        });

        if (!userProfile) {
            return res.status(500).json({ error: 'Unable to create account.' });
        }

        const token = jwt.sign(
            { email: email, id: userProfile._id },
            process.env.SECRET,
            { expiresIn: '5h' }
        );

        //This creates the student user's weeks when the account is created
        if (role.toLowerCase() === 'student') {
            const userWeeks = await giveUserWeeks(
                userProfile._id,
                userProfile.instructorId
            );
        }

        /**
         * creates a schedule & attach it to this user
         */
        const schedule = await Schedule.create(INIT_SCHEDULE(userProfile.email));
        // console.log(schedule);

        return res.status(200).json({ result: userProfile, token: token });
    } catch (error) {
        next(error);
    }
};

export const sendEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        // Create date object as current date + 20 minutes
        const date = new Date();
        const expiryDate = date.getTime() + 20 * 60 * 1000;

        const existingUser = await User.findOne({
            email: email,
        });

        if (!existingUser) {
            return res
                .status(401)
                .json({ error: 'The email entered does not match an existing account.' });
        }

        const resetCode = await ResetCode.create({
            email: email,
            expiryDate: expiryDate,
        });

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'elhajj.refaat@gmail.com',
                pass: 'zouojfdbjiijwwuh',
            },
        });

        const info = await transporter.sendMail({
            from: 'elhajj.refaat@gmail.com',
            to: email, // ###### Change to specific email for testing ######
            subject: 'Reset Password',
            text: 'https://papiris-api.onrender.com/reset/' + resetCode._id,
        });
        return res.status(200).json({ success: 'Please check your inbox.' });
    } catch (error) {
        next(error);
    }
};

export const getCode = async (req, res, next) => {
    try {
        const { id } = req.body;
        const resetCode = await ResetCode.findOne({
            _id: id,
        });
        if (!resetCode) {
            return res
                .status(401)
                .json({ error: 'Your password reset link has expired.' });
        }
        const currentDate = new Date();
        // Check the expiry date
        if (currentDate > resetCode.expiryDate) {
            return res
                .status(401)
                .json({ error: 'Your password reset link has expired.' });
        } else {
        }
        return res.status(200).json({ result: resetCode });
    } catch (error) {
        next(error);
    }
};

export const resetPassword = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (password.trim() === '' || password == null) {
            return res.status(401).json({ error: 'New password cannot be empty.' });
        }

        if (password !== confirmPassword) {
            return res.status(401).json({ error: 'The passwords entered do not match.' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const filter = { email: email };
        const update = { password: hashedPassword };
        const existingUser = await User.findOneAndUpdate(filter, update, {
            returnOriginal: false,
        });

        if (!existingUser) {
            return res
                .status(500)
                .json({ error: 'Sorry the application encountered a problem.' });
        }

        return res.status(200).json({ success: 'Password updated!' });
    } catch (error) {
        next(error);
    }
};

export const deleteCode = async (req, res, next) => {
    try {
        const { id } = req.body;
        const filter = { _id: id };
        const resetCode = await ResetCode.deleteOne(filter);
        if (!resetCode) {
            return res
                .status(500)
                .json({ error: 'Sorry the application encountered a problem.' });
        }
        return res.status(200).json({ message: 'Reset code has been used.' });
    } catch (error) {
        next(error);
    }
};

export const getJoinCodes = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const joinCodes = await JoinCode.find({ instructorId: id });

        if (!joinCodes) {
            return res.status(404).json({ error: 'No join codes found for that user' });
        } else {
            return res.status(200).json(joinCodes);
        }
    } catch (error) {
        next(error);
    }
};
