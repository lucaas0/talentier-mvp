'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginSection } from '@/components/welcome/LoginSection';
import { useRouter } from 'next/navigation';
import { BackBtn } from '@/components/shared/BackButton';
import Image from 'next/image';

const Welcome = () => {
    const router = useRouter();

    const onBackClick = () => {
        router.push('/welcome');
    };

    const onRegisterUserClick = () => {
        router.push('/register-user');
    };

    const onRegisterOrgClick = () => {
        router.push('/register-org');
    };

    return (
        <AnimatePresence>
            <motion.main
                className='flex flex-col w-full h-full max-w-md justify-between p-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <section className='flex flex-col gap-4'>
                    <BackBtn callback={onBackClick} />
                    <h1 className='text-2xl font-black text-gray-800'>
                        Create account
                    </h1>
                    <h2 className='text-base text-gray-500'>
                        A platform built for <br /> a new way of finding jobs
                    </h2>
                    <div
                        className='looking-container flex flex-row justify-between items-center p-3 cursor-pointer'
                        onClick={onRegisterUserClick}
                    >
                        <div className='flex flex-row gap-4'>
                            <div className=' bg-gray-800 rounded-lg p-3'>
                                <Image
                                    src='/ic-talent.svg'
                                    alt='Talent'
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div>
                                <p className='text-base font-bold text-gray-800'>
                                    Talent
                                </p>
                                <p className='text-sm text-gray-500'>
                                    I’m looking for a job
                                </p>
                            </div>
                        </div>
                        <Image
                            src='/ic-arrow-right.svg'
                            alt='Talent'
                            width={20}
                            height={20}
                        />
                    </div>
                    <div
                        className='looking-container flex flex-row justify-between items-center p-3 cursor-pointer'
                        onClick={onRegisterOrgClick}
                    >
                        <div className='flex flex-row gap-4'>
                            <div className=' bg-indigo-600 rounded-lg p-3'>
                                <Image
                                    src='/ic-org.svg'
                                    alt='Organization'
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div>
                                <p className='text-base font-bold text-gray-800'>
                                    Organization
                                </p>
                                <p className='text-sm text-gray-500'>
                                    I’m seeking colaborators
                                </p>
                            </div>
                        </div>
                        <Image
                            src='/ic-arrow-right.svg'
                            alt='Talent'
                            width={20}
                            height={20}
                        />
                    </div>
                </section>
                <LoginSection />
            </motion.main>
        </AnimatePresence>
    );
};

export default Welcome;
