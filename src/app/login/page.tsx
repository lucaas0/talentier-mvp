'use client';

import { loginUserAction } from '../_actions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CreateFormHeader from '@/components/shared/CreateFormHeader';
import CustomInput from '@/components/shared/Input';
import { CustomButton } from '@/components/shared/NextButton';
import Spinner from '@/components/shared/Spinner';
import { signIn } from 'next-auth/react';

interface FormElements extends HTMLFormElement {
    email: HTMLInputElement;
    password: HTMLInputElement;
}

interface FormFields {
    email: string;
    password: string;
}

const Login = () => {
    const router = useRouter();

    const [error, setError] = React.useState(false);
    const [formFields, setFormFields] = useState<FormFields>({
        email: '',
        password: '',
    });
    const [isFetching, setIsFetching] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { value, name } = e.currentTarget;

        setFormFields({
            ...formFields,
            [name]: value,
        });

        resetError();
    };

    const handleLoginSubmit = async (event: React.FormEvent<FormElements>) => {
        event.preventDefault();

        try {
            setIsFetching(true);

            const res = await signIn('credentials', {
                redirect: false,
                email: formFields.email,
                password: formFields.password,
                callbackUrl: '/dashboard',
            });

            setIsFetching(false);

            if (res?.error) {
                setError(true);
            } else {
                router.push('/dashboard');
            }
        } catch (error) {
            setError(true);
        }
    };

    const resetError = () => {
        if (error) setError(false);
    };

    const onLoginBack = () => {
        router.push('/welcome');
    };

    const isButtonDisabled = () => {
        return (
            error ||
            isFetching ||
            formFields.email.length === 0 ||
            formFields.password.length === 0
        );
    };

    const preventForm = (event: React.FormEvent<FormElements>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <main className='flex flex-col w-full h-full max-w-md p-4'>
            {isFetching && <Spinner />}
            <CreateFormHeader onStepBack={onLoginBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Log in
                </h1>
            </section>
            <section>
                <form
                    onSubmit={
                        isButtonDisabled() ? preventForm : handleLoginSubmit
                    }
                    className='flex flex-col gap-8 items-center w-full'
                >
                    <CustomInput
                        name='email'
                        onInputChange={handleInputChange}
                        hasError={false}
                        placeholder='Email'
                        type='email'
                        value={formFields.email}
                        required
                    />
                    <CustomInput
                        name='password'
                        onInputChange={handleInputChange}
                        hasError={false}
                        placeholder='Password'
                        type='password'
                        value={formFields.password}
                        required
                    />
                    <CustomButton
                        type={isButtonDisabled() ? 'button' : 'submit'}
                        callback={() => {}}
                        text='Log in'
                        disabled={isButtonDisabled()}
                    />
                </form>
                {error && (
                    <h1 className='text-sm text-center mb-8 color-error'>
                        Incorrect email or password
                    </h1>
                )}
            </section>
            <a className='text-sm text-center mb-8 color-222 underline cursor-pointer'>
                Reset your password
            </a>
            <h4 className='flex-1 flex items-end text-xs color-5E6272 px-10 text-center'>
                By continuing you agree Talentier’s Terms of Services & Privacy
                Policy
            </h4>
        </main>
    );
};

export default Login;
