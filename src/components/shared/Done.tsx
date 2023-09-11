import { useEffect } from 'react';
import Lottie from 'react-lottie';
import checkAnimation from '../../lotties/check-animation.json';
import { useRouter } from 'next/navigation';

interface DoneProps {
    name: string;
    email: string;
}

const Done = ({ name, email }: DoneProps) => {
    const router = useRouter();

    useEffect(() => {
        const handleReRoute = () => {
            const userStorage = localStorage.getItem('user');

            if (userStorage) {
                localStorage.getItem('user');
            }
            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify({ email, name }));
                router.push('/dashboard');
            }, 3000);
        };

        handleReRoute();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: checkAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section className='flex flex-col h-full w-full items-center justify-center gap-8'>
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1 className='color-222 text-xl font-extrabold'>
                {`You're all done!`}
            </h1>
            <h2 className='color-667085 text-sm font-medium text-center'>
                You can now fully enjoy <br /> the platform
            </h2>
        </section>
    );
};

export default Done;
