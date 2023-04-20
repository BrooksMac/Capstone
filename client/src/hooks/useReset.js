import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useAuthContext } from './useAuthContext';

export const useReset = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    //const [resetCode, setResetCode] = useState(null);
    // const { dispatch } = useAuthContext();

    const getCode = async (id) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch(`https://papiris-api.onrender.com/api/auth/getCode/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const res = await response.json();

        if (!response.ok) {
            deleteCode(id);
            navigate('*');
        }
        if (response.ok) {
            setIsLoading(false);
            setMessage(res.success);
            const email = res.result.email;
            return email;
        }
    };

    const resetPassword = async (id, email, password, confirmPassword) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const response = await fetch('https://papiris-api.onrender.com/api/auth/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, email, password, confirmPassword }),
        });

        const res = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(res.error);
        }
        if (response.ok) {
            setMessage(res.success);
            deleteCode(id);
        }
    };

    const deleteCode = async (id) => {
        const response = await fetch(`https://papiris-api.onrender.com/api/auth/deleteCode/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
    };

    return { getCode, resetPassword, isLoading, message, error };
};
