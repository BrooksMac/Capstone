import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';

export const useManageJoinCode = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    // const { dispatch } = useAuthContext();

    const getStudentCode = async (id) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('https://papiris-api.onrender.com/api/instructor/code/student', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const res = await response.json();
        console.log(res);

        if (!response.ok) {
            setIsLoading(false);
            setError(res.error);
        }
        if (response.ok) {
            setIsLoading(false);
            setMessage("You may email the following code to your students: " + res.result.code);
        }
    };

    const getPreceptorCode = async (id) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('https://papiris-api.onrender.com/api/instructor/code/preceptor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const res = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(res.error);
        }
        if (response.ok) {
            setIsLoading(false);
            setMessage("You may email the following code to preceptors: " + res.result.code);
        }
    };

    const resetJoinCode = async (code) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('https://papiris-api.onrender.com/api/instructor/code/reset', {
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

    return { getStudentCode, getPreceptorCode, resetJoinCode, isLoading, message, error };
};