import { useState } from 'react';

export const useAdminManageJoinCode = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const getInstructorCode = async () => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('http://papiris-api.onrender.com/api/admin/code/instructor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const res = await response.json();
        console.log(res);

        if (!response.ok) {
            setIsLoading(false);
            setError(res.error);
        }
        if (response.ok) {
            setIsLoading(false);
            setMessage("You may email the following code to instructors: " + res.result.code);
        }
    };

    const resetJoinCode = async (code) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('http://papiris-api.onrender.com/api/admin/code/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
        });

        const res = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(res.error);
        }
        if (response.ok) {
            setIsLoading(false);
            setMessage(res.success);
        }
    };

    return { getInstructorCode, resetJoinCode, isLoading, message, error };
};