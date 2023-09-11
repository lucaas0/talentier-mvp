'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

interface ProtectedRouteProps {
    user: { email: string; name: string } | null; // Define the type for the 'user' prop
}

export default function withAuth(Component: React.FC<ProtectedRouteProps>) {
    return function ProtectedRoute(props: ProtectedRouteProps) {
        const router = useRouter();

        const userStorage = localStorage.getItem('user');

        const userIsAuthenticated = userStorage !== null;

        useEffect(() => {
            if (!userIsAuthenticated) {
                router.push('/login');
                return;
            }
        }, [userIsAuthenticated, router]);

        // Add the 'user' prop to the 'props' object
        const updatedProps = {
            ...props,
            user: userStorage ? JSON.parse(userStorage) : null,
        };

        return <Component {...updatedProps} />;
    };
}
