/**
 * this module is the entry point of the application
 */
// import libraries
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Week from './src/models/Week.js';
import User from './src/models/User.js';
import JoinCode from './src/models/JoinCode.js';

// import middleware
import errorHandler from './src/middleware/errorHandler.js';

// configure environemnt variables
dotenv.config({ path: './.env' });

// import routers
import weekRoutes from './src/routes/weekRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import preceptorRoutes from './src/routes/PreceptorRoutes.js';
import scheduleRoutes from './src/routes/scheduleRoutes.js';
import instructorRoutes from './src/routes/instructorRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';

// create an instance of express (i think)
const app = express();

// initialize middleware
app.use(express.json()); // enables express to parse json payloads
app.use(cors()); // enables cross origin requests

// initialize routers
// app.use(yourRouterHere);
app.use('/api/weeks', weekRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/preceptor', preceptorRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/admin', adminRoutes);

// initialize error handling middleware
app.use(errorHandler);

// hello, world 👋
app.get('/', (request, response) => {
    response.status(200).json({
        message: 'a poison to erase my existance!',
    });
});

// 🐸
mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGOOSE_URI)
    .then((connection) => {
        app.listen(process.env.PORT, () => {
            console.log('database connection successful!');
            console.log(`listening @ https://papiris-api.onrender.com:${process.env.PORT}!`);
        });
        // Week.create(week1);
        // Week.create(week2);
        // Week.create(week3);
        // Week.create(week4);
        // Week.create(week5);
        // Week.create(week6);
        // Week.create(week7);
        // Week.create(week8);

        //JoinCode for Admins
        // JoinCode.create({
        //     code: 'AdMiN',
        //     instructorId: null,
        //     role: 'administrator',
        //     expiryDate: new Date(),
        // });
    })
    .catch((error) => {
        console.error('database connection failed', error);
        console.error('program terminated');
    });

const week1 = {
    name: 'Week 1',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Laboratory Skills',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Address patient concerns with eyeglass fit.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Adjust the temples to fit behind the patient's ears properly.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Adjust the nose pads to fit the patient properly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Clean the glasses and return them to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Determine if any further adjustments are required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week2 = {
    name: 'Week 2',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Keratometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Align the outer canthus with the market by moving the chin rest dial.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Align the target with the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to look ahead normally at the target (may be an image).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take at least three readings to determine an average. Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Demonstrate proper cleaning and sterilization following the procedure.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Insertion and Removal Training',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene, and prompt the patient to do the same.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to open a contact lens blister.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the care procedure with solutions for contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to determine if the contact lens is oriented correctly for insertion.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the contact lens. Refer to SOPs if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the other contact lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Have the patient wear the contact lenses for a few minutes.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in removing the contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow the insertion and removal steps more than once to ensure the patient is proficient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Administering Patient Eye Drops',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Prepare tissues and the necessary drops.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Remove the cap from the bottle and place it on a clean tissue.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Provide the patient with a tissue to blot their closed eye after drop instillation.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient to look up towards the ceiling.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Hold the bottle in your dominant hand, and gently pull down the right lower eyelid with your preferred finger. With some patients, it may be necessary to hold the upper eyelid as well as the lower eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Position the bottle close to the patient's eye, being careful not to touch the type of the bottle to the eye or the eyelashes.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Squeeze the bottle and allow one drop to fall into the patient's inferior cul-de-sac of the right eye, and then release the lower eyelid.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Repeat steps 6-9 for the patient's left eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes. Practice punctual occlusion, if required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the pharmaceutical agent, number of drops and time of instillation.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Laboratory Skills',
                experiences: 4,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Address patient concerns with eyeglass fit.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Adjust the temples to fit behind the patient's ears properly.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Clean the glasses and return them to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Determine if any further adjustments are required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week3 = {
    name: 'Week 3',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Keratometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Align the outer canthus with the market by moving the chin rest dial.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Align the target with the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to look ahead normally at the target (may be an image).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take at least three readings to determine an average. Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Demonstrate proper cleaning and sterilization following the procedure.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Tear Test',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Prepare tissues and the fluorescein strips needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow appropriate slit lamp examination procedures.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Insert the cobalt blue filter or a yellow Wratten filter to enhance contract.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Carefully open the paper package and remove the fluorescein strip, taking acre not to touch the strip to any surfaces.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Moisten the orange section of the tip with a drip of sterile saline solution.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to look up and gently pull down their lower eyelid. Touch the flat side of the wet end of the fluorescein strip to the patient's inferior palpebral conjunctiva.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Focus the slit lamp beam on the patient's cornea. The tear layer should appear as a bright green layer.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to blink several times, and then look straight ahead, keeping their eyes open.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Start counting seconds as soon as the patient opens their eyes after the last blink.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Scan the cornea with the slit lamp and look for dark spots that appear within the green layer of the fluorescein stain.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Stop counting as soon as you see any streaks or spots within the even layer of fluorescein.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat the procedure for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the tear break-up time (TBUT) in seconds for each eye. The normal time is 15-45 seconds.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Insertion and Removal Training',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene, and prompt the patient to do the same.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to open a contact lens blister.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the care procedure with solutions for contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to determine if the contact lens is oriented correctly for insertion.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the contact lens. Refer to SOPs if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the other contact lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Have the patient wear the contact lenses for a few minutes.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in removing the contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow the insertion and removal steps more than once to ensure the patient is proficient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Administering Patient Eye Drops',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Prepare tissues and the necessary drops.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Remove the cap from the bottle and place it on a clean tissue.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Provide the patient with a tissue to blot their closed eye after drop instillation.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient to look up towards the ceiling.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Hold the bottle in your dominant hand, and gently pull down the right lower eyelid with your preferred finger. With some patients, it may be necessary to hold the upper eyelid as well as the lower eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Position the bottle close to the patient's eye, being careful not to touch the type of the bottle to the eye or the eyelashes.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Squeeze the bottle and allow one drop to fall into the patient's inferior cul-de-sac of the right eye, and then release the lower eyelid.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Repeat steps 6-9 for the patient's left eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes. Practice punctual occlusion, if required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the pharmaceutical agent, number of drops and time of instillation.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week4 = {
    name: 'Week 4',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Tear Test',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Prepare tissues and the fluorescein strips needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow appropriate slit lamp examination procedures.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Insert the cobalt blue filter or a yellow Wratten filter to enhance contract.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Carefully open the paper package and remove the fluorescein strip, taking acre not to touch the strip to any surfaces.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Moisten the orange section of the tip with a drip of sterile saline solution.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to look up and gently pull down their lower eyelid. Touch the flat side of the wet end of the fluorescein strip to the patient's inferior palpebral conjunctiva.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Focus the slit lamp beam on the patient's cornea. The tear layer should appear as a bright green layer.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to blink several times, and then look straight ahead, keeping their eyes open.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Start counting seconds as soon as the patient opens their eyes after the last blink.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Scan the cornea with the slit lamp and look for dark spots that appear within the green layer of the fluorescein stain.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Stop counting as soon as you see any streaks or spots within the even layer of fluorescein.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat the procedure for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the tear break-up time (TBUT) in seconds for each eye. The normal time is 15-45 seconds.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Insertion and Removal Training',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene, and prompt the patient to do the same.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to open a contact lens blister.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the care procedure with solutions for contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to determine if the contact lens is oriented correctly for insertion.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the contact lens. Refer to SOPs if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the other contact lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Have the patient wear the contact lenses for a few minutes.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in removing the contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow the insertion and removal steps more than once to ensure the patient is proficient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Administering Patient Eye Drops',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Prepare tissues and the necessary drops.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Remove the cap from the bottle and place it on a clean tissue.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Provide the patient with a tissue to blot their closed eye after drop instillation.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient to look up towards the ceiling.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Hold the bottle in your dominant hand, and gently pull down the right lower eyelid with your preferred finger. With some patients, it may be necessary to hold the upper eyelid as well as the lower eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Position the bottle close to the patient's eye, being careful not to touch the type of the bottle to the eye or the eyelashes.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Squeeze the bottle and allow one drop to fall into the patient's inferior cul-de-sac of the right eye, and then release the lower eyelid.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Repeat steps 6-9 for the patient's left eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes. Practice punctual occlusion, if required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the pharmaceutical agent, number of drops and time of instillation.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Laboratory Skills',
                experiences: 4,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Address patient concerns with eyeglass fit.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Adjust the temples to fit behind the patient's ears properly.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Adjust the nose pads to fit the patient properly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Clean the glasses and return them to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Determine if any further adjustments are required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week5 = {
    name: 'Week 5',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Insertion and Removal Training',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene, and prompt the patient to do the same.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to open a contact lens blister.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the care procedure with solutions for contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to determine if the contact lens is oriented correctly for insertion.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the contact lens. Refer to SOPs if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the other contact lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Have the patient wear the contact lenses for a few minutes.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in removing the contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow the insertion and removal steps more than once to ensure the patient is proficient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week6 = {
    name: 'Week 6',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Insertion and Removal Training',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene, and prompt the patient to do the same.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to open a contact lens blister.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the care procedure with solutions for contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to determine if the contact lens is oriented correctly for insertion.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the contact lens. Refer to SOPs if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in inserting the other contact lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Have the patient wear the contact lenses for a few minutes.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient in removing the contact lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Follow the insertion and removal steps more than once to ensure the patient is proficient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Practice Management',
                experiences: 4,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet patients.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Book appointments.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Confirm appointments.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Answer incoming calls.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Enter payments.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Enter insurance information.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate day-end balance.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Maintain chart.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete deposit.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Laboratory Skills',
                experiences: 4,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Address patient concerns with eyeglass fit.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Adjust the temples to fit behind the patient's ears properly.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Adjust the nose pads to fit the patient properly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Clean the glasses and return them to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Determine if any further adjustments are required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week7 = {
    name: 'Week 7',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};

const week8 = {
    name: 'Week 8',
    is_master: true,
    student_id: null,
    preceptor_id: null,
    submitted_to_preceptor: false,
    instructor_id: null,
    submitted_to_instructor: false,
    skills_assessment: {
        //Start of section array
        section: [
            //Start of a section
            {
                name: 'Lensometry',
                experiences: 3,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the left lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform and record prescription transposition.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Calculate and record the spherical equivalence.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Perform lensometry on the patient's glasses and evaluate this against the new prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Process invoice, billing and payment in EMR.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Slit Lamp',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Greet and seat the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Complete an external examination of the patient, looking for any abnormalities of the external eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin so that the patient's outer canthus is aligned with the marker on the head reset.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Repeat for the other eye.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Record the results.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Contact Lens Fitting',
                experiences: 1,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Explain the procedure to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate the prescription to determine power needs and contact lens availability.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Convert the prescription, if needed, with vertex conversion or spherical equivalent formulas.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Use slit lamp skills to evaluate the anterior segment.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Instill fluorescein dye and assess the break-up time.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Measure the vision iris diameter (HVID).',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Perform keratometry readings with the keratometer or auto-keratometer.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Based on the readings and measurements, choose a contact lens type, base curve and diameter for fitting.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Choose modality, if possible.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "If possible, insert the chosen contact lens in the patient's eye and wait 5-10 minutes prior to evaluation.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Evaluate fit and vision, and perform over-refraction, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Refer to SOPs, if needed.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
            //Start of a section
            {
                name: 'Laboratory Skills',
                experiences: 4,
                //Start of skills aray
                skills: [
                    //Start of a skill
                    {
                        name: 'Address patient concerns with eyeglass fit.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Practice hand hygiene.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: "Adjust the temples to fit behind the patient's ears properly.",
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Adjust the nose pads to fit the patient properly.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Clean the glasses and return them to the patient.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                    //Start of a skill
                    {
                        name: 'Determine if any further adjustments are required.',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    //End of a skill
                ],
                //End of skills array
            },
            //End of a section
        ],
        //End of section array
        //Start of workplace expectations
        //TODO: fill this in later
        workplace_expectations: [],
        //End of workplace expectations
        //Start of preceptor feedback
        preceptor_feedback: null,
        //End of preceptor feedback
        //Start of self reflection
        //TODO: add this
        //End of self reflection
    },
    //End of skills assessment section
};
