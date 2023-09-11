import React, { useState } from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { CustomButton } from '../shared/NextButton';
import { useRouter } from 'next/navigation';
import { isValidEmail } from '@/utils/validations';
import { CreateFormSteps } from '@/utils/constants';
import { getUserByEmailAction } from '@/app/_actions';

interface CreateUserEmailProps {
    onEmailChange: (email: string) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepEmail = ({
    onEmailChange,
    onStepChange,
}: CreateUserEmailProps) => {
    const router = useRouter();

    const [userEmail, setUserEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);

    const onStepOneBack = () => {
        router.push('/create-account');
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setUserEmail(e.currentTarget.value);

        if (emailExists) {
            setEmailExists(false);
        }
    };

    const onNextEmail = async () => {
        const emailExists = await getUserByEmailAction(userEmail);

        if (!emailExists) {
            onStepChange(CreateFormSteps.Password);
            onEmailChange(userEmail);
        } else {
            setEmailExists(true);
        }
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
                    value={userEmail}
                    onInputChange={handleEmailChange}
                    name='email'
                    hasError={
                        userEmail.length === 0
                            ? false
                            : !isValidEmail(userEmail)
                    }
                />
                {emailExists && (
                    <h1 className='text-sm text-center mb-8 color-error'>
                        This email already exists. Please login or reset your
                        password
                    </h1>
                )}
            </section>
            <CustomButton
                disabled={
                    userEmail === '' || !isValidEmail(userEmail) || emailExists
                }
                text='Next'
                callback={onNextEmail}
            />
        </React.Fragment>
    );
};

export default CreateUserStepEmail;
