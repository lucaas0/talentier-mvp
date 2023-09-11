'use client';

import { CustomButton } from '@/components/shared/NextButton';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/navigation';

const Dashboard = (props: any) => {
    const { user } = props;

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        user && (
            <div className='flex flex-col w-full h-full max-w-md justify-center p-4'>
                <section className='flex flex-col items-center justify-center'>
                    Welcome, {user.name}
                    <CustomButton
                        callback={handleLogout}
                        disabled={false}
                        text='Logout'
                    />
                </section>
            </div>
        )
    );
};

export default withAuth(Dashboard);
