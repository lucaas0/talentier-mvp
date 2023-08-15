'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Splash = () => {
    const router = useRouter();

    useEffect(() => {
        const handleReRoute = () => {
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        };

        handleReRoute();
    }, []);

    return (
        <AnimatePresence>
            <motion.main
                className='splash flex flex-col w-full h-full max max-w-md'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 3 }}
            >
                <div className='onboarding-top w-full h-2/5' />
                <div className='w-full flex-1 flex items-center justify-center'>
                    <Image
                        src='/logo.png'
                        alt='Talentier'
                        width={210}
                        height={37}
                    />
                </div>
                <div className='onboarding-bottom flex flex-col items-center justify-center w-full h-2/5'>
                    <p className='text-xs'>created by</p>
                    <p className='text-sm font-bold'>ZASSA</p>
                </div>
            </motion.main>
        </AnimatePresence>
    );
};

export const SplashScreen = Splash;
