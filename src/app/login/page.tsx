'use client';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Login = () => {
    const renderSlide1 = () => {
        return (
            <motion.main
                className='login flex flex-col w-full h-full max max-w-md justify-between'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <div className='onboarding-top w-full h-2/5'>
                    <Image
                        src='/bubles-people-1.png'
                        width={250}
                        height={154}
                        alt='Messages'
                        className='bubles-people'
                    />
                </div>
                <div className='flex flex-col gap-4 mx-4'>
                    <h1 className='color-222 text-2xl font-black text-center'>
                        Swipe and <br /> wake up with interviews
                    </h1>
                    <h2 className='color-475467 text-base text-center'>
                        A platform built for <br /> a new way of finding jobs
                    </h2>
                </div>
                <button className='btn-create mx-4'>Create account</button>
                <div className='text-sm mx-4 text-center mb-14'>
                    Already have an account?{' '}
                    <a className='font-black cursor-pointer'>Login</a>
                </div>
            </motion.main>
        );
    };

    const renderSlide2 = () => {
        return (
            <motion.main
                className='login flex flex-col w-full h-full max max-w-md justify-between'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <div className='onboarding-top w-full h-2/5'>
                    <Image
                        src='/bubles-people-1.png'
                        width={250}
                        height={154}
                        alt='Messages'
                        className='bubles-people'
                    />
                </div>
                <div className='flex flex-col gap-4 mx-4'>
                    <h1 className='color-222 text-2xl font-black text-center'>
                        Recruit the talent <br /> that fits you
                    </h1>
                    <h2 className='color-475467 text-base text-center'>
                        A platform built with <br /> the recruiters in mind
                    </h2>
                </div>
                <button className='btn-create mx-4'>Create account</button>
                <div className='text-sm mx-4 text-center mb-14'>
                    Already have an account?{' '}
                    <a className='font-black cursor-pointer'>Login</a>
                </div>
            </motion.main>
        );
    };

    const renderSlide3 = () => {
        return (
            <motion.main
                className='login flex flex-col w-full h-full max max-w-md justify-between'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <div className='bubles w-full h-2/5'>
                    <Image
                        src='/bubles.png'
                        width={250}
                        height={154}
                        alt='Messages'
                    />
                </div>
                <div className='flex flex-col gap-4 mx-4'>
                    <h1 className='color-222 text-2xl font-black text-center'>
                        Meet the new era of <br /> recruitment
                    </h1>
                    <h2 className='color-475467 text-base text-center'>
                        We simplified and optimized <br /> the recruitment
                        process
                    </h2>
                </div>
                <button className='btn-create mx-4'>Create account</button>
                <div className='text-sm mx-4 text-center mb-14'>
                    Already have an account?{' '}
                    <a className='font-black cursor-pointer'>Login</a>
                </div>
            </motion.main>
        );
    };
    return (
        <AnimatePresence>
            <Carousel
                showArrows={false}
                showIndicators
                showStatus={false}
                swipeable
                emulateTouch
            >
                {renderSlide1()}
                {renderSlide2()}
                {renderSlide3()}
            </Carousel>
        </AnimatePresence>
    );
};

export default Login;
