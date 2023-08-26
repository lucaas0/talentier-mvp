'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreateUserStepEmail from '@/components/CreateUser/CreateUserStepEmail';
import { CreateFormSteps } from '@/utils/constants';
import CreateUserStepPassword from '@/components/CreateUser/CreateUserStepPassword';
import CreateUserStepName from '@/components/CreateUser/StepName';
import CreateUserStepBirthday from '@/components/CreateUser/StepBirthday';
import { User, UserExperience } from '@/utils/utils';
import CreateUserStepExperience from '@/components/CreateUser/Experience';
import CreateUserStepViewExperiences from '@/components/CreateUser/ViewExperiences';

const CreateUserAccount = () => {
    const [userData, setUserData] = useState<User>({
        email: '',
        password: '',
        name: '',
        birthday: new Date(),
        experiences: [],
    });

    const [activeStep, setActiveStep] = useState<CreateFormSteps>(
        CreateFormSteps.Email
    );

    const [editingExp, setEditingExp] = useState<UserExperience | undefined>(
        undefined
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

    const handleBirthdateChange = (newBirthDate: Date) => {
        setUserData({
            ...userData,
            birthday: newBirthDate,
        });
    };

    const handleExperienceChange = (experience: UserExperience) => {
        const copy = { ...userData };

        if (editingExp) {
            const expIdx = copy.experiences.findIndex(
                (exp) => exp.id === experience.id
            );

            copy.experiences[expIdx] = experience;
        } else {
            copy.experiences = [...userData.experiences, experience];
        }

        setUserData({ ...copy });
        setEditingExp(undefined);
    };

    const handleEditingExp = (exp: UserExperience) => {
        setActiveStep(CreateFormSteps.Experience);
        setEditingExp(exp);
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
                        onBirthdayChange={handleBirthdateChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Experience && (
                    <CreateUserStepExperience
                        userName={userData.name}
                        onExperienceChange={handleExperienceChange}
                        onStepChange={handleStepChange}
                        experience={editingExp}
                    />
                )}
                {activeStep === CreateFormSteps.ViewExperiences && (
                    <CreateUserStepViewExperiences
                        experiences={userData.experiences}
                        onStepChange={handleStepChange}
                        onEditExp={handleEditingExp}
                    />
                )}
            </motion.main>
        </AnimatePresence>
    );
};

export default CreateUserAccount;
