import {
    generateStudentCode,
    generatePreceptorCode,
    resetJoinCode,
    getStudents,
} from '../controllers/instructorController'
import express from 'express';
const router = express.Router();

router.post('/code/student', generateStudentCode);
router.post('/code/preceptor', generatePreceptorCode);
router.post('/code/reset', resetJoinCode);


router.get('/:userId', getStudents);

export default router;
