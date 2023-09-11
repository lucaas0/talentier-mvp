import React from 'react';
import { CustomButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';
import { UserEducation } from '@/utils/utils';
import Image from 'next/image';

interface CreateUserViewEducationsProps {
    educations: UserEducation[];
    onStepChange: (nextStep: CreateFormSteps) => void;
    onEdit: (education: UserEducation) => void;
}

const CreateUserStepViewEducations = ({
    educations,
    onStepChange,
    onEdit,
}: CreateUserViewEducationsProps) => {
    const onAddEducation = () => {
        onStepChange(CreateFormSteps.Education);
    };
    return (
        <React.Fragment>
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Your Education
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>
            <section className='flex flex-col gap-2 w-full'>
                {educations.map((education) => {
                    return (
                        <div
                            className='looking-container flex flex-row justify-between items-center p-3 cursor-pointer'
                            key={education.uuid}
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
                                        {`${education.level} - ${education.area}`}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {education.organization}
                                    </p>
                                </div>
                            </div>
                            <button
                                type='button'
                                onClick={() => onEdit(education)}
                            >
                                <Image
                                    src='/ic-pencil.svg'
                                    alt='Edit'
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                    );
                })}
            </section>

            <section className='w-full flex justify-center p-12'>
                <button
                    className='bg-7b61ff rounded-full p-3'
                    onClick={onAddEducation}
                >
                    <Image
                        src='/ic-plus.svg'
                        width={24}
                        height={24}
                        alt='Add'
                    />
                </button>
            </section>
            <CustomButton
                disabled={false}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.Skills)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepViewEducations;
