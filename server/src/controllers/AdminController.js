import JoinCode from '../models/JoinCode.js';

/**
 * Randomly generates a String of specified length.
 * @param {number} length, the length of the random code
 * @returns the generated code
 */
export const generateCode = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Generates a join code for creating an instructor account.
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns the instructor join code
 */
export const generateInstructorCode = async (req, res, next) => {
    try {
        // generate random 10 character string as code
        const code = generateCode(10);

        // set the role
        const role = 'instructor';

        // Create expiry date as current date + 7 days
        const currentDate = new Date();
        const expiryDate = new Date();
        expiryDate.setDate(currentDate.getDate() + 7);

        // Create the join code in database
        // instuctorId will be null for instructors
        const joinCode = await JoinCode.create({
            code: code,
            instructorId: null,
            role: role,
            expiryDate: expiryDate
        });

        return res.status(200).json({ result: joinCode });
    } catch (error) {
        next(error);
    }
}

/**
 * Resets the expiry date of an existing join code.
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
export const resetJoinCode = async (req, res, next) => {
    try {
        const { code } = req.body;

        // Create expiry date as current date + 7 days
        const currentDate = new Date();
        const expiryDate = new Date();
        expiryDate.setDate(currentDate.getDate() + 7);
    
        const filter = { code: code };
        const update = { expiryDate: expiryDate };
        const joinCode = await JoinCode.findOneAndUpdate( filter, update, {
            returnOriginal: false
        });

        if (!joinCode) {
            return res.status(401).json({ error: 'That join code does not exist.' });
        }

        return res.status(200).json({ success: 'The expiry date for this join code has been reset to 7 days from now.' });
    } catch (error) {
        next(error);
    }
}
