import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';

export const useRequest = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    // const { dispatch } = useAuthContext();

    const sendEmail = async (email) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('http://papiris-api.onrender.com/api/auth/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
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

    return { sendEmail, isLoading, message, error };
};
