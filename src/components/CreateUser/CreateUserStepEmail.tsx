import React from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { useRouter } from 'next/navigation';
import { isValidEmail } from '@/utils/validations';
import { CreateFormSteps } from '@/utils/constants';

interface CreateUserEmailProps {
    email: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepEmail = ({
    email,
    onEmailChange,
    onStepChange,
}: CreateUserEmailProps) => {
    const router = useRouter();

    const onStepOneBack = () => {
        router.push('/create-account');
    };

    return (
        <React.Fragment>
            <CreateFormHeader onStepBack={onStepOneBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Enter Email
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>
            <section className='flex flex-col gap-2'>
                <CustomLabel text='Email' />
                <CustomInput
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onInputChange={onEmailChange}
                    name='email'
                    hasError={email.length === 0 ? false : !isValidEmail(email)}
                />
            </section>
            <NextButton
                disabled={email === '' || !isValidEmail(email)}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.Password)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepEmail;
