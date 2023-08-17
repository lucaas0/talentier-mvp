import React from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';

interface CreateUserNameProps {
    name: string;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepName = ({
    name,
    onNameChange,
    onStepChange,
}: CreateUserNameProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.Password);
    };

    return (
        <React.Fragment>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Add your name
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    Add your name so people can trust you
                </h2>
            </section>
            <section className='flex flex-col gap-2'>
                <CustomLabel text='Name' />
                <CustomInput
                    type='text'
                    placeholder='Your name'
                    value={name}
                    onInputChange={onNameChange}
                    name='name'
                    hasError={name.length === 0 ? false : name.length < 3}
                />
            </section>
            <NextButton
                disabled={name.length < 3}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.Birthday)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepName;
