import React from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';
import { UserExperience } from '@/utils/utils';
import Image from 'next/image';

interface CreateUserViewExperiencesProps {
    experiences: UserExperience[];
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepViewExperiences = ({
    experiences,
    onStepChange,
}: CreateUserViewExperiencesProps) => {
    const onAddExperience = () => {
        onStepChange(CreateFormSteps.Experience);
    };
    return (
        <React.Fragment>
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Your Experiences
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>
            <section className='flex flex-col gap-2 w-full'>
                {experiences.map((exp) => {
                    return (
                        <div className='looking-container flex flex-row justify-between items-center p-3 cursor-pointer'>
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
                                        {exp.title}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {exp.location}
                                    </p>
                                </div>
                            </div>
                            <Image
                                src='/ic-pencil.svg'
                                alt='Edit'
                                width={20}
                                height={20}
                            />
                        </div>
                    );
                })}
            </section>

            <section className='w-full flex justify-center p-12'>
                <button
                    className='bg-7b61ff rounded-full p-3'
                    onClick={onAddExperience}
                >
                    <Image
                        src='/ic-plus.svg'
                        width={24}
                        height={24}
                        alt='Add'
                        style={{ filter: 'invert(100%)' }}
                    />
                </button>
            </section>
            <NextButton
                disabled={false}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.ViewExperiences)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepViewExperiences;
