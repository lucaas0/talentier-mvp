'use client';

import { CustomButton } from '@/components/shared/NextButton';
import { redirect } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import Spinner from '@/components/shared/Spinner';

export default function Dashboard() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/dashboard');
        },
    });

    const handleLogout = () => {
        signOut({
            callbackUrl: '/welcome',
        });
    };

    return (
        <div className='flex flex-col w-full h-full max-w-md justify-center p-4'>
            {!session && <Spinner />}
            {session && (
                <section className='flex flex-col items-center justify-center'>
                    Welcome {session?.user?.name}
                    <CustomButton
                        callback={handleLogout}
                        disabled={false}
                        text='Logout'
                    />
                </section>
            )}
        </div>
    );
}
