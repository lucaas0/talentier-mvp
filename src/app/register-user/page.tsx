'use client';
import React, { useState } from 'react';
import { BackBtn } from '@/components/shared/BackButton';
import CustomInput from '@/components/shared/Input';
import CustomLabel from '@/components/shared/Label';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { NextButton } from '@/components/shared/NextButton';
import { isValidEmail } from '@/utils/validations';
import CreateFormHeader from '@/components/shared/CreateFormHeader';
import CreateUserStepEmail from '@/components/CreateUser/CreateUserStepEmail';
import { CreateFormSteps } from '@/utils/constants';
import CreateUserStepPassword from '@/components/CreateUser/CreateUserStepPassword';
import CreateUserStepName from '@/components/CreateUser/StepName';
import CreateUserStepBirthday from '@/components/CreateUser/StepBirthday';

interface User {
    email: string;
    password: string;
    name: string;
    birthday: string;
}

const CreateUserAccount = () => {
    const [userData, setUserData] = useState<User>({
        email: '',
        password: '',
        name: '',
        birthday: '',
    });
    const [activeStep, setActiveStep] = useState<CreateFormSteps>(
        CreateFormSteps.Email
    );

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { value, name } = e.currentTarget;

        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleStepChange = (newStep: CreateFormSteps) => {
        setActiveStep(newStep);
    };

    console.log(userData);

    return (
        <AnimatePresence>
            <motion.main
                className='flex flex-col w-full h-full max-w-md p-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                {activeStep === CreateFormSteps.Email && (
                    <CreateUserStepEmail
                        email={userData.email}
                        onEmailChange={handleFieldChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Password && (
                    <CreateUserStepPassword
                        password={userData.password}
                        onPasswordChange={handleFieldChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Name && (
                    <CreateUserStepName
                        name={userData.name}
                        onNameChange={handleFieldChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Birthday && (
                    <CreateUserStepBirthday
                        birthday={userData.birthday}
                        onBirthdayChange={handleFieldChange}
                        onStepChange={handleStepChange}
                    />
                )}
            </motion.main>
        </AnimatePresence>
    );
};

export default CreateUserAccount;
