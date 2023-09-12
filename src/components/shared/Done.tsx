import { useEffect } from 'react';
import Lottie from 'react-lottie';
import checkAnimation from '../../lotties/check-animation.json';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
interface DoneProps {
    password: string;
    email: string;
}

const Done = ({ password, email }: DoneProps) => {
    const router = useRouter();

    useEffect(() => {
        const handleReRoute = async () => {
            setTimeout(async () => {
                const res = await signIn('credentials', {
                    redirect: false,
                    email: email,
                    password: password,
                    callbackUrl: '/dashboard',
                });

                if (res?.error) {
                    router.push('/login');
                } else {
                    router.push('/dashboard');
                }
            }, 1000);
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
