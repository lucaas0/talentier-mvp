import React from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { isStrongPassword } from '@/utils/validations';
import { CreateFormSteps } from '@/utils/constants';

interface CreateUserPasswordProps {
    password: string;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepPassword = ({
    password,
    onPasswordChange,
    onStepChange,
}: CreateUserPasswordProps) => {
    const handleOnStepBack = () => {
        onStepChange(CreateFormSteps.Email);
    };

    return (
        <React.Fragment>
            <CreateFormHeader onStepBack={handleOnStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Create a password
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    We can remember the password, so you <br /> won't need to
                    enter it on your iCloud devices.
                </h2>
            </section>
            <section className='flex flex-col gap-2'>
                <CustomLabel text='Password' />
                <CustomInput
                    type='password'
                    placeholder='Password'
                    value={password}
                    onInputChange={onPasswordChange}
                    name='password'
                    hasError={
                        password.length === 0
                            ? false
                            : !isStrongPassword(password)
                    }
                />
            </section>
            <section>
                <h2 className='color-667085 text-xs font-medium my-2'>
                    At least 6 characters. A combination of uppercase letters,{' '}
                    <br />
                    lowercase letters, one digit, and one special character.
                </h2>
            </section>
            <NextButton
                disabled={password === '' || !isStrongPassword(password)}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.Name)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepPassword;
