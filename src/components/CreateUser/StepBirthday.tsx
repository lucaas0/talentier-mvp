import React from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';

interface CreateUserBirthdayProps {
    birthday: string;
    onBirthdayChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepBirthday = ({
    birthday,
    onBirthdayChange,
    onStepChange,
}: CreateUserBirthdayProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.Name);
    };

    return (
        <React.Fragment>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Add your birthday
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    We need to know if you are legally able to work
                </h2>
            </section>
            <section className='flex flex-col gap-2 w-full'>
                <CustomLabel text='Birthday Date' />
                <CustomInput
                    type='date'
                    placeholder='dd/mm/yyyy'
                    value={birthday}
                    onInputChange={onBirthdayChange}
                    name='birthday'
                    hasError={false}
                />
            </section>
            <NextButton
                disabled={birthday.length < 3}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.Birthday)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepBirthday;
