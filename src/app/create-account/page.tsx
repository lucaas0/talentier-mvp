'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginSection } from '@/components/welcome/LoginSection';
import { useRouter } from 'next/navigation';

const Welcome = () => {
    const router = useRouter();

    const onBackClick = () => {
        router.push('/welcome');
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
                    <button className='button-back my-4' onClick={onBackClick}>
                        <svg
                            width='9'
                            height='14'
                            viewBox='0 0 9 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M7.5 13.25L1.25 7L7.5 0.75'
                                stroke='black'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                    </button>
                    <h1 className='text-2xl font-black text-gray-800'>
                        Create account
                    </h1>
                    <h2 className='text-base text-gray-500'>
                        A platform built for <br /> a new way of finding jobs
                    </h2>
                    <div className='looking-container flex flex-row justify-between items-center p-3 cursor-pointer'>
                        <div className='flex flex-row gap-4'>
                            <div className=' bg-gray-800 rounded-lg p-3'>
                                <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g clip-path='url(#clip0_271_2710)'>
                                        <path
                                            d='M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M2.5 16.875C4.01328 14.2602 6.76172 12.5 10 12.5C13.2383 12.5 15.9867 14.2602 17.5 16.875'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_271_2710'>
                                            <rect
                                                width='20'
                                                height='20'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
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
                        <div className='rotate-180'>
                            <svg
                                width='9'
                                height='14'
                                viewBox='0 0 9 14'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M7.5 13.25L1.25 7L7.5 0.75'
                                    stroke='#BCBCC0'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='looking-container flex flex-row justify-between items-center p-3 cursor-pointer'>
                        <div className='flex flex-row gap-4'>
                            <div className=' bg-indigo-600 rounded-lg p-3'>
                                <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g clip-path='url(#clip0_271_2719)'>
                                        <path
                                            d='M10.625 16.8751V2.50011C10.6249 2.387 10.5942 2.27603 10.536 2.17902C10.4778 2.08202 10.3944 2.00263 10.2946 1.9493C10.1949 1.89598 10.0825 1.87072 9.96956 1.87623C9.85658 1.88174 9.74722 1.9178 9.65313 1.98058L3.40313 6.14699C3.3174 6.20418 3.24715 6.28169 3.19862 6.37261C3.1501 6.46352 3.12481 6.56503 3.125 6.66808V16.8751'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M10.625 6.875H16.25C16.4158 6.875 16.5747 6.94085 16.6919 7.05806C16.8092 7.17527 16.875 7.33424 16.875 7.5V16.875'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M1.25 16.875H18.75'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M8.125 8.75V10'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M5.625 8.75V10'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M5.625 13.125V14.375'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M8.125 13.125V14.375'
                                            stroke='white'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_271_2719'>
                                            <rect
                                                width='20'
                                                height='20'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
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
                        <div className='rotate-180'>
                            <svg
                                width='9'
                                height='14'
                                viewBox='0 0 9 14'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M7.5 13.25L1.25 7L7.5 0.75'
                                    stroke='#BCBCC0'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </div>
                    </div>
                </section>
                <LoginSection />
            </motion.main>
        </AnimatePresence>
    );
};

export default Welcome;
